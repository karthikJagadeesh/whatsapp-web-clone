import React from "react";
import { Div } from "glamorous";

const App = _ => {
  const style = {
    display: "grid",
    gridTemplateColumns: "30% 70%",
    gridTemplateAreas: "friendsList chatBox"
  };

  const friendsListStyle = {
    gridArea: "friendsList"
  };

  const chatBoxStyle = {
    gridArea: "chatBox"
  };

  return (
    <Div css={style}>
      <Div css={friendsListStyle}> List</Div>
      <Div css={chatBoxStyle}> ChatBox</Div>
    </Div>
  );
};

export { App };
