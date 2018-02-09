import React, { Component } from "react";
import { Div } from "glamorous";
import { Subscriber } from "react-broadcast";

import { ProfileHeader } from "./ProfileHeader";
import { SearchBar } from "./SearchBar";
import { FriendsList } from "./FriendsList";

import { ProfileInfo } from "./ProfileInfo";
import ProfileSettings from "./Settings";
import { ArchivedChats } from "./ArchivedChats";
import { StarredMessages } from "./StarredMessages";
import { NewGroup } from "./NewGroup";

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

  handleProfileInfoBackClick = _ => {
    this.setState(prevState => {
      const updatedCurrentView = [...prevState.currentView];
      updatedCurrentView.pop();
      return { currentView: updatedCurrentView };
    });
  };

  render() {
    const { currentView } = this.state;
    switch (currentView[currentView.length - 1]) {
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
        const {
          handleColorBoxClick,
          handleColorBoxHover,
          handleColorBoxHoverOut
        } = this.props;

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
        const { selectedFriend, handleListItemClick } = this.props;
        const { searchBarValue } = this.state;

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
