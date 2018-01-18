import React, { Component } from "react";
import { Div } from "glamorous";

import { FriendsListItem } from "./friendsListItem";
import { range } from "../utils";

const FriendsList = ({
  searchBarValue: searchBarValue,
  friendsList: friendsList = []
}) => {
  const wrapperStyle = {
    overflowY: "scroll",
    height: "100%"
  };

  const listOfFriends = friendsList.map(friend => (
    <FriendsListItem
      key={friend.id}
      name={friend.name}
      timestamp={friend.latest_timestamp}
    />
  ));

  return (
    <Div css={wrapperStyle}>
      {listOfFriends.filter(({ props: props }) =>
        props.name.toLowerCase().includes(searchBarValue.toLowerCase().trim())
      )}
    </Div>
  );
};

export { FriendsList };
