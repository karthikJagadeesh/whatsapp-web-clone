import React, { Component } from "react";
import { Div } from "glamorous";

import { FriendsListItem } from "./friendsListItem";
import { range } from "./utils";

const FriendsList = ({ searchBarValue: searchBarValue }) => {
  const wrapperStyle = {
    overflowY: "scroll",
    height: "100%"
  };

  const listOfFriends = range(15, index => {
    let name = `Friend ${index + 1}`;
    return <FriendsListItem key={name} name={name} />;
  });

  return (
    <Div css={wrapperStyle}>
      {listOfFriends.filter(({ props: props }) =>
        props.name.toLowerCase().includes(searchBarValue.toLowerCase().trim())
      )}
    </Div>
  );
};

export { FriendsList };
