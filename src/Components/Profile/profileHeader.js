import React, { Component } from "react";
import { Div } from "glamorous";

import { ProfilePicture } from "./profilePicture";
import { ProfileStatus } from "./profileStatus";
import { ProfileNewChat } from "./profileNewChat";
import { ProfileMenu } from "./profileMenu";

const ProfileHeader = props => {
  const wrapperStyle = {
    background: "#eee",
    padding: "0px 15px",
    height: "100%",
    display: "grid",
    gridTemplateColumns: "55% 15% 15% 15%"
  };

  const profilePictureWrapperStyle = {
    alignSelf: "center",
    justifySelf: "start",
    ":hover": {
      cursor: "pointer"
    }
  };
  const profileStatusWrapperStyle = {
    alignSelf: "center",
    justifySelf: "center",
    ":hover": {
      cursor: "pointer"
    }
  };
  const profileNewChatWrapperStyle = Object.assign(
    {},
    profileStatusWrapperStyle
  );
  const profileMenuWrapperStyle = Object.assign({}, profileStatusWrapperStyle);

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
