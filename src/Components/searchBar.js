import React, { Component } from "react";
import { Div, Input } from "glamorous";

const SearchBar = _ => {
  const wrapperStyle = {
    height: "60px",
    background: "#fbfbfb",
    textAlign: "center",
    display: "grid",
    gridTemplateColumns: "100%"
  };

  const searchBarStyle = {
    width: "80%",
    border: "none",
    height: "50%",
    padding: "0px 15px",
    justifySelf: "center",
    alignSelf: "center",
    textAlign: "center",
    background: "#fff",
    color: "#7f7f7f",
    ":focus": {
      "::placeholder": {
        color: "transparent"
      },
      textAlign: "left"
    }
  };

  return (
    <Div css={wrapperStyle}>
      <Input
        css={searchBarStyle}
        type="text"
        placeholder="Search or start new chat"
        autofocus
      />
    </Div>
  );
};

export { SearchBar };
