import React, { Component } from "react";
import { Div } from "glamorous";

import { FriendsListItem } from "./friendsListItem";
import { range } from "./utils";

const FriendsList = _ => {
  const wrapperStyle = {
    overflowY: "scroll"
  };

  return (
    <Div css={wrapperStyle}>
      {range(15, index => {
        let name = `Friend ${index + 1}`;
        return <FriendsListItem key={name} name={name} />;
      })}
    </Div>
  );
};

export { FriendsList };
