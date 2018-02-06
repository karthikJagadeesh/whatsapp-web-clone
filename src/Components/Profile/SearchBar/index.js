import React, { Component } from "react";
import { Div, Input } from "glamorous";

export const SearchBar = ({
  placeholder,
  handleInputChange,
  searchBarValue
}) => {
  return (
    <Div
      css={{
        background: "#fbfbfb",
        textAlign: "center",
        display: "grid",
        gridTemplateColumns: "100%",
        height: "100%"
      }}
    >
      <Input
        css={{
          width: "85%",
          border: "1px solid rgba(0, 0, 0, 0.05)",
          borderRadius: "6px",
          height: "70%",
          padding: "0px 15px",
          justifySelf: "center",
          alignSelf: "center",
          textAlign: "left",
          background: "#fff",
          color: "#7f7f7f",
          ":focus": {
            "::placeholder": {
              color: "transparent"
            }
          }
        }}
        type="text"
        placeholder={placeholder || "Search or start new chat"}
        autofocus
        onChange={handleInputChange}
        value={searchBarValue}
      />
    </Div>
  );
};
