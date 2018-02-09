import React from "react";
import { Div } from "glamorous";

import { Header } from "../ProfileInfo";

export const Help = ({ handleProfileInfoBackClick }) => {
  return (
    <Div
      css={{
        height: "100vh"
      }}
    >
      <Header
        title="Help"
        handleProfileInfoBackClick={handleProfileInfoBackClick}
      />
    </Div>
  );
};
