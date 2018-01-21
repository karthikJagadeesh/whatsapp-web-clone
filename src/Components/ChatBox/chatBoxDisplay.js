import React from "react";
import { Div } from "glamorous";

const ChatBoxDisplay = ({ messages }) => {
  const wrapperStyle = {
    background: "#E4DED3",
    height: "100%",
    overflowY: "scroll",
    display: "flex",
    flexDirection: "column-reverse",
    paddingBottom: "50px"
  };
  const messagesListWrapperStyle = {
    padding: "2px 70px",
    display: "grid",
    templateGridColumns: "1fr"
  };
  const messageStyle = {
    maxWidth: "70%",
    justifySelf: "end",
    wordWrap: "break-word",
    overflow: "hidden",
    border: "1px solid rgba(0, 0, 0, 0.1)",
    boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.1)",
    fontSize: "0.9em",
    borderRadius: "8px",
    color: "rgb(38, 38, 38)",
    padding: "8px 6px",
    background: "rgb(220, 248, 198)"
  };
  const messagesList = messages.map(msg => (
    <Div css={messagesListWrapperStyle}>
      <Div css={messageStyle}>{msg}</Div>
    </Div>
  ));

  return <Div css={wrapperStyle}>{messagesList}</Div>;
};

export { ChatBoxDisplay };
