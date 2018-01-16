import React from "react";
import { Div } from "glamorous";

import { Profile } from "./profile";

const App = _ => {
  const wrapperStyle = {
    display: "grid",
    gridTemplateColumns: "30% 70%",
    height: "100%",
    boxShadow: "0px 0px 2px #222"
    // gridTemplateAreas: "friendsList chatBox"
  };

  const friendsListStyle = {
    background: "#eee"
  };

  const chatBoxStyle = {
    background: "#F7F9FA"
  };

  return (
    <Div css={wrapperStyle}>
      <Div css={friendsListStyle}>
        <Profile />
      </Div>
      <Div css={chatBoxStyle}> ChatBox</Div>
    </Div>
  );
};

export { App };
