import React, { Component } from 'react';
import { Subscriber } from 'react-broadcast';
import { Div } from 'glamorous';

import { ProfileHeader } from './ProfileHeader';
import { SearchBar } from './SearchBar';
import { FriendsList } from './FriendsList';

import ProfileInfo from './ProfileInfo';
import ProfileSettings from './Settings';
import { ArchivedChats } from './ArchivedChats';
import { StarredMessages } from './StarredMessages';
import { NewGroup } from './NewGroup';
import ProfileNewChat from './ProfileNewChat';

export default class Profile extends Component {
  state = {
    searchBarValue: '',
    currentView: ['friendList']
  };

  handleInputChange = ({ target }) => {
    this.setState({ searchBarValue: target.value });
  };

  changeCurrentView = view =>
    this.setState(prevState => {
      const updatedCurrentView = [...prevState.currentView, view];
      return { currentView: updatedCurrentView };
    });

  handleProfileInfoBackClick = _ => {
    this.setState(prevState => {
      const updatedCurrentView = [...prevState.currentView];
      updatedCurrentView.pop();
      return { currentView: updatedCurrentView };
    });
  };

  handleNewChatListItemClick = id => {
    this.props.handleFriendClickInList(id);
    this.handleProfileInfoBackClick();
  };

  render() {
    const { currentView, searchBarValue } = this.state;
    const {
      selectedColor,
      hoveredColor,
      profileData,
      selectedFriend,
      handleFriendClickInList,
      handleColorBoxClick,
      handleColorBoxHover,
      handleColorBoxHoverOut
    } = this.props;
    switch (currentView[currentView.length - 1]) {
      case 'newChat':
        return (
          <ProfileNewChat
            handleProfileInfoBackClick={this.handleProfileInfoBackClick}
            handleNewGroupClick={this.handleNewGroupClick}
            handleFriendClickInList={this.handleNewChatListItemClick}
          />
        );

      case 'newGroup':
        return (
          <NewGroup
            handleProfileInfoBackClick={this.handleProfileInfoBackClick}
          />
        );

      case 'starredMessages':
        return (
          <StarredMessages
            handleProfileInfoBackClick={this.handleProfileInfoBackClick}
          />
        );

      case 'archivedChats':
        return (
          <ArchivedChats
            handleProfileInfoBackClick={this.handleProfileInfoBackClick}
          />
        );

      case 'profileInfo':
        return (
          <ProfileInfo
            handleProfileInfoBackClick={this.handleProfileInfoBackClick}
          />
        );

      case 'profileSettings':
        return (
          <ProfileSettings
            hoveredColor={hoveredColor}
            selectedColor={selectedColor}
            handleColorBoxClick={handleColorBoxClick}
            handleColorBoxHover={handleColorBoxHover}
            handleColorBoxHoverOut={handleColorBoxHoverOut}
            handlePictureNameClick={_ => this.changeCurrentView('profileInfo')}
            handleProfileInfoBackClick={this.handleProfileInfoBackClick}
          />
        );

      case 'friendList':
        return (
          <Div
            css={{
              display: 'grid',
              gridTemplateRows: '10% 6% 84%',
              height: '100vh',
              borderRight: '1px solid rgba(0, 0, 0, 0.05)'
            }}
          >
            <Div css={{ borderBottom: '1px solid rgba(0, 0, 0, 0.05)' }}>
              <ProfileHeader
                handlePictureClick={_ => this.changeCurrentView('profileInfo')}
                handleStarredMessagesClick={_ =>
                  this.changeCurrentView('starredMessages')
                }
                handleProfileSettingsClick={_ =>
                  this.changeCurrentView('profileSettings')
                }
                handleArchivedChatsClick={_ =>
                  this.changeCurrentView('archivedChats')
                }
                handleNewGroupClick={_ => this.changeCurrentView('newGroup')}
                handleNewChatClick={_ => this.changeCurrentView('newChat')}
              />
            </Div>
            <Div css={{ borderBottom: '1px solid rgba(0, 0, 0, 0.05)' }}>
              <SearchBar
                handleInputChange={this.handleInputChange}
                searchBarValue={searchBarValue}
              />
            </Div>
            <Div>
              <Subscriber channel="profile">
                {({ profileData }) => (
                  <FriendsList
                    selectedFriend={selectedFriend}
                    searchBarValue={searchBarValue}
                    friendsList={profileData.friends}
                    handleFriendClickInList={handleFriendClickInList}
                  />
                )}
              </Subscriber>
            </Div>
          </Div>
        );
    }
  }
}
