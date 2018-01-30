import React, { Component } from "react";
import { Div, Label, Img, P } from "glamorous";

const NameAndLastChat = ({ name, lastChat }) => {
  const wrapperStyle = {
    paddingLeft: "10px"
  };
  const lastChatStyle = {
    width: "260px",
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

export const FriendsListItem = ({ picture: picture = "", ...props }) => {
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
  const wrapperStyleSelected = {
    ...wrapperStyle,
    background: "#e9ebeb",
    ":hover": {
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
    alignSelf: "start",
    justifySelf: "center"
  };

  const wrapperImageStyle = {
    display: "grid",
    gridTemplateColumns: "100%"
  };

  const imageStyle = {
    borderRadius: "50%",
    width: "70%",
    height: "70%",
    alignSelf: "center",
    justifySelf: "center"
  };

  return (
    <Div
      css={
        props.selectedFriend === props.id ? wrapperStyleSelected : wrapperStyle
      }
      data-id={props.id}
      onClickCapture={props.handleListItemClick}
    >
      <Div css={wrapperImageStyle}>
        <Img css={imageStyle} alt="" src={picture} />
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
