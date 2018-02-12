import React from "react";
import { Div } from "glamorous";

import { SearchBar } from "../SearchBar";
import { Header } from "../ProfileInfo";

const ProfileNewChat = ({ handleProfileInfoBackClick }) => {
  return (
    <Div
      css={{
        display: "grid",
        gridTemplateRows: "16% 8% 76%",
        height: "100vh"
      }}
    >
      <Header
        title="New Chat"
        handleProfileInfoBackClick={handleProfileInfoBackClick}
        style={{ height: "100%" }}
      />
      <SearchBar placeholder="Search contacts" />
      <Div
        css={{
          height: "100%",
          overflowY: "auto"
        }}
      />
    </Div>
  );
};

export default ProfileNewChat;
