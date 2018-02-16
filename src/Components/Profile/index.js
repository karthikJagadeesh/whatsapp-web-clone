import React, { Component } from "react";
import { Div } from "glamorous";
import { Subscriber } from "react-broadcast";

import { ProfileHeader } from "./ProfileHeader";
import { SearchBar } from "./SearchBar";
import { FriendsList } from "./FriendsList";

import ProfileInfo from "./ProfileInfo";
import ProfileSettings from "./Settings";
import { ArchivedChats } from "./ArchivedChats";
import { StarredMessages } from "./StarredMessages";
import { NewGroup } from "./NewGroup";
import ProfileNewChat from "./ProfileNewChat";

export default class Profile extends Component {
  state = {
    searchBarValue: "",
    currentView: ["friendList"]
  };

  handleInputChange = ({ target }) => {
    this.setState({ searchBarValue: target.value });
  };
  currentViewStateUpdater = view =>
    this.setState(prevState => {
      const updatedCurrentView = [...prevState.currentView, view];
      return { currentView: updatedCurrentView };
    });
  handlePictureClick = _ => this.currentViewStateUpdater("profileInfo");
  handleProfileSettingsClick = _ =>
    this.currentViewStateUpdater("profileSettings");
  handleArchivedChatsClick = _ => this.currentViewStateUpdater("archivedChats");
  handleStarredMessagesClick = _ =>
    this.currentViewStateUpdater("starredMessages");
  handleNewGroupClick = _ => this.currentViewStateUpdater("newGroup");
  handleNewChatClick = _ => this.currentViewStateUpdater("newChat");
  handleProfileInfoBackClick = _ => {
    this.setState(prevState => {
      const updatedCurrentView = [...prevState.currentView];
      updatedCurrentView.pop();
      return { currentView: updatedCurrentView };
    });
  };
  handleNewChatListItemClick = event => {
    this.props.handleListItemClick(event);
    this.handleProfileInfoBackClick();
  };

  render() {
    const { currentView, searchBarValue } = this.state;
    const {
      selectedFriend,
      handleListItemClick,
      handleColorBoxClick,
      handleColorBoxHover,
      handleColorBoxHoverOut
    } = this.props;
    switch (currentView[currentView.length - 1]) {
      case "newChat":
        return (
          <ProfileNewChat
            handleProfileInfoBackClick={this.handleProfileInfoBackClick}
            handleNewGroupClick={this.handleNewGroupClick}
            handleListItemClick={this.handleNewChatListItemClick}
          />
        );

      case "newGroup":
        return (
          <NewGroup
            handleProfileInfoBackClick={this.handleProfileInfoBackClick}
          />
        );

      case "starredMessages":
        return (
          <StarredMessages
            handleProfileInfoBackClick={this.handleProfileInfoBackClick}
          />
        );

      case "archivedChats":
        return (
          <ArchivedChats
            handleProfileInfoBackClick={this.handleProfileInfoBackClick}
          />
        );

      case "profileInfo":
        return (
          <ProfileInfo
            handleProfileInfoBackClick={this.handleProfileInfoBackClick}
          />
        );

      case "profileSettings":
        return (
          <ProfileSettings
            handleColorBoxClick={handleColorBoxClick}
            handleColorBoxHover={handleColorBoxHover}
            handleColorBoxHoverOut={handleColorBoxHoverOut}
            handlePictureNameClick={this.handlePictureClick}
            handleProfileInfoBackClick={this.handleProfileInfoBackClick}
          />
        );

      case "friendList":
        return (
          <Div
            css={{
              display: "grid",
              gridTemplateRows: "10% 6% 84%",
              height: "100vh",
              borderRight: "1px solid rgba(0, 0, 0, 0.05)"
            }}
          >
            <Div css={{ borderBottom: "1px solid rgba(0, 0, 0, 0.05)" }}>
              <ProfileHeader
                handlePictureClick={this.handlePictureClick}
                handleStarredMessagesClick={this.handleStarredMessagesClick}
                handleProfileSettingsClick={this.handleProfileSettingsClick}
                handleArchivedChatsClick={this.handleArchivedChatsClick}
                handleNewGroupClick={this.handleNewGroupClick}
                handleNewChatClick={this.handleNewChatClick}
              />
            </Div>
            <Div css={{ borderBottom: "1px solid rgba(0, 0, 0, 0.05)" }}>
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
                    handleListItemClick={handleListItemClick}
                  />
                )}
              </Subscriber>
            </Div>
          </Div>
        );
    }
  }
}
