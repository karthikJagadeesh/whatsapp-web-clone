import React from "react";
import { Div, P, Span } from "glamorous";

const Template = ({ type }) => {
  if (type === "initialDisplay") {
    return (
      <Div
        css={{
          marginTop: "50px",
          textAlign: "center",
          color: "rgba(0, 0, 0, 0.4)",
          fontSize: "0.9em"
        }}
      >
        Search for messages with {name}
      </Div>
    );
  } else if (type === "noResultsDisplay") {
    return (
      <Div
        css={{
          marginTop: "50px",
          textAlign: "center",
          color: "rgba(0, 0, 0, 0.4)",
          fontSize: "0.9em"
        }}
      >
        No messages found
      </Div>
    );
  }
};

const Results = ({ messagesLog, searchValue }) => {
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
            <Span
              key={index}
              css={{
                color: "#339686",
                fontSize: "1.1em",
                fontWeight: "700"
              }}
            >
              {searchValue}
            </Span>
          );
        } else if (index === 1) {
          highlightedResult.push(
            <Span
              key={index}
              css={{
                color: "#339686",
                fontSize: "1.1em",
                fontWeight: "700"
              }}
            >
              {searchValue}
            </Span>
          );
        }
        highlightedResult.push(text);
      });

      return (
        <P
          key={msg.message_id}
          css={{
            borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
            padding: "1em 0",
            color: "rgba(0, 0, 0, 0.6)",
            fontSize: "0.9em"
          }}
        >
          {highlightedResult}
        </P>
      );
    });

  if (resultMessagesLog.length > 0) {
    return (
      <Div
        css={{
          padding: "20px",
          textAlign: "center"
        }}
      >
        {resultMessagesLog}
      </Div>
    );
  } else {
    return <Template type="noResultsDisplay" />
  }
};

export const SearchResults = ({ name, searchValue, messagesLog }) => {
  return searchValue ? (
    <Results messagesLog={messagesLog} searchValue={searchValue}/>
  ) : (
    <Template type="initialDisplay" />
  );
};
