import React, { Component } from "react";
import { Div } from "glamorous";

import { Header } from "./header";
import { SearchBar } from "../Profile/searchBar";
import { SearchResults } from "./searchResults";
import { ContactInfo } from "./contactInfo";

export default class ContextBox extends Component {
  state = {
    value: ""
  };

  handleInputChange = ({ target }) => {
    this.setState({ value: target.value });
  };

  render() {
    const {
      isContactInfoContextBoxActive,
      handleCancelClick,
      messagesLog,
      name,
      picturePath
    } = this.props;
    const { value } = this.state;

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
        <Div
          css={{
            height: "100%",
            display: "grid",
            gridTemplateRows: "1fr 0.6fr 8.4fr",
            borderLeft: "1px solid rgba(0, 0, 0, 0.05)",
            background: "#FFF"
          }}
        >
          <Div
            css={{
              height: "100%",
              width: "100%",
              borderBottom: "1px solid rgba(0, 0, 0, 0.1)"
            }}
          >
            <Header
              text={"Search Messages"}
              handleCancelClick={handleCancelClick}
            />
          </Div>
          <Div
            css={{
              height: "100%",
              width: "100%",
              borderBottom: "1px solid rgba(0, 0, 0, 0.1)"
            }}
          >
            <SearchBar
              placeholder={"Search..."}
              handleInputChange={this.handleInputChange}
              searchBarValue={value}
            />
          </Div>
          <Div
            css={{
              height: "100%",
              width: "100%",
              borderBottom: "1px solid rgba(0, 0, 0, 0.1)"
            }}
          >
            <SearchResults
              name={name}
              searchValue={value}
              messagesLog={messagesLog}
            />
          </Div>
        </Div>
      );
    }
  }
}
