import React from "react";
import { Div } from "glamorous";

import { FriendsListItem } from "../FriendsList/friendsListItem";
import MdGroupAdd from "react-icons/lib/md/group-add";

const filteredList = (list, searchBarValue) => {
  const sort = list =>
    list.sort((curr, next) => {
      const currNameStartWithSearchValue = curr.name
        .toLowerCase()
        .startsWith(searchBarValue);
      const nextNameStartWithSearchValue = next.name
        .toLowerCase()
        .startsWith(searchBarValue);
      if (currNameStartWithSearchValue && nextNameStartWithSearchValue)
        return 0;
      else if (currNameStartWithSearchValue) return -1;
      else if (nextNameStartWithSearchValue) return 1;
    });

  return sort(
    list.filter(friend =>
      friend.name.toLowerCase().includes(searchBarValue.toLowerCase().trim())
    )
  );
};

const sortedList = list =>
  list.sort((curr, next) => {
    if (curr.id === 0 || next.id === 0) return;
    const currName = curr.name.toLowerCase();
    const nextName = next.name.toLowerCase();
    if (currName < nextName) return -1;
    else if (currName > nextName) return 1;
    else return 0;
  });

export const AllFriendsList = ({
  handleNewGroupClick,
  handleListItemClick,
  searchBarValue,
  selectedFriend,
  allFriendsList = []
}) => {
  const listOfAllFriendsRaw = allFriendsList.map(friend => {
    const extra = {
      key: friend.id,
      handleListItemClick,
      type: "allFriendsList"
    };
    return { ...friend, ...extra };
  });

  /* Take the sorted list of all friends and insert `New group` item at the top
     and the alphabet list seperator wherever necessary */
  let currentNameGroup = "";
  let listOfAllFriendsWithMetaRaw = [];
  sortedList(listOfAllFriendsRaw).forEach((friend, index) => {
    if (index === 0) {
      listOfAllFriendsWithMetaRaw.push({
        id: 0,
        key: 0,
        name: "New group",
        type: "newGroup",
        icon: MdGroupAdd,
        handleListItemClick: handleNewGroupClick
      });
    } else {
      const name = friend.name[0].toUpperCase();
      if (name !== currentNameGroup) {
        listOfAllFriendsWithMetaRaw.push({
          id: name,
          key: name,
          name: name,
          type: "nameGroup"
        });
      }
      currentNameGroup = name;
    }
    listOfAllFriendsWithMetaRaw.push(friend);
  });

  const ListOfAllFriendsWithMeta = _ =>
    sortedList(listOfAllFriendsWithMetaRaw).map(friend => (
      <FriendsListItem {...friend} />
    ));

  const ListOfAllFriends = _ =>
    filteredList(sortedList(listOfAllFriendsRaw), searchBarValue).map(
      friend => <FriendsListItem {...friend} />
    );

  return (
    <Div
      css={{
        overflowY: "scroll",
        height: "100%"
      }}
    >
      {searchBarValue ? <ListOfAllFriends /> : <ListOfAllFriendsWithMeta />}
    </Div>
  );
};

export default AllFriendsList;
