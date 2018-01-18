import React, { Component } from "react";
import { Div } from "glamorous";

import { ChatBoxHeader } from "./chatBoxHeader";
// import { ChatBoxDisplay } from "./chatBoxDisplay";
import { ChatBoxFooter } from "./chatBoxFooter";

const ChatBox = _ => {
  const wrapperStyle = {
    display: "grid",
    gridTemplateRows: "10% 80% 10%",
    height: "94vh"
  };

  return (
    <Div css={wrapperStyle}>
      <Div>
        <ChatBoxHeader />
      </Div>
      <Div />
      <Div>
        <ChatBoxFooter />
      </Div>
    </Div>
  );
};

export { ChatBox };
