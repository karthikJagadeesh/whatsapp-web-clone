import React from "react";
import { Div } from "glamorous";

import { FriendsListItem } from "../FriendsList/friendsListItem";
import MdGroupAdd from "react-icons/lib/md/group-add";

const filteredList = (list, searchBarValue) =>
  list.filter(({ props }) =>
    props.name.toLowerCase().includes(searchBarValue.toLowerCase().trim())
  );

const sortedList = list =>
  list.sort((curr, next) => {
    if (curr.props.id === 0 || next.props.id === 0) return;
    const currName = curr.props.name.toLowerCase();
    const nextName = next.props.name.toLowerCase();
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
  const listOfAllFriends = allFriendsList.map(friend => {
    const props = {
      key: friend.id,
      id: friend.id,
      name: friend.name,
      picture: friend.picture,
      status: friend.status,
      handleListItemClick
    };
    return <FriendsListItem {...props} type="allFriendsList" />;
  });

  let currentNameGroup = "";
  const listOfAllFriendsWithMeta = [];
  sortedList(listOfAllFriends).forEach((friend, index) => {
    if (index === 0) {
      listOfAllFriendsWithMeta.push(
        <FriendsListItem
          id={0}
          key={0}
          name="New group"
          type="newGroup"
          icon={MdGroupAdd}
          handleListItemClick={handleNewGroupClick}
        />
      );
    } else {
      const name = friend.props.name[0].toUpperCase();
      if (name !== currentNameGroup) {
        listOfAllFriendsWithMeta.push(
          <FriendsListItem id={name} key={name} name={name} type="nameGroup" />
        );
      }
      currentNameGroup = name;
    }
    listOfAllFriendsWithMeta.push(friend);
  });

  return (
    <Div
      css={{
        overflowY: "scroll",
        height: "100%"
      }}
    >
      {searchBarValue
        ? filteredList(sortedList(listOfAllFriends), searchBarValue)
        : sortedList(listOfAllFriendsWithMeta)}
    </Div>
  );
};

export default AllFriendsList;
