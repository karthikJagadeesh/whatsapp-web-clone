import React, { Component } from "react";
import { Div, Label, Img } from "glamorous";

const FriendsListItem = props => {
  const wrapperStyle = {
    padding: "25px 10px",
    borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
    background: "#fff",
    display: "grid",
    gridTemplateColumns: "25% 50% 25%"
  }

  return (
    <Div css={wrapperStyle}>
      <Img alt="image"></Img>
      <Label>{props.name}</Label>
      <Label>timestamp</Label>
    </Div>
  );
};

export { FriendsListItem };
