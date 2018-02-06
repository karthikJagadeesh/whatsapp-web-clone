import React, { Fragment } from "react";

import { Menu } from "../../ChatBox/ChatBoxHeader/menu";

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
