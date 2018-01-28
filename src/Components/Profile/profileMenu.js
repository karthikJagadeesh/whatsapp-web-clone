import React, { Component } from "react";
import { Div } from "glamorous";
import MdMoveVert from "react-icons/lib/md/more-vert";

import { Menu } from "../ChatBox/menu";

export const ProfileMenu = _ => {
  const labelsAndContext = {
    "New group": _ => {},
    Profile: _ => {},
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
