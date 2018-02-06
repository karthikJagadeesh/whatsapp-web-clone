import React from "react";
import { Div, Label } from "glamorous";

import { MenuList, MenuItem, MenuButton, Dropdown } from "react-menu-list";
import MdMoveVert from "react-icons/lib/md/more-vert";

const MenuItems = ({ labelsAndContext }) => {
  return (
    <Div
      css={{
        padding: "0px 20px",
        width: "140px",
        textAlign: "left"
      }}
    >
      {Object.keys(labelsAndContext).map(label => (
        <MenuItem
          key={label}
          style={{
            padding: "10px 0px"
          }}
        >
          <Label
            css={{
              color: "rgb(68, 68, 68)",
              fontSize: "0.9em",
              cursor: "pointer",
              width: "100%"
            }}
            onClick={labelsAndContext[label]}
          >
            {label}
          </Label>
        </MenuItem>
      ))}
    </Div>
  );
};

export const Menu = ({ labelsAndContext, buttonStyle }) => {
  return (
    <Div
      css={{
        ":hover": {
          cursor: "pointer"
        }
      }}
    >
      <MenuButton
        style={{
          border: "none",
          borderRadius: "50%",
          cursor: "pointer",
          outline: "none",
          background: "transparent"
        }}
        menu={
          <Dropdown>
            <MenuList>
              <MenuItems labelsAndContext={labelsAndContext} />
            </MenuList>
          </Dropdown>
        }
      >
        <MdMoveVert size={25} color="#666" {...buttonStyle} />
      </MenuButton>
    </Div>
  );
};
