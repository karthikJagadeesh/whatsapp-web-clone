import React, { Component } from "react";
import { Div } from "glamorous";
import MdMoveVert from "react-icons/lib/md/more-vert";

import { Menu } from "../ChatBox/menu";

const ProfileMenu = _ => {
  return (
    <Div>
      <Menu
        labels={[
          "New group",
          "Profile",
          "Archived",
          "Starred",
          "Settings",
          "Log out"
        ]}
      />
    </Div>
  );
};

export { ProfileMenu };
