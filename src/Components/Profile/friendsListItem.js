import React, { Component } from "react";
import { Div, Label, Img, P } from "glamorous";

const NameAndLastChat = ({ name, lastChat }) => {
  return (
    <Div css={{ paddingLeft: "10px" }}>
      <Div>
        <Label>{name}</Label>
      </Div>
      <Div>
        <P
          css={{
            width: "260px",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
            color: "rgba(0, 0, 0, 0.6)",
            fontSize: "0.9em",
            margin: "0px"
          }}
        >
          {lastChat}
        </P>
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

  return (
    <Div
      css={
        props.selectedFriend === props.id ? wrapperStyleSelected : wrapperStyle
      }
      data-id={props.id}
      onClickCapture={props.handleListItemClick}
    >
      <Div
        css={{
          display: "grid",
          gridTemplateColumns: "100%"
        }}
      >
        <Img
          css={{
            borderRadius: "50%",
            width: "70%",
            height: "70%",
            alignSelf: "center",
            justifySelf: "center"
          }}
          alt=""
          src={picture}
        />
      </Div>
      <Div
        css={{
          width: "100%",
          alignSelf: "center",
          justifySelf: "start",
          ":hover": {
            cursor: "pointer"
          }
        }}
      >
        <NameAndLastChat name={props.name} lastChat={props.lastChat} />
      </Div>
      <Div
        css={{
          color: "rgba(0, 0, 0, 0.4)",
          fontSize: "0.8em",
          display: "grid",
          height: "50%",
          width: "100%",
          alignSelf: "center"
        }}
      >
        <Label
          css={{
            alignSelf: "start",
            justifySelf: "center"
          }}
        >
          {props.timestamp}
        </Label>
      </Div>
    </Div>
  );
};
