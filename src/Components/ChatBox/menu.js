import React from "react";
import { MenuList, MenuItem, MenuButton, Dropdown } from "react-menu-list";
import { Div, Label } from "glamorous";
import MdMoveVert from "react-icons/lib/md/more-vert";

const MenuItems = ({ labels }) => {
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
    cursor: "pointer"
  };
  return (
    <Div css={wrapperStyle}>
      {labels.map(label => (
        <MenuItem key={label} style={wrapperMenuItemStyle}>
          <Label css={menuItemStyle}>{label}</Label>
        </MenuItem>
      ))}
    </Div>
  );
};

const Menu = ({ labels }) => {
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
              <MenuItems labels={[...labels]} />
            </MenuList>
          </Dropdown>
        }
      >
        <MdMoveVert size={25} color="#666" />
      </MenuButton>
    </Div>
  );
};

export { Menu };
