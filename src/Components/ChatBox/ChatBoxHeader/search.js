import React from "react";
import { Div } from "glamorous";
import MdSearch from "react-icons/lib/md/search";

export const Search = ({ handleSearchClick }) => {
  return (
    <Div onClick={handleSearchClick}>
      <MdSearch size={25} color="#666" />
    </Div>
  );
};
