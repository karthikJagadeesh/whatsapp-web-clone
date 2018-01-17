import React, { Component } from "react";
import { Div, Input } from "glamorous";
import "babel-polyfill";

class SearchBar extends Component {
  constructor(context) {
    super(context);
  }

  wrapperStyle = {
    background: "#fbfbfb",
    textAlign: "center",
    display: "grid",
    gridTemplateColumns: "100%",
    height: "100%"
  };

  searchBarStyle = {
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
  };

  render() {
    return (
      <Div css={this.wrapperStyle}>
        <Input
          css={this.searchBarStyle}
          type="text"
          placeholder="Search or start new chat"
          autofocus
          onChange={this.props.handleInputChange}
          value={this.props.searchBarValue}
        />
      </Div>
    );
  }
}

export { SearchBar };
