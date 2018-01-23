import React, { Component } from "react";
import { Div } from "glamorous";

import { ProfilePicture } from "./profilePicture";
import { ProfileStatus } from "./profileStatus";
import { ProfileNewChat } from "./profileNewChat";
import { ProfileMenu } from "./profileMenu";

const ProfileHeader = props => {
  const wrapperStyle = {
    background: "#eee",
    height: "100%",
    display: "grid",
    gridTemplateColumns: "55% 15% 15% 15%"
  };

  const profilePictureWrapperStyle = {
    alignSelf: "center",
    justifySelf: "start"
  };
  const profileStatusWrapperStyle = {
    alignSelf: "center",
    justifySelf: "start",
    ":hover": {
      cursor: "pointer"
    }
  };
  const profileNewChatWrapperStyle = { ...profileStatusWrapperStyle };
  const profileMenuWrapperStyle = { ...profileStatusWrapperStyle };

  return (
    <Div css={wrapperStyle}>
      <Div css={profilePictureWrapperStyle}>
        <ProfilePicture profilePicture={props.profileData.picture} />
      </Div>
      <Div css={profileStatusWrapperStyle}>
        <ProfileStatus />
      </Div>
      <Div css={profileNewChatWrapperStyle}>
        <ProfileNewChat />
      </Div>
      <Div css={profileMenuWrapperStyle}>
        <ProfileMenu />
      </Div>
    </Div>
  );
};

export { ProfileHeader };
