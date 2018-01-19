import React, { Component } from "react";
import { Div } from "glamorous";

import { FriendsListItem } from "./friendsListItem";
import { range } from "../utils";

const FriendsList = ({
  handleListItemClick,
  searchBarValue,
  friendsList: friendsList = []
}) => {
  const wrapperStyle = {
    overflowY: "scroll",
    height: "100%"
  };

  const listOfFriends = friendsList.map(friend => {
    const props = {
      key: friend.id,
      id: friend.id,
      name: friend.name,
      timestamp: friend.latest_timestamp,
      picture: friend.picture,
      lastChat: friend.lastChat,
      handleListItemClick
    };
    return <FriendsListItem {...props} />;
  });

  return (
    <Div css={wrapperStyle}>
      {listOfFriends.filter(({ props }) =>
        props.name.toLowerCase().includes(searchBarValue.toLowerCase().trim())
      )}
    </Div>
  );
};

export { FriendsList };
