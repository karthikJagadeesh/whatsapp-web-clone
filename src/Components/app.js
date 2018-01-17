import React from "react";
import { Div } from "glamorous";

<<<<<<< HEAD
import { Profile } from "./Profile/profile";
import { ChatBox } from "./ChatBox/chatbox";
=======
import { Profile } from "./profile";
>>>>>>> ac4c789946d24dd9d4be09dec6b224eedee22c72

const App = _ => {
  const wrapperStyle = {
    display: "grid",
    gridTemplateColumns: "30% 70%",
    height: "100%",
    boxShadow: "0px 0px 8px #c4c4c4"
  };

  const friendsListStyle = {
    background: "#eee"
  };

  const chatBoxStyle = {
    background: "#E5DDD5"
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
