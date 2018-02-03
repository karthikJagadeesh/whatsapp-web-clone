import React, { Component, Fragment } from "react";

import { Header } from "../ProfileInfo";

export const ArchivedChats = ({ handleProfileInfoBackClick }) => {
  return (
    <Fragment>
      <Header
        title={"Archived chats"}
        handleProfileInfoBackClick={handleProfileInfoBackClick}
      />
    </Fragment>
  );
};
