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

export default class Profile extends Component {
  state = {
    searchBarValue: "",
    currentView: "friendList"
  };

  handleInputChange = ({ target }) => {
    this.setState({ searchBarValue: target.value });
  };
  handlePictureClick = _ => {
    this.setState({ currentView: "profileInfo" });
  };
  handleProfileSettingsClick = _ => {
    this.setState({ currentView: "profileSettings" });
  };
  handleArchivedChatsClick = _ => {
    this.setState({ currentView: "archivedChats" });
  };
  handleStarredMessagesClick = _ => {
    this.setState({ currentView: "starredMessages" });
  };
  handleProfileInfoBackClick = _ => {
    this.setState({ currentView: "friendList" });
  };

  render() {
    const propsForInfoAndSettings = {
      handleProfileInfoBackClick: this.handleProfileInfoBackClick
    };

    switch (this.state.currentView) {
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
        return <ProfileInfo {...propsForInfoAndSettings} />;

      case "profileSettings":
        const {
          currentHovered,
          currentSelected,
          handleColorBoxClick,
          handleColorBoxHover,
          handleColorBoxHoverOut
        } = this.props;

        return (
          <ProfileSettings
            currentHovered={currentHovered}
            currentSelected={currentSelected}
            handleColorBoxClick={handleColorBoxClick}
            handleColorBoxHover={handleColorBoxHover}
            handleColorBoxHoverOut={handleColorBoxHoverOut}
            handlePictureNameClick={this.handlePictureClick}
            {...propsForInfoAndSettings}
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
