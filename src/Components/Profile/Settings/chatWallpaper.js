import React from "react";
import { Div, Span } from "glamorous";
import { Subscriber } from "react-broadcast";

import { Header } from "../ProfileInfo";
import { colors } from "../../../utils";

const ColorBox = ({
  color,
  index,
  currentSelected,
  handleColorBoxClick,
  handleColorBoxHover,
  handleColorBoxHoverOut,
  currentHovered
}) => {
  const boxStyle = {
    width: "80px",
    height: "80px",
    background: color,
    display: "inline-block",
    margin: "10px 0px 0px 12px",
    ":hover": {
      cursor: "pointer"
    },
    boxShadow: +currentSelected === index ? "inset 0 0 0px 3px #000000" : "none"
  };
  if (+currentHovered === index && +currentHovered !== +currentSelected) {
    boxStyle.boxShadow = "inset 0 0 0px 4px #ffffff";
  }
  return (
    <Div
      css={boxStyle}
      onClick={handleColorBoxClick}
      onMouseEnter={handleColorBoxHover}
      onMouseLeave={handleColorBoxHoverOut}
      data-id={index}
      data-color={color}
    />
  );
};

const ColorList = ({
  handleColorBoxClick,
  handleColorBoxHover,
  handleColorBoxHoverOut
}) => {
  return (
    <Div
      css={{
        height: "84%",
        maxWidth: "100%",
        overflowY: "scroll",
        padding: "0em 3em",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center"
      }}
    >
      {colors.map((color, index) => (
        <Subscriber channel="profile" key={index}>
          {({ currentSelected, currentHovered }) => (
            <ColorBox
              color={color}
              index={index}
              currentSelected={currentSelected.id}
              currentHovered={currentHovered.id}
              handleColorBoxClick={handleColorBoxClick}
              handleColorBoxHover={handleColorBoxHover}
              handleColorBoxHoverOut={handleColorBoxHoverOut}
            />
          )}
        </Subscriber>
      ))}
    </Div>
  );
};

export const ChatWallpaper = ({
  handleProfileInfoBackClick,
  handleColorBoxClick,
  handleColorBoxHover,
  handleColorBoxHoverOut
}) => {
  return (
    <Div
      css={{
        height: "100vh",
        background: "#F7F7F7"
      }}
    >
      <Header
        title="Set Chat Wallpaper"
        handleProfileInfoBackClick={handleProfileInfoBackClick}
      />
      <ColorList
        handleColorBoxClick={handleColorBoxClick}
        handleColorBoxHover={handleColorBoxHover}
        handleColorBoxHoverOut={handleColorBoxHoverOut}
      />
    </Div>
  );
};
