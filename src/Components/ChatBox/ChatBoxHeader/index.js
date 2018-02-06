import React from "react";
import { Div, Label } from "glamorous";

import { Picture } from "./picture";
import { Search } from "./search";
import { Attach } from "./attach";
import { Menu } from "./menu";

const Name = ({ name }) => {
  return (
    <Div
      css={{
        display: "grid",
        gridTemplateColumns: "100%",
        width: "300px",
        marginLeft: "20px"
      }}
    >
      <Label
        css={{
          alignSelf: "center",
          justifySelf: "start",
          ":hover": {
            cursor: "pointer"
          }
        }}
      >
        {name}
      </Label>
    </Div>
  );
};

export const ChatBoxHeader = ({
  currentFriend,
  chatBoxContext,
  handleSearchClick,
  friendChatHeaderClick
}) => {
  const labelsAndContext = {
    "Contact Info": friendChatHeaderClick,
    "Select Messages": _ => {},
    "Cancel Mute": _ => {},
    "Clear messages": _ => {},
    "Delete chat": _ => {}
  };

  return (
    <Div
      css={{
        background: "#eee",
        padding: "0px 15px",
        height: "100%",
        display: "grid",
        gridTemplateColumns: "85% 5% 5% 5%",
        boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
        borderRight: "1px solid rgba(0, 0, 0, 0.05)",
        zIndex: "10"
      }}
    >
      <Div
        css={{
          display: "flex",
          alignSelf: "center",
          height: "100%",
          width: "90%",
          justifySelf: "start",
          ":hover": {
            cursor: "pointer"
          }
        }}
        onClick={friendChatHeaderClick}
      >
        <Picture currentFriend={chatBoxContext.picture} />
        <Name name={chatBoxContext.name} />
      </Div>
      <Div
        css={{
          alignSelf: "center",
          justifySelf: "center",
          ":hover": {
            cursor: "pointer"
          }
        }}
      >
        <Search handleSearchClick={handleSearchClick} />
      </Div>
      <Div
        css={{
          alignSelf: "center",
          justifySelf: "center",
          ":hover": {
            cursor: "pointer"
          }
        }}
      >
        <Attach />
      </Div>
      <Div
        css={{
          alignSelf: "center",
          justifySelf: "center",
          ":hover": {
            cursor: "pointer"
          }
        }}
      >
        <Menu labelsAndContext={labelsAndContext} />
      </Div>
    </Div>
  );
};
