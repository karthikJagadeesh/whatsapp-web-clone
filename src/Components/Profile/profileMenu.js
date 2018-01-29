import React, { Component } from "react";
import { Div } from "glamorous";
import MdMoveVert from "react-icons/lib/md/more-vert";

import { Menu } from "../ChatBox/menu";

export const ProfileMenu = ({ handleProfileSettingsClick }) => {
  const labelsAndContext = {
    "New group": _ => {},
    Profile: handleProfileSettingsClick,
    Archived: _ => {},
    Starred: _ => {},
    "Log out": _ => {}
  };

  return (
    <Div>
      <Menu labelsAndContext={labelsAndContext} />
    </Div>
  );
};
