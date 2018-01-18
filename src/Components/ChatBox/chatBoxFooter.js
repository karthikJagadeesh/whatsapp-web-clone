import React from "react";
import { Div } from "glamorous";

import { SmilieBoard } from "./smilieBoard";
import { ChatMessageInput } from "./chatMessageInput";
import { ChatAudioMessage } from "./chatAudioMessage";

const ChatBoxFooter = _ => {
  const wrapperStyle = {
    background: "#F5F1EE",
    padding: "0px 15px",
    height: "100%",
    display: "grid",
    gridTemplateColumns: "5% 90% 5%"
  };

  const smilieBoardWrapperStyle = {
    alignSelf: "center",
    justifySelf: "center",
    ":hover": {
      cursor: "pointer"
    }
  };
  const chatMessageWrapperStyle = {
    alignSelf: "center",
    justifySelf: "center",
    width: "100%"
  };
  const chatAudioMessageWrapperStyle = {
    alignSelf: "center",
    justifySelf: "center",
    ":hover": {
      cursor: "pointer"
    }
  };

  return (
    <Div css={wrapperStyle}>
      <Div css={smilieBoardWrapperStyle}>
        <SmilieBoard />
      </Div>
      <Div css={chatMessageWrapperStyle}>
        <ChatMessageInput />
      </Div>
      <Div css={chatAudioMessageWrapperStyle}>
        <ChatAudioMessage />
      </Div>
    </Div>
  );
};

export { ChatBoxFooter };
