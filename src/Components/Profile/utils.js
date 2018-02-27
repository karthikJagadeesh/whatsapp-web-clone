export const filteredList = (list, searchBarValue) => {
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

export const sortedList = list =>
  list.sort((curr, next) => {
    if (curr.id === 0 || next.id === 0) return;
    const currName = curr.name.toLowerCase();
    const nextName = next.name.toLowerCase();
    if (currName < nextName) return -1;
    else if (currName > nextName) return 1;
    else return 0;
  });
