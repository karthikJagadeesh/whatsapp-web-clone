import React, { Fragment } from "react";

import { Header } from "../ProfileInfo";
import { StarredMessagesMenu } from "./starredMessagesMenu";

export const StarredMessages = ({ handleProfileInfoBackClick }) => {
  return (
    <Fragment>
      <Header
        title="Starred messages"
        handleProfileInfoBackClick={handleProfileInfoBackClick}
        StarredMessagesMenu={StarredMessagesMenu}
      />
    </Fragment>
  );
};
