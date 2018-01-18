import React, { Component } from "react";
import { Div, Label, Img } from "glamorous";

const FriendsListItem = ({ name: name, timestamp: timestamp }) => {
  const wrapperStyle = {
    padding: "25px 15px",
    borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
    background: "#fff",
    wordWrap: "break-word",
    display: "grid",
    height: "20px",
    gridTemplateColumns: "25% 50% 25%",
    ":hover": {
      background: "#F4F5F5",
      cursor: "pointer"
    }
  };

  const nameStyle = {
    alignSelf: "center",
    ":hover": {
      cursor: "pointer"
    }
  };

  const timestampStyle = Object.assign(
    {
      color: "rgba(0, 0, 0, 0.4)",
      fontSize: "0.8em",
      alignSelf: "start",
      justifySelf: "end",
      height: "100%"
    },
    nameStyle
  );

  return (
    <Div css={wrapperStyle}>
      <Div>
        <Img alt="image" />
      </Div>
      <Div css={nameStyle}>
        <Label>{name}</Label>
      </Div>
      <Div css={timestampStyle}>
        <Label>{timestamp}</Label>
      </Div>
    </Div>
  );
};

export { FriendsListItem };
