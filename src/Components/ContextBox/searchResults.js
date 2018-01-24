import React from "react";
import ReactDOMServer from "react-dom/server";
import { Div, P, Span } from "glamorous";

const SearchResults = ({ name, searchValue, messagesLog }) => {
  const wrapperStyleInitialStyle = {
    marginTop: "50px",
    textAlign: "center",
    color: "rgba(0, 0, 0, 0.4)",
    fontSize: "0.9em"
  };
  const initialDisplay = (
    <Div css={wrapperStyleInitialStyle}>Search for messages with {name}</Div>
  );
  const wrapperResultsStyle = {
    padding: "20px",
    textAlign: "center"
  };
  const resultsStyle = {
    borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
    paddingBottom: "1em",
    color: "rgba(0, 0, 0, 0.6)",
    fontSize: "0.9em"
  };
  const highlightValue = {
    color: "#339686",
    fontSize: "1.1em",
    fontWeight: "700"
  };

  const resultsDisplay = (
    <Div css={wrapperResultsStyle}>
      {messagesLog
        .filter(({ text }) =>
          text.toLowerCase().includes(searchValue.toLowerCase().trim())
        )
        .map(({ text }) => {
          const afterSplit = text
            .toLowerCase()
            .split(searchValue.toLowerCase());
          const highlightedResult = [];
          afterSplit.forEach((text, index) => {
            if (index % 2 === 0 && index) {
              highlightedResult.push(
                <Span css={highlightValue}>{searchValue}</Span>
              );
            }
            if (index === 1) {
              highlightedResult.push(
                <Span css={highlightValue}>{searchValue}</Span>
              );
            }
            highlightedResult.push(text);
          });

          return <Div css={resultsStyle}>{highlightedResult}</Div>;
        })}
    </Div>
  );

  return searchValue ? resultsDisplay : initialDisplay;
};

export { SearchResults };
