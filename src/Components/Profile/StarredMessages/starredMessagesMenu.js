import React, { Component, Fragment } from "react";
import { Div } from "glamorous";

import { Menu } from "../../ChatBox/menu";

export const StarredMessagesMenu = _ => {
  const labelsAndContext = {
    "Unstar all": _ => {}
  };

  return (
    <Fragment>
      <Menu
        labelsAndContext={labelsAndContext}
        buttonStyle={{ color: "#FFF" }}
      />
    </Fragment>
  );
};
