import React, { Component } from "react";
import { Div, Label, Img, P } from "glamorous";
import path from "path";

const NameAndLastChat = ({ name, lastChat }) => {
  const wrapperStyle = {
    paddingLeft: "10px"
  };
  const lastChatStyle = {
    width: "240px",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    color: "rgba(0, 0, 0, 0.6)",
    fontSize: "0.9em",
    margin: "0px"
  };
  const nameWrapperStyle = {};
  const lastChatWrapperStyle = {};

  return (
    <Div css={wrapperStyle}>
      <Div css={nameWrapperStyle}>
        <Label>{name}</Label>
      </Div>
      <Div css={lastChatWrapperStyle}>
        <P css={lastChatStyle}>{lastChat}</P>
      </Div>
    </Div>
  );
};

const FriendsListItem = ({...props, picture: picture = ""}) => {
  const wrapperStyle = {
    borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
    background: "#fff",
    wordWrap: "break-word",
    display: "grid",
    height: "80px",
    zIndex: "10",
    gridTemplateColumns: "20% 55% 25%",
    ":hover": {
      background: "#F4F5F5",
      cursor: "pointer"
    }
  };

  const nameAndLastChatStyle = {
    width: "100%",
    alignSelf: "center",
    justifySelf: "start",
    ":hover": {
      cursor: "pointer"
    }
  };

  const timestampWrapperStyle = {
    color: "rgba(0, 0, 0, 0.4)",
    fontSize: "0.8em",
    display: "grid",
    height: "50%",
    width: "100%",
    alignSelf: "center"
  };

  const timestampStyle = {
    alignSelf: "start"
  };

  const wrapperImageStyle = {
    display: "grid",
    gridTemplateColumns: "100%"
  };

  const imageStyle = {
    borderRadius: "50%",
    width: "85%",
    height: "70%",
    alignSelf: "center",
    justifySelf: "end"
  };

  const friendProfilePicturePath = path.join("../../../", picture);

  return (
    <Div css={wrapperStyle} data-id={props.id} onClickCapture={props.handleListItemClick}>
      <Div css={wrapperImageStyle}>
        <Img css={imageStyle} alt="image" src={friendProfilePicturePath} />
      </Div>
      <Div css={nameAndLastChatStyle}>
        <NameAndLastChat name={props.name} lastChat={props.lastChat} />
      </Div>
      <Div css={timestampWrapperStyle}>
        <Label css={timestampStyle}>{props.timestamp}</Label>
      </Div>
    </Div>
  );
};

export { FriendsListItem };
