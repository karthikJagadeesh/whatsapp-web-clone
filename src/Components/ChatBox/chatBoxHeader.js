import React from "react";
import { Div, Label } from "glamorous";

import { Picture } from "./picture";
import { Search } from "./search";
import { Attach } from "./attach";
import { Menu } from "./menu";

const Name = ({ name }) => {
  const wrapperStyle = {
    display: "grid",
    gridTemplateColumns: "100%",
    width: "300px",
    marginLeft: "20px"
  };
  const labelStyle = {
    alignSelf: "center",
    justifySelf: "start",
    ":hover": {
      cursor: "pointer"
    }
  };
  return (
    <Div css={wrapperStyle}>
      <Label css={labelStyle}>{name}</Label>
    </Div>
  );
};

export const ChatBoxHeader = ({
  currentFriend,
  chatBoxContext,
  handleSearchClick,
  friendChatHeaderClick
}) => {
  const wrapperStyle = {
    background: "#eee",
    padding: "0px 15px",
    height: "100%",
    display: "grid",
    gridTemplateColumns: "85% 5% 5% 5%",
    boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
    borderRight: "1px solid rgba(0, 0, 0, 0.05)"
  };

  const pictureWrapperStyle = {
    display: "flex",
    alignSelf: "center",
    height: "100%",
    width: "90%",
    justifySelf: "start",
    ":hover": {
      cursor: "pointer"
    }
  };

  const searchWrapperStyle = {
    alignSelf: "center",
    justifySelf: "center",
    ":hover": {
      cursor: "pointer"
    }
  };

  const attachWrapperStyle = { ...searchWrapperStyle };
  const menuWrapperStyle = { ...searchWrapperStyle };
  return (
    <Div css={wrapperStyle}>
      <Div css={pictureWrapperStyle} onClick={friendChatHeaderClick}>
        <Picture currentFriend={chatBoxContext.picture} />
        <Name name={chatBoxContext.name} />
      </Div>
      <Div css={searchWrapperStyle}>
        <Search handleSearchClick={handleSearchClick} />
      </Div>
      <Div css={attachWrapperStyle}>
        <Attach />
      </Div>
      <Div css={menuWrapperStyle}>
        <Menu
          labels={[
            "Contact Info",
            "Select Messages",
            "Cancel Mute",
            "Clear messages",
            "Delete chat"
          ]}
        />
      </Div>
    </Div>
  );
};
