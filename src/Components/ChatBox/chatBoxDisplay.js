import React from "react";
import { Div } from "glamorous";

const ChatBoxDisplay = ({ message }) => {
  const wrapperStyle = {
    background: "#E4DED3",
    height: "100%",
    overflowY: "scroll"
  };

  return <Div css={wrapperStyle}>{message}</Div>;
};

export { ChatBoxDisplay };
