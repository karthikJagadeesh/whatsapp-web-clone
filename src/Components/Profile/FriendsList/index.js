import React, { Component } from "react";
import { Div } from "glamorous";
import { format } from "date-fns";

import { FriendsListItem } from "./friendsListItem";
import { filteredList } from "../utils";

export const FriendsList = ({
  handleListItemClick,
  searchBarValue,
  selectedFriend,
  friendsList: friendsList = []
}) => {
  const composeFriendsList = list =>
    list.map(friend => {
      const props = {
        key: friend.id,
        id: friend.id,
        name: friend.name,
        timestamp: format(new Date(friend.latest_timestamp), "h:mm A"),
        picture: friend.picture,
        lastChat: friend.lastChat,
        handleListItemClick,
        selectedFriend
      };
      return <FriendsListItem {...props} />;
    });
  const ListOfFriends = _ => composeFriendsList(friendsList);

  const FilteredListOfFriends = _ =>
    composeFriendsList(filteredList(friendsList, searchBarValue));

  return (
    <Div
      css={{
        overflowY: "scroll",
        height: "100%"
      }}
    >
      {searchBarValue ? <FilteredListOfFriends /> : <ListOfFriends />}
    </Div>
  );
};
