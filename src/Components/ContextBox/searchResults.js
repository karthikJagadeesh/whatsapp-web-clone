import React from "react";
import { Div, P, Span } from "glamorous";

const SearchResults = ({ name, searchValue, messagesLog }) => {
  const wrapperStyleInitialStyle = {
    marginTop: "50px",
    textAlign: "center",
    color: "rgba(0, 0, 0, 0.4)",
    fontSize: "0.9em"
  };
  const wrapperResultsStyle = {
    padding: "20px",
    textAlign: "center"
  };
  const resultsStyle = {
    borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
    padding: "1em 0",
    color: "rgba(0, 0, 0, 0.6)",
    fontSize: "0.9em"
  };
  const highlightValue = {
    color: "#339686",
    fontSize: "1.1em",
    fontWeight: "700"
  };

  const templateDisplay = type => {
    if (type === "initialDisplay") {
      return (
        <Div css={wrapperStyleInitialStyle}>
          Search for messages with {name}
        </Div>
      );
    } else if (type === "noResultsDisplay") {
      return <Div css={wrapperStyleInitialStyle}>No messages found</Div>;
    }
  };

  const resultsDisplay = _ => {
    const resultMessagesLog = messagesLog
      .filter(({ text }) =>
        text.toLowerCase().includes(searchValue.toLowerCase().trim())
      )
      .map(msg => {
        const afterSplit = msg.text
          .toLowerCase()
          .split(searchValue.toLowerCase());

        const highlightedResult = [];
        afterSplit.forEach((text, index) => {
          if (index % 2 === 0 && index) {
            highlightedResult.push(
              <Span key={text + index} css={highlightValue}>
                {searchValue}
              </Span>
            );
          }
          if (index === 1) {
            highlightedResult.push(
              <Span key={text + index} css={highlightValue}>
                {searchValue}
              </Span>
            );
          }
          highlightedResult.push(text);
        });

        return (
          <P key={msg.message_id} css={resultsStyle}>
            {highlightedResult}
          </P>
        );
      });

    if (resultMessagesLog.length > 0) {
      return <Div css={wrapperResultsStyle}>{resultMessagesLog}</Div>;
    } else {
      return templateDisplay("noResultsDisplay");
    }
  };

  return searchValue ? resultsDisplay() : templateDisplay("initialDisplay");
};

export { SearchResults };
