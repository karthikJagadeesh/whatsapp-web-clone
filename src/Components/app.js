// FIXME This is not necessary.
// I want to keep this ⤵️ for `now`, not willing to trade this for HMR! yet...
import 'babel-polyfill';
import React, { Component } from 'react';
import { Broadcast } from 'react-broadcast';
import { Div } from 'glamorous';
import { format } from 'date-fns';

import Profile from './Profile';
import ChatBox from './ChatBox';
import {
  profileDataUrl,
  friendDataUrl,
  allFriendsDataUrl,
  fetchData
} from '../network';

class ChatWallpaperColor extends Component {
  state = {
    hoveredColor: {
      id: null,
      color: '#E5DDD5'
    },
    selectedColor: {
      id: null,
      color: '#E5DDD5'
    }
  };

  handleColorBoxHover = (id, color) =>
    this.setState({ hoveredColor: { color, id } });

  handleColorBoxHoverOut = _ =>
    this.setState(prevState => ({
      selectedColor: {
        color: prevState.selectedColor.color,
        id: prevState.selectedColor.id
      },
      hoveredColor: {
        id: 100,
        color: prevState.selectedColor.color
      }
    }));

  handleColorBoxClick = (id, color) =>
    this.setState({ selectedColor: { id, color } });

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

  friendsListOrderUpdater = ({ changed, updatedProfileData }) =>
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

            this.friendsListOrderUpdater({
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

        this.friendsListOrderUpdater({
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
      this.friendsListOrderUpdater({
        changed: false,
        updatedProfileData
      });
    }
  };

  handleFriendsListClick = id => {
    (async _ => {
      const url = `${friendDataUrl}/${id}`;
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
    const { friendData } = this.state;

    return (
      <ChatWallpaperColor>
        {({
          hoveredColor,
          selectedColor,
          handleColorBoxClick,
          handleColorBoxHover,
          handleColorBoxHoverOut
        }) => (
          <Div
            css={{
              display: 'grid',
              gridTemplateColumns: '3fr 7fr',
              height: '100%',
              boxShadow: '0px 0px 8px #c4c4c4'
            }}
          >
            <Div css={{ background: '#eee' }}>
              <Broadcast channel="profile" value={this.state}>
                <Profile
                  hoveredColor={hoveredColor}
                  selectedColor={selectedColor}
                  handleFriendsListClick={this.handleFriendsListClick}
                  selectedFriend={friendData ? friendData.id : '0'}
                  handleColorBoxClick={handleColorBoxClick}
                  handleColorBoxHover={handleColorBoxHover}
                  handleColorBoxHoverOut={handleColorBoxHoverOut}
                />
              </Broadcast>
            </Div>
            <Div css={{ background: '#F7F9FA' }}>
              <ChatBox
                checkForLastChat={this.checkForLastChat}
                currentFriend={this.handleFriendsListClick}
                friendData={friendData}
                handleSearchClick={this.handleSearchClick}
                backgroundColor={hoveredColor.color}
              />
            </Div>
          </Div>
        )}
      </ChatWallpaperColor>
    );
  }
}
