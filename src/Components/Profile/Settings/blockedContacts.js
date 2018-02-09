import React from "react";
import { Div } from "glamorous";

import { Header } from "../ProfileInfo";

export const BlockedContacts = ({ handleProfileInfoBackClick }) => {
  return (
    <Div
      css={{
        height: "100vh"
      }}
    >
      <Header
        title="Blocked contacts"
        handleProfileInfoBackClick={handleProfileInfoBackClick}
      />
    </Div>
  );
};
