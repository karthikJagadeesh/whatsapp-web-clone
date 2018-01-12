import React, { Component } from "react";

import ProfileHeader from "./profileHeader";
import SearchBar from "./searchBar";
import FriendsList from "./friendsList";

const Profile = _ => {
  return (
    <div>
      <ProfileHeader />
      <SearchBar />
      <FriendsList />
    </div>
  );
};

export { Profile };
