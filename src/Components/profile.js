import React, { Component } from "react";
import { Div } from "glamorous";

import { ProfileHeader } from "./profileHeader";
import { SearchBar } from "./searchBar";
import { FriendsList } from "./friendsList";

const Profile = _ => {
  const wrapperStyle = {
    display: "grid",
    gridTemplateRows: "12% 10% 78%",
    height: "615px"
  };

  return (
    <Div css={wrapperStyle}>
      <ProfileHeader />
      <SearchBar />
      <FriendsList />
    </Div>
  );
};

export { Profile };
