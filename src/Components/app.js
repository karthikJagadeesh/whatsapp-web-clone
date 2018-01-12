import React from "react";
import { Div } from "glamorous";

import Profile from "./profile";

const App = _ => {
  const wrapperStyle = {
    display: "grid",
    gridTemplateColumns: "30% 70%",
    height: "100%",
    boxShadow: "0px 0px 4px #222"
    // gridTemplateAreas: "friendsList chatBox"
  };

  const friendsListStyle = {
    background: "green"
  };

  const chatBoxStyle = {
    background: "red"
  };

  return (
    <Div css={wrapperStyle}>
      <Div css={friendsListStyle}> List</Div>
      <Div css={chatBoxStyle}> ChatBox</Div>
    </Div>
  );
};

export { App };
