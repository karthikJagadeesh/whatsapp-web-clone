import React, { Component, Fragment } from "react";
import MdMoveVert from "react-icons/lib/md/more-vert";

import { Header } from "../ProfileInfo";
import { StarredMessagesMenu } from "./starredMessagesMenu";

export const StarredMessages = ({ handleProfileInfoBackClick }) => {
  return (
    <Fragment>
      <Header
        title={"Starred messages"}
        handleProfileInfoBackClick={handleProfileInfoBackClick}
        StarredMessagesMenu={StarredMessagesMenu}
      />
    </Fragment>
  );
};
