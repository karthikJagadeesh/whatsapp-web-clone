import React from "react";
import { Div } from "glamorous";

const SearchResults = ({ name, searchValue, messagesLog }) => {
  const wrapperStyle = {
    marginTop: "50px",
    textAlign: "center",
    color: "rgba(0, 0, 0, 0.4)",
    fontSize: "0.9em"
  };
  const initialDisplay = (
    <Div css={wrapperStyle}>Search for messages with {name}</Div>
  );
  const resultsDisplay = (
    <Div>
      <Div>Result1</Div>
      <Div>Result2</Div>
    </Div>
  );

  return searchValue ? resultsDisplay : initialDisplay;
};

export { SearchResults };
