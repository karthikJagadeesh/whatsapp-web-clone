import React, { Component } from "react";
import { Div } from "glamorous";

import { ChatBoxHeader } from "./chatBoxHeader";
// import { ChatBoxDisplay } from "./chatBoxDisplay";
// import { ChatBoxFooter } from "./chatBoxFooter";

const ChatBox = _ => {
  const wrapperStyle = {
    display: "grid",
    gridTemplateRows: "8% 86% 6%",
    height: "94vh"
  };

  return (
    <Div css={wrapperStyle}>
      <Div>
        <ChatBoxHeader />
      </Div>
      <Div />
      <Div />
    </Div>
  );
};

export { ChatBox };
