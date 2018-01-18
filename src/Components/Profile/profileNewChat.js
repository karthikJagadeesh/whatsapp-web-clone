import React from "react";
import { Div } from "glamorous";
import MdChat from "react-icons/lib/md/chat";

const ProfileNewChat = _ => {
  return (
    <Div>
      <MdChat size={25} color="#666"/>
    </Div>
  );
};

export { ProfileNewChat };