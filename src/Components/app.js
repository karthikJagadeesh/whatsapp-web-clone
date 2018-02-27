import "babel-polyfill";
import React, { Component } from "react";
import { Div } from "glamorous";
import { Broadcast } from "react-broadcast";
import { format } from "date-fns";

import Profile from "./Profile";
import ChatBox from "./ChatBox";
import {
  profileDataUrl,
  friendDataUrl,
  allFriendsDataUrl,
  fetchData
} from "../network";

export default class App extends Component {
  state = {
    profileData: {},
    chatBoxContext: null,
    recentChat: {
      id: null,
      changed: true
    },
    currentHovered: {
      id: null,
      color: "#E5DDD5"
    },
    currentSelected: {
      id: null,
      color: "#E5DDD5"
    }
  };

  recentActiveFriendsListOrderUpdater = ({ changed, updatedProfileData }) =>
    this.setState({
      profileData: updatedProfileData,
      recentChat: {
        id: updatedProfileData.friends[0].id,
        changed
      }
    });

  // decides who in the active chat list - friend's list should be at the top
  checkForLastChat = (lastChat, timestamp) => {
    const { recentChat, chatBoxContext, profileData } = this.state;
    const mostRecentIndex = profileData.friends.findIndex(
      friend => friend.id === chatBoxContext.id
    );
    /* If someone down the list(other than the first person) had the last
       interaction, then pull him to the top of the active chat list OR
       if the friend is not in the active list, add him to the top */
    if (recentChat.id !== chatBoxContext.id) {
      /* If the recent interaction was with someone not already in the current
         active list i.e with someone from new chat/all friends list */
      if (mostRecentIndex === -1) {
        (async _ => {
          try {
            const allFriends = await fetchData(allFriendsDataUrl);
            const mostRecent = allFriends.find(
              friend => friend.id === chatBoxContext.id
            );
            mostRecent.lastChat = lastChat;
            mostRecent.latest_timestamp = timestamp;
            const updatedList = [mostRecent, ...profileData.friends];
            const updatedProfileData = { ...profileData };
            updatedProfileData.friends = updatedList;

            this.recentActiveFriendsListOrderUpdater({
              changed: true,
              updatedProfileData
            });
          } catch (error) {
            console.error(error);
          }
        })();
      } else {
        // rearrange the list to put the person on the top
        const mostRecent = profileData.friends[mostRecentIndex];
        mostRecent.lastChat = lastChat;
        mostRecent.latest_timestamp = timestamp;
        const updatedList = [...profileData.friends];
        updatedList.splice(mostRecentIndex, 1);
        updatedList.unshift(mostRecent);
        const updatedProfileData = { ...profileData };
        updatedProfileData.friends = updatedList;

        this.recentActiveFriendsListOrderUpdater({
          changed: true,
          updatedProfileData
        });
      }
    } else {
      /* If the recent interation was with the same person who is currenty
         on the top, leave as is, just update {last message} in the active
         friends list */
      const updatedProfileDataFriends = profileData.friends.map(friend => {
        if (friend.id === chatBoxContext.id) {
          return {
            ...friend,
            lastChat: lastChat,
            latest_timestamp: timestamp
          };
        }
        return friend;
      });
      const updatedProfileData = {
        ...profileData,
        friends: updatedProfileDataFriends
      };
      this.recentActiveFriendsListOrderUpdater({
        changed: false,
        updatedProfileData
      });
    }
  };

  handleColorBoxClick = ({ currentTarget }) => {
    this.setState({
      currentSelected: {
        id: currentTarget.dataset.id,
        color: currentTarget.dataset.color
      }
    });
  };
  handleColorBoxHover = ({ currentTarget }) => {
    this.setState({
      currentHovered: {
        color: currentTarget.dataset.color,
        id: currentTarget.dataset.id
      }
    });
  };
  handleColorBoxHoverOut = _ => {
    this.setState(prevState => {
      return {
        currentSelected: {
          color: prevState.currentSelected.color,
          id: prevState.currentSelected.id
        },
        currentHovered: {
          id: 100,
          color: prevState.currentSelected.color
        }
      };
    });
  };

  handleListItemClick = ({ currentTarget }) => {
    (async _ => {
      const id = currentTarget.dataset.id;
      const url = friendDataUrl + id;
      try {
        const chatBoxContext = await fetchData(url);
        this.setState({ chatBoxContext });
      } catch (error) {
        console.error(error);
      }
    })();
  };

  async componentDidMount() {
    try {
      const profileData = await fetchData(profileDataUrl);
      this.setState({
        profileData,
        recentChat: {
          id: profileData.friends[0].id,
          changed: false
        }
      });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const { chatBoxContext, currentHovered, modalDialog } = this.state;

    return (
      <Div
        css={{
          display: "grid",
          gridTemplateColumns: "3fr 7fr",
          height: "100%",
          boxShadow: "0px 0px 8px #c4c4c4"
        }}
      >
        <Div css={{ background: "#eee" }}>
          <Broadcast channel="profile" value={this.state}>
            <Profile
              handleListItemClick={this.handleListItemClick}
              selectedFriend={chatBoxContext ? chatBoxContext.id : "0"}
              handleColorBoxClick={this.handleColorBoxClick}
              handleColorBoxHover={this.handleColorBoxHover}
              handleColorBoxHoverOut={this.handleColorBoxHoverOut}
            />
          </Broadcast>
        </Div>
        <Div css={{ background: "#F7F9FA" }}>
          <ChatBox
            checkForLastChat={this.checkForLastChat}
            currentFriend={this.handleListItemClick}
            chatBoxContext={chatBoxContext}
            handleSearchClick={this.handleSearchClick}
            backgroundColor={currentHovered.color}
          />
        </Div>
      </Div>
    );
  }
}
