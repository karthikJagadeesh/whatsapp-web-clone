import React from "react";
import { Div } from "glamorous";

export const ChatBoxDisplay = ({ messages, chatlog: chatlog = [] }) => {
  const wrapperStyle = {
    background: "#E4DED3",
    height: "100%",
    overflowY: "auto",
    display: "flex",
    flexFlow: "column-reverse"
  };

  const messagesListWrapperStyleLeft = {
    padding: "2px 70px",
    maxWidth: "400px",
    alignSelf: "flex-start"
  };

  const messagesListWrapperStyleRight = {
    ...messagesListWrapperStyleLeft,
    alignSelf: "flex-end"
  };

  const messageStyleLeft = {
    wordWrap: "break-word",
    overflow: "hidden",
    border: "1px solid rgba(0, 0, 0, 0.1)",
    boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.1)",
    fontSize: "0.9em",
    borderRadius: "8px",
    color: "rgb(38, 38, 38)",
    padding: "8px 6px",
    background: "#FFF"
  };

  const messageStyleRight = {
    ...messageStyleLeft,
    background: "rgb(220, 248, 198)"
  };

  const fullChatLog = [...messages, ...chatlog];

  const messagesList = fullChatLog.map(msg => {
    let messagesListWrapperStyle;
    let messageStyle;
    if (msg.side === "left") {
      messagesListWrapperStyle = messagesListWrapperStyleLeft;
      messageStyle = messageStyleLeft;
    } else {
      messagesListWrapperStyle = messagesListWrapperStyleRight;
      messageStyle = messageStyleRight;
    }
    return (
      <Div key={msg.message_id} css={messagesListWrapperStyle}>
        <Div css={messageStyle}>{msg.text}</Div>
      </Div>
    );
  });

  return <Div css={wrapperStyle}>{messagesList}</Div>;
};
