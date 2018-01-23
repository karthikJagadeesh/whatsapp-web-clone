import React from "react";
import { Div } from "glamorous";

const SearchResults = ({ name }) => {
  const wrapperStyle = {
    marginTop: "50px",
    textAlign: "center",
    color: "rgba(0, 0, 0, 0.4)",
    fontSize: "0.9em"
  };
  return <Div css={wrapperStyle}>Search for messages with {name}</Div>;
};

export { SearchResults };
