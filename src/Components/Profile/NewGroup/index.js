import React, { Fragment } from "react";

import { Header } from "../ProfileInfo";

export const NewGroup = ({ handleProfileInfoBackClick }) => {
  return (
    <Fragment>
      <Header
        title="Add group participants"
        handleProfileInfoBackClick={handleProfileInfoBackClick}
      />
    </Fragment>
  );
};