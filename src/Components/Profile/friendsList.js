import React, { Component } from "react";
import { Div } from "glamorous";

import { FriendsListItem } from "./friendsListItem";

export const FriendsList = ({
  handleListItemClick,
  searchBarValue,
  selectedFriend,
  friendsList: friendsList = []
}) => {
  const listOfFriends = friendsList.map(friend => {
    const props = {
      key: friend.id,
      id: friend.id,
      name: friend.name,
      timestamp: friend.latest_timestamp,
      picture: friend.picture,
      lastChat: friend.lastChat,
      handleListItemClick,
      selectedFriend
    };
    return <FriendsListItem {...props} />;
  });

  return (
    <Div
      css={{
        overflowY: "scroll",
        height: "100%"
      }}
    >
      {listOfFriends.filter(({ props }) =>
        props.name.toLowerCase().includes(searchBarValue.toLowerCase().trim())
      )}
    </Div>
  );
};
