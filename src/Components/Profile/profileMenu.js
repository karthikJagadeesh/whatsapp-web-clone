import React, { Component } from "react";
import { Div } from "glamorous";
import MdMoveVert from "react-icons/lib/md/more-vert";

import { Menu } from "../ChatBox/menu";

export const ProfileMenu = ({
  handleProfileSettingsClick,
  handleProfileClick
}) => {
  const labelsAndContext = {
    "New group": _ => {},
    Profile: handleProfileClick,
    Archived: _ => {},
    Starred: _ => {},
    Settings: handleProfileSettingsClick,
    "Log out": _ => {}
  };

  return (
    <Div>
      <Menu labelsAndContext={labelsAndContext} />
    </Div>
  );
};
