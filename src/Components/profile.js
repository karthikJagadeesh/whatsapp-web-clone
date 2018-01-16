import React, { Component } from "react";
import { Div } from "glamorous";

import { ProfileHeader } from "./profileHeader";
import { SearchBar } from "./searchBar";
import { FriendsList } from "./friendsList";

const Profile = _ => {
  const wrapperStyle = {
    display: "grid",
    gridTemplateRows: "8% 6% 86%",
    height: "94vh",
    borderRight: "1px solid rgba(0, 0, 0, 0.05)"
  };

  const profileHeaderWrapperStyle = {
    borderBottom: "1px solid rgba(0, 0, 0, 0.05)"
  };

  const searchBarWrapperStyle = Object.assign({}, profileHeaderWrapperStyle);

  return (
    <Div css={wrapperStyle}>
      <Div css={profileHeaderWrapperStyle}>
        <ProfileHeader />
      </Div>
      <Div css={searchBarWrapperStyle}>
        <SearchBar />
      </Div>
      <Div>
        <FriendsList />
      </Div>
    </Div>
  );
};

export { Profile };
