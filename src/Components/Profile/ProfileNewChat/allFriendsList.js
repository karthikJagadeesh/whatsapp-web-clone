import React from "react";
import { Div } from "glamorous";

import { FriendsListItem } from "../FriendsList/friendsListItem";
import MdGroupAdd from "react-icons/lib/md/group-add";

export const AllFriendsList = ({
  handleNewGroupClick,
  handleListItemClick,
  searchBarValue,
  selectedFriend,
  allFriendsList: allFriendsList = []
}) => {
  const listOfAllFriends = allFriendsList.map(friend => {
    const props = {
      key: friend.id,
      id: friend.id,
      name: friend.name,
      picture: friend.picture,
      status: friend.status
    };
    return <FriendsListItem {...props} type="allFriendsList" />;
  });
  const listOfAllFriendsWithMeta = Array.from(listOfAllFriends);

  // let previouslyCurrentRegion = "A";
  listOfAllFriendsWithMeta.forEach((friend, index) => {
    if (index === 0) {
      listOfAllFriendsWithMeta.splice(
        index,
        0,
        <FriendsListItem
          id={0}
          key={0}
          name="New group"
          type="newGroup"
          icon={MdGroupAdd}
          handleListItemClick={handleNewGroupClick}
        />
      );
    }
    // else if (friend.props.name[0] !== previouslyCurrentRegion) {
    //   listOfAllFriendsWithMeta.splice(
    //     index,
    //     0,
    //     <FriendsListItem
    //       id={friend.props.name[0].toUpperCase().repeat(6)}
    //       key={friend.props.name[0].toUpperCase().repeat(6)}
    //       name={friend.props.name[0].toUpperCase()}
    //       type="nameGroup"
    //     />
    //   );
    //   previouslyCurrentRegion = friend.props.name[0];
    // }
  });
  // listOfAllFriendsWithMeta.unshift();

  const sortedAndFilteredList = list =>
    list
      .sort((curr, next) => {
        if (curr.props.id === 0 || next.props.id === 0) return;
        const currName = curr.props.name.toLowerCase();
        const nextName = next.props.name.toLowerCase();
        if (currName < nextName) return -1;
        else if (currName > nextName) return 1;
        else return 0;
      })
      .filter(({ props }) =>
        props.name.toLowerCase().includes(searchBarValue.toLowerCase().trim())
      );

  return (
    <Div
      css={{
        overflowY: "scroll",
        height: "100%"
      }}
    >
      {searchBarValue
        ? sortedAndFilteredList(listOfAllFriends)
        : sortedAndFilteredList(listOfAllFriendsWithMeta)}
    </Div>
  );
};

export default AllFriendsList;
