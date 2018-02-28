import "babel-polyfill";
import React, { Component } from "react";
import { Broadcast } from "react-broadcast";
import { Div } from "glamorous";
import { format } from "date-fns";

import Profile from "./Profile";
import ChatBox from "./ChatBox";
import {
  profileDataUrl,
  friendDataUrl,
  allFriendsDataUrl,
  fetchData
} from "../network";

class ChatWallpaperChanger extends Component {
  state = {
    currentHovered: {
      id: null,
      color: "#E5DDD5"
    },
    currentSelected: {
      id: null,
      color: "#E5DDD5"
    }
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

  handleColorBoxClick = ({ currentTarget }) => {
    this.setState({
      currentSelected: {
        id: currentTarget.dataset.id,
        color: currentTarget.dataset.color
      }
    });
  };

  render() {
    const {
      handleColorBoxClick,
      handleColorBoxHover,
      handleColorBoxHoverOut
    } = this;

    return this.props.children({
      ...this.state,
      handleColorBoxClick,
      handleColorBoxHover,
      handleColorBoxHoverOut
    });
  }
}

export default class App extends Component {
  state = {
    profileData: {},
    friendData: null,
    recentChat: {
      id: null,
      changed: true
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
    const { recentChat, friendData, profileData } = this.state;
    const mostRecentIndex = profileData.friends.findIndex(
      friend => friend.id === friendData.id
    );
    /* If someone down the list(other than the first person) had the last
       interaction, then pull him to the top of the active chat list OR
       if the friend is not in the active list, add him to the top */
    if (recentChat.id !== friendData.id) {
      /* If the recent interaction was with someone not already in the current
         active list i.e with someone from new chat/all friends list */
      if (mostRecentIndex === -1) {
        // FIXME Move the fetch calls and logic into a seperate function.
        //
        (async _ => {
          try {
            const allFriends = await fetchData(allFriendsDataUrl);
            const mostRecent = allFriends.find(
              friend => friend.id === friendData.id
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
        // FIXME Move this sorting loginc into a function.
        // rearrange the list to put the person on the top
        const mostRecent = profileData.friends[mostRecentIndex];
        mostRecent.lastChat = lastChat;
        mostRecent.latest_timestamp = timestamp;
        // FIXME Write using contact, slice and spread
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
        if (friend.id === friendData.id) {
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

  handleListItemClick = ({ currentTarget }) => {
    (async _ => {
      const id = currentTarget.dataset.id;
      const url = friendDataUrl + id;
      try {
        const friendData = await fetchData(url);
        this.setState({ friendData });
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
    const { friendData, modalDialog } = this.state;

    // FIXME The Usage of Broadcast here seems bad. You are only skipping one level deep.
    /* ⬆️ Apart from Profile, I pass this to profile settings and profile info as well,
       which is 3-4 levels deep */
    return (
      <ChatWallpaperChanger>
        {({
          currentHovered,
          currentSelected,
          handleColorBoxClick,
          handleColorBoxHover,
          handleColorBoxHoverOut
        }) => (
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
                  currentHovered={currentHovered}
                  currentSelected={currentSelected}
                  handleListItemClick={this.handleListItemClick}
                  selectedFriend={friendData ? friendData.id : "0"}
                  handleColorBoxClick={handleColorBoxClick}
                  handleColorBoxHover={handleColorBoxHover}
                  handleColorBoxHoverOut={handleColorBoxHoverOut}
                />
              </Broadcast>
            </Div>
            <Div css={{ background: "#F7F9FA" }}>
              <ChatBox
                checkForLastChat={this.checkForLastChat}
                currentFriend={this.handleListItemClick}
                friendData={friendData}
                handleSearchClick={this.handleSearchClick}
                backgroundColor={currentHovered.color}
              />
            </Div>
          </Div>
        )}
      </ChatWallpaperChanger>
    );
  }
}
