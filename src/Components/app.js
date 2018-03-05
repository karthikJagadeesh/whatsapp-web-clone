import 'babel-polyfill';
import React, { Component, Fragment } from 'react';
import { Broadcast } from 'react-broadcast';
import glamorous, { Div } from 'glamorous';
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

  handleColorBoxHover = (id, color) => {
    this.setState({ hoveredColor: { id, color } });
  };

  handleColorBoxHoverOut = _ => {
    this.setState({
      hoveredColor: {
        id: null,
        color: this.state.selectedColor.color
      }
    });
  };

  handleColorBoxClick = (id, color) => {
    this.setState({ selectedColor: { id, color } });
  };

  render() {
    return this.props.children({
      ...this.state,
      handleColorBoxClick: this.handleColorBoxClick,
      handleColorBoxHover: this.handleColorBoxHover,
      handleColorBoxHoverOut: this.handleColorBoxHoverOut
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

  friendsListOrderUpdater = ({ changed, updatedProfileData }) => {
    this.setState({
      profileData: updatedProfileData,
      recentChat: {
        id: updatedProfileData.friends[0].id,
        changed
      }
    });
  };

  // decides who in the active chat list - friend's list should be at the top
  // FIXME This function still looks like garbage
  checkForLastChat = (lastChat, timestamp) => {
    const { recentChat, profileData } = this.state;
    const { friendData } = this.props;
    const friendIndex = profileData.friends.findIndex(
      friend => friend.id === friendData.id
    );

    const listWithNewlyAddedFriend = async (lastChat, timestamp) => {
      const { profileData } = this.state;
      const { friendData } = this.props;
      try {
        const allFriends = await fetchData(allFriendsDataUrl);
        const mostRecent = {
          ...allFriends.find(friend => friend.id === friendData.id),
          lastChat,
          timestamp: timestamp
        };
        return {
          ...profileData,
          friends: [mostRecent, ...profileData.friends]
        };
      } catch (error) {
        console.error(error);
      }
    };

    const moveTheFriendToTheTopOfList = (
      profileDatafriends,
      friendIndex,
      lastChat,
      timestamp
    ) => {
      // FIXME Do you need to iterate over the entire array to just update on thing? Just take that element by index and created the updated record
      // FIXME This name is utterly useless. You don't even need to use it.
      const updatedProfileDataFriends = profileDatafriends.map(
        (friend, index) => {
          if (index === friendIndex)
            // FIXME Why do you have the name timestamp. You will only save timestamp and you don't have anything called previous timestamps.
            // So it should only be called timestamp.
            return { ...friend, lastChat, timestamp: timestamp };
          return friend;
        }
      );
      return [
        updatedProfileDataFriends[friendIndex],
        ...updatedProfileDataFriends.slice(0, friendIndex),
        ...updatedProfileDataFriends.slice(friendIndex + 1)
      ];
    };

    /* If someone down the list(other than the first person) had the last
         interaction, then pull him to the top of the active chat list OR
         if the friend is not in the active list, add him to the top */
    if (recentChat.id !== friendData.id) {
      /* If the recent interaction was with someone not already in the current
           active list i.e with someone from new chat/all friends list */
      if (friendIndex === -1) {
        (async _ => {
          try {
            const updatedProfileData = await listWithNewlyAddedFriend(
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
        const rearrangedFriendsList = moveTheFriendToTheTopOfList(
          profileData.friends,
          friendIndex,
          lastChat,
          timestamp
        );
        const updatedProfileData = {
          ...profileData,
          friends: rearrangedFriendsList
        };

        this.friendsListOrderUpdater({ changed: true, updatedProfileData });
      }
    } else {
      /* If the recent interation was with the same person who is currenty
           on the top, leave as is, just update {last message} in the active
           friends list */
      // Will FIX this
      const updatedProfileDataFriends = profileData.friends.map(friend => {
        return friend.id === friendData.id
          ? { ...friend, lastChat, timestamp }
          : friend;
      });
      const updatedProfileData = {
        ...profileData,
        friends: updatedProfileDataFriends
      };
      this.friendsListOrderUpdater({ changed: false, updatedProfileData });
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
    return this.props.children({
      ...this.state,
      checkForLastChat: this.checkForLastChat
    });
  }
}

class FriendData extends Component {
  state = { friendData: null };

  handleFriendClickInList = id => {
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
    return this.props.children({
      ...this.state,
      handleFriendClickInList: this.handleFriendClickInList
    });
  }
}

const App = _ => {
  const AppLayout = glamorous.div({
    display: 'grid',
    gridTemplateColumns: '3fr 7fr',
    boxShadow: '0px 0px 8px #c4c4c4'
  });

  return (
    <AppLayout>
      <FriendData>
        {({ friendData, handleFriendClickInList }) => (
          <ProfileAndFriendsList friendData={friendData}>
            {({ checkForLastChat, profileData, recentChat }) => (
              <ChatWallpaperColor>
                {chatWallpaperProps => (
                  <Fragment>
                    <Broadcast
                      channel="profile"
                      value={{ friendData, profileData, recentChat }}
                    >
                      <Profile
                        hoveredColor={chatWallpaperProps.hoveredColor}
                        selectedColor={chatWallpaperProps.selectedColor}
                        handleFriendClickInList={handleFriendClickInList}
                        selectedFriend={friendData ? friendData.id : '0'}
                        handleColorBoxClick={
                          chatWallpaperProps.handleColorBoxClick
                        }
                        handleColorBoxHover={
                          chatWallpaperProps.handleColorBoxHover
                        }
                        handleColorBoxHoverOut={
                          chatWallpaperProps.handleColorBoxHoverOut
                        }
                      />
                    </Broadcast>
                    <ChatBox
                      checkForLastChat={checkForLastChat}
                      currentFriend={handleFriendClickInList}
                      friendData={friendData}
                      backgroundColor={chatWallpaperProps.hoveredColor.color}
                    />
                  </Fragment>
                )}
              </ChatWallpaperColor>
            )}
          </ProfileAndFriendsList>
        )}
      </FriendData>
    </AppLayout>
  );
};

export default App;
