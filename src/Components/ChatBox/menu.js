import React from "react";
import { MenuList, MenuItem, MenuButton, Dropdown } from "react-menu-list";
import { Div, Label } from "glamorous";
import MdMoveVert from "react-icons/lib/md/more-vert";

const MenuItems = ({ labelsAndContext }) => {
  const wrapperStyle = {
    padding: "0px 20px",
    width: "140px",
    textAlign: "left"
  };
  const wrapperMenuItemStyle = {
    padding: "10px 0px"
  };
  const menuItemStyle = {
    color: "rgb(68, 68, 68)",
    fontSize: "0.9em",
    cursor: "pointer",
    width: "100%"
  };
  return (
    <Div css={wrapperStyle}>
      {Object.keys(labelsAndContext).map(label => (
        <MenuItem key={label} style={wrapperMenuItemStyle}>
          <Label css={menuItemStyle} onClick={labelsAndContext[label]}>
            {label}
          </Label>
        </MenuItem>
      ))}
    </Div>
  );
};

export const Menu = ({ labelsAndContext }) => {
  const wrapperButtonStyle = {
    ":hover": {
      cursor: "pointer"
    }
  };
  const menuButtonStyle = {
    border: "none",
    borderRadius: "50%",
    cursor: "pointer",
    outline: "none",
    background: "transparent"
  };

  return (
    <Div css={wrapperButtonStyle}>
      <MenuButton
        style={menuButtonStyle}
        menu={
          <Dropdown>
            <MenuList>
              <MenuItems labelsAndContext={labelsAndContext} />
            </MenuList>
          </Dropdown>
        }
      >
        <MdMoveVert size={25} color="#666" />
      </MenuButton>
    </Div>
  );
};
