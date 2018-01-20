import React from "react";
import { Div } from "glamorous";

import { SmilieBoard } from "./smilieBoard";
import { ChatMessageInput } from "./chatMessageInput";
import { ChatAudioMessage } from "./chatAudioMessage";

const ChatBoxFooter = ({ isInitialScreen }) => {
  if (isInitialScreen) {
    const wrapperStyle = {
      height: "100%",
      width: "100%",
      display: "grid"
    }
    const greenBarStyle = {
      height: "10%",
      background: "#58e870",
      alignSelf: "end"
    }
    return (
      <Div css={wrapperStyle}>
        <Div css={greenBarStyle}></Div>
      </Div>
    );
  }
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
