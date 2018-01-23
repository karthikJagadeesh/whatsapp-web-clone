import React, { Component } from "react";
import { Div } from "glamorous";

import { Header } from "./header";
import { SearchBar } from "../Profile/searchBar";
import { SearchResults } from "./searchResults";

class ContextBox extends Component {
  constructor(context) {
    super(context);
    this.state = {
      value: ""
    };
  }
  wrapperStyle = {
    height: "100%",
    display: "grid",
    gridTemplateRows: "10% 6% 84%",
    borderLeft: "1px solid rgba(0, 0, 0, 0.05)",
    background: "#FFF"
  };
  wrapperHeaderStyle = {
    height: "100%",
    width: "100%",
    borderBottom: "1px solid rgba(0, 0, 0, 0.1)"
  };
  wrapperSearchResults = {
    ...this.wrapperHeaderStyle
  };
  wrapperSearchBarStyle = { ...this.wrapperHeaderStyle };

  handleInputChange = ({ target }) => {
    this.setState({ value: target.value });
  };

  render() {
    return (
      <Div css={this.wrapperStyle}>
        <Div css={this.wrapperHeaderStyle}>
          <Header handleCancelClick={this.props.handleCancelClick} />
        </Div>
        <Div css={this.wrapperSearchBarStyle}>
          <SearchBar
            placeholder={"Search..."}
            handleInputChange={this.handleInputChange}
            searchBarValue={this.state.value}
          />
        </Div>
        <Div css={this.wrapperSearchResults}>
          <SearchResults
            name={this.props.name}
            searchValue={this.state.value}
            messagesLog={this.props.messagesLog}
          />
        </Div>
      </Div>
    );
  }
}

export { ContextBox };
