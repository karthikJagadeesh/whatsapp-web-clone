import React, { Component } from "react";
import { Div, Label, Img } from "glamorous";

const FriendsListItem = ({ name: name }) => {
  const labelNameStyle = {
    ":hover": {
      cursor: "pointer"
    }
  };

  const timestampStyle = Object.assign({}, labelNameStyle);

  const wrapperStyle = {
    padding: "25px 10px",
    borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
    background: "#fff",
    display: "grid",
    gridTemplateColumns: "25% 50% 25%",
    ":hover": {
      background: "#F4F5F5",
      cursor: "pointer"
    }
  };

  return (
    <Div css={wrapperStyle}>
      <Img alt="image" />
      <Label css={labelNameStyle}>{name}</Label>
      <Label css={timestampStyle}>timestamp</Label>
    </Div>
  );
};

export { FriendsListItem };
