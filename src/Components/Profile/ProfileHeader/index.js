import React, { Component } from "react";
import { Div } from "glamorous";

import { ProfilePicture } from "./profilePicture";
import { ProfileStatus } from "./profileStatus";
import { ProfileNewChat } from "./profileNewChat";
import { ProfileMenu } from "./profileMenu";

export const ProfileHeader = ({
  handlePictureClick,
  profileData,
  handleProfileSettingsClick,
  handleStarredMessagesClick,
  handleArchivedChatsClick
}) => {
  return (
    <Div
      css={{
        background: "#eee",
        height: "100%",
        display: "grid",
        gridTemplateColumns: "55% 15% 15% 15%"
      }}
    >
      <Div
        css={{
          alignSelf: "center",
          justifySelf: "start"
        }}
      >
        <ProfilePicture
          handlePictureClick={handlePictureClick}
          profilePicture={profileData.picture}
        />
      </Div>
      <Div
        css={{
          alignSelf: "center",
          justifySelf: "start",
          ":hover": {
            cursor: "pointer"
          }
        }}
      >
        <ProfileStatus />
      </Div>
      <Div
        css={{
          alignSelf: "center",
          justifySelf: "start",
          ":hover": {
            cursor: "pointer"
          }
        }}
      >
        <ProfileNewChat />
      </Div>
      <Div
        css={{
          alignSelf: "center",
          justifySelf: "start",
          ":hover": {
            cursor: "pointer"
          }
        }}
      >
        <ProfileMenu
          handleProfileClick={handlePictureClick}
          handleStarredMessagesClick={handleStarredMessagesClick}
          handleArchivedChatsClick={handleArchivedChatsClick}
          handleProfileSettingsClick={handleProfileSettingsClick}
        />
      </Div>
    </Div>
  );
};
