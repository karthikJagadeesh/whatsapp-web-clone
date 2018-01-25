import React, { Component } from "react";
import { Div } from "glamorous";

import { Header } from "./header";
import { SearchBar } from "../Profile/searchBar";
import { SearchResults } from "./searchResults";
import { ContactInfo } from "./contactInfo";

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
    gridTemplateRows: "1fr 0.6fr 8.4fr",
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

  contextBoxDisplay = _ => {
    const {
      isContactInfoContextBoxActive,
      handleCancelClick,
      messagesLog,
      name,
      picturePath
    } = this.props;

    if (isContactInfoContextBoxActive) {
      return (
        <ContactInfo
          handleCancelClick={handleCancelClick}
          picturePath={picturePath}
          name={name}
        />
      );
    } else {
      return (
        <Div css={this.wrapperStyle}>
          <Div css={this.wrapperHeaderStyle}>
            <Header
              text={"Search Messages"}
              handleCancelClick={handleCancelClick}
            />
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
              name={name}
              searchValue={this.state.value}
              messagesLog={messagesLog}
            />
          </Div>
        </Div>
      );
    }
  };

  render() {
    return this.contextBoxDisplay();
  }
}

export { ContextBox };
