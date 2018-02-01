import React, { Component } from "react";
import { Div, Span } from "glamorous";

import { Header } from "../ProfileInfo";
import { colors } from "../../../utils";

const ColorBox = ({ color }) => {
  const boxStyle = {
    width: "80px",
    height: "80px",
    background: color,
    display: "inline-block",
    margin: "10px 0px 0px 12px",
    ":hover": {
      cursor: "pointer"
    }
  };

  return <Div css={boxStyle} />;
};

const ColorList = _ => {
  const wrapperStyle = {
    height: "78%",
    maxWidth: "100%",
    overflowY: "scroll",
    padding: "30px 80px"
  };
  return (
    <Div css={wrapperStyle}>
      {colors.map((color, index) => <ColorBox color={color} key={index} />)}
    </Div>
  );
};

export const ChatWallpaper = ({ handleProfileInfoBackClick }) => {
  const wrapperStyle = {
    height: "100vh",
    background: "#F7F7F7"
  };

  return (
    <Div css={wrapperStyle}>
      <Header
        title={"Set Chat Wallpaper"}
        handleProfileInfoBackClick={handleProfileInfoBackClick}
      />
      <ColorList />
    </Div>
  );
};
