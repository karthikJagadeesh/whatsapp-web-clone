import React from "react";
import { Div, Span } from "glamorous";

const Message = ({ messageStyle, text, timestamp }) => (
  <Div css={messageStyle}>
    <Span
      css={{
        wordWrap: "break-word",
        overflow: "hidden"
      }}
    >
      {text}
    </Span>
    <Span
      css={{
        marginBottom: "-4px",
        fontSize: "0.7em",
        alignSelf: "end",
        justifySelf: "end",
        color: "rgba(0, 0, 0, 0.45)"
      }}
    >
      {timestamp}
    </Span>
  </Div>
);

export const ChatBoxDisplay = ({
  backgroundColor,
  messages,
  chatlog: chatlog = []
}) => {
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
    border: "1px solid rgba(0, 0, 0, 0.1)",
    boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.1)",
    fontSize: "0.9em",
    borderRadius: "8px",
    color: "rgb(38, 38, 38)",
    padding: "6px 6px",
    background: "#FFF",
    display: "grid",
    gridTemplateColumns: "auto 50px"
  };

  const messageStyleRight = {
    ...messageStyleLeft,
    background: "rgb(220, 248, 198)"
  };

  const fullChatLog = [...messages, ...chatlog];

  const messagesList = fullChatLog.map((msg, index, self) => {
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
      <Div
        key={msg.message_id}
        css={{
          ...messagesListWrapperStyle,
          /* Since the message list style is flex-reversed, applying margin to
             the first messageBox instead of last */
          marginBottom: index === 0 ? "10px" : "0"
        }}
      >
        <Message
          messageStyle={messageStyle}
          text={msg.text}
          timestamp={msg.timestamp}
        />
      </Div>
    );
  });

  return (
    <Div
      css={{
        background: backgroundColor,
        height: "100%",
        overflowY: "auto",
        display: "flex",
        flexFlow: "column-reverse"
      }}
    >
      {messagesList}
    </Div>
  );
};
