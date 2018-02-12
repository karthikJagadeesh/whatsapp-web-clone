import React, { Component } from "react";
import { Div, Span } from "glamorous";
import { Subscriber } from "react-broadcast";

import MdChat from "react-icons/lib/md/chat";

import { ProfilePicture } from "./profilePicture";
import { ProfileStatus } from "./profileStatus";
import { ProfileMenu } from "./profileMenu";

export const ProfileHeader = ({
  profileData,
  handlePictureClick,
  handleProfileSettingsClick,
  handleStarredMessagesClick,
  handleArchivedChatsClick,
  handleNewGroupClick,
  handleNewChatClick
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
        <Span onClick={handleNewChatClick}>
          <MdChat size={25} color="#666" />
        </Span>
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
