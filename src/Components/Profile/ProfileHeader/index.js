import React, { Component } from "react";
import { Div } from "glamorous";
import { Subscriber } from "react-broadcast";

import { ProfilePicture } from "./profilePicture";
import { ProfileStatus } from "./profileStatus";
import { ProfileNewChat } from "./profileNewChat";
import { ProfileMenu } from "./profileMenu";

export const ProfileHeader = ({
  profileData,
  handlePictureClick,
  handleProfileSettingsClick,
  handleStarredMessagesClick,
  handleArchivedChatsClick,
  handleNewGroupClick
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
        <Subscriber channel="profile">
          {({ profileData }) => (
            <ProfilePicture
              handlePictureClick={handlePictureClick}
              profilePicture={profileData.picture}
            />
          )}
        </Subscriber>
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
          handleNewGroupClick={handleNewGroupClick}
        />
      </Div>
    </Div>
  );
};
