import React from "react";
import { Div, Input } from "glamorous";
import MdInsertEmoticon from "react-icons/lib/md/insert-emoticon";

const ChatMessageInput = _ => {
  const inputStyle = {
    width: "95%",
    padding: "4px 10px",
    border: "1px solid rgba(0, 0, 0, 0.05)",
    height: "30px",
    color: "#7f7f7f",
    fontSize: "0.9em",
    fontWeight: "500",
    letterSpacing: "0.5px",
    ":focus": {
      color: "#545454",
    }
  };
  const wrapperStyle = {
    textAlign: "center"
  };

  return (
    <Div css={wrapperStyle}>
      <Input css={inputStyle} type="text" placeholder="Type a message" />
    </Div>
  );
};

export { ChatMessageInput };
