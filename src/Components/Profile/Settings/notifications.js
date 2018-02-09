import React, { Fragment } from "react";

import { Header } from "../ProfileInfo";

export const Notifications = ({ handleProfileInfoBackClick }) => {
  return (
    <Fragment>
      <Header
        title="Notifications"
        handleProfileInfoBackClick={handleProfileInfoBackClick}
      />
    </Fragment>
  );
};
