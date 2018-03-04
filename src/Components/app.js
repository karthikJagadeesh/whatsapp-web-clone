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
    this.setState({ hoveredColor: { id, color } });

  handleColorBoxHoverOut = _ =>
    // FIXME state is good enough. Because it's the only state that exists. You don't have access two states.
    this.setState(prevState => ({
      // FIXME Why do you need to do this at all? You are simply over-riding with same values.
      selectedColor: {
        color: prevState.selectedColor.color,
        id: prevState.selectedColor.id
      },
      hoveredColor: {
        // FIXME Why 100? Shouldn't it be null?
        id: 100,
        color: prevState.selectedColor.color
      }
    }));

  handleColorBoxClick = (id, color) =>
    this.setState({ selectedColor: { id, color } });

  render() {
    // FIXME Remove these unnecessary destructuring assignments. They doesn't bring any new clartity to code.
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

class ProfileAndFriendsList extends Component {
  state = {
    profileData: {},
    recentChat: {
      id: null,
      changed: true
    }
  };

  // FIXME Add paranthesis everywhere around class field intializers
  friendsListOrderUpdater = ({ changed, updatedProfileData }) =>
    this.setState({
      profileData: updatedProfileData,
      recentChat: {
        id: updatedProfileData.friends[0].id,
        changed
      }
    });

  // FIXME Why reorder the name? It doesn't tell anything about how you are reordering. Think of better name
  // FIXME This doesn't need to be method.
  reOrderFriendsList = ({
    // FIXME You are only using profileData.friends. So Why are you passing the rest.
    profileData,
    // FIXME mostRecentIndex doesn't make a good name. You want to update the list at particular index. Just call it index or friendIndex
    mostRecentIndex,
    lastChat,
    timestamp
  }) => {
    // FIXME Do you need to iterate over the entire array to just update on thing? Just take that element by index and created the updated record
    // FIXME This name is utterly useless. You don't even need to use it.
    const updatedProfileDataFriends = profileData.friends.map(
      (friend, index) => {
        // FIXME You should usually write this as a ternary operator
        if (index === mostRecentIndex)
          // FIXME Why do you have the name latest_timestamp. You will only save latest_timestamp and you don't have anything called previous timestamps.
          // So it should only be called timestamp.
          return { ...friend, lastChat, latest_timestamp: timestamp };
        return friend;
      }
    );
    return [
      // FIXME This is single element. Just use a[i] form.
      ...updatedProfileDataFriends.slice(mostRecentIndex, mostRecentIndex + 1),
      ...updatedProfileDataFriends.slice(0, mostRecentIndex),
      ...updatedProfileDataFriends.slice(mostRecentIndex + 1)
    ];
  };

  // FIXME WHY are you using IIFE here?
  // Why is this `listWithNewlyAddedFriend = async (lastChat, timestamp) => {}` not enough
  listWithNewlyAddedFriend = (lastChat, timestamp) =>
    (async _ => {
      const { profileData } = this.state;
      const { friendData } = this.props;
      try {
        const allFriends = await fetchData(allFriendsDataUrl);
        const mostRecent = {
          ...allFriends.find(friend => friend.id === friendData.id),
          lastChat,
          latest_timestamp: timestamp
        };
        return {
          ...profileData,
          friends: [mostRecent, ...profileData.friends]
        };
      } catch (error) {
        console.error(error);
      }
    })();

  // decides who in the active chat list - friend's list should be at the top
  // FIXME This function still looks like garbage
  checkForLastChat = (lastChat, timestamp) => {
    const { recentChat, profileData } = this.state;
    const { friendData } = this.props;
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
        (async _ => {
          try {
            const updatedProfileData = await this.listWithNewlyAddedFriend(
              lastChat,
              timestamp
            );
            this.friendsListOrderUpdater({
              changed: true,
              updatedProfileData
            });
          } catch (error) {
            console.error(error);
          }
        })();
      } else {
        // rearrange the list to put the person on the top
        // FIXME Just inline this object ing to the function, it's not used elsewhere
        const paramsForReOrdering = {
          profileData,
          mostRecentIndex,
          lastChat,
          timestamp
        };
        const rearrangedFriendsList = this.reOrderFriendsList(
          paramsForReOrdering
        );
        const updatedProfileData = {
          ...profileData,
          friends: rearrangedFriendsList
        };

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
        if (friend.id === friendData.id)
          return {
            ...friend,
            lastChat: lastChat,
            latest_timestamp: timestamp
          };

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
    const { checkForLastChat } = this;
    return this.props.children({
      ...this.state,
      checkForLastChat
    });
  }
}

export default class App extends Component {
  state = { friendData: null };

  // FIXME The name here still feels bad. FriendsList represent mutliple items, but the click only happens on single item.
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

  render() {
    const { friendData } = this.state;

    return (
      <ProfileAndFriendsList friendData={friendData}>
        {({ checkForLastChat, profileData, recentChat }) => (
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
                <Div background="#eee">
                  <Broadcast
                    channel="profile"
                    value={{ ...this.state, profileData, recentChat }}
                  >
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
                <Div background="#F7F9FA">
                  <ChatBox
                    checkForLastChat={checkForLastChat}
                    currentFriend={this.handleFriendsListClick}
                    friendData={friendData}
                    backgroundColor={hoveredColor.color}
                  />
                </Div>
              </Div>
            )}
          </ChatWallpaperColor>
        )}
      </ProfileAndFriendsList>
    );
  }
}
