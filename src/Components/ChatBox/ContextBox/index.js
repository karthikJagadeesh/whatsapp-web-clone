import React, { Component } from "react";
import { Div } from "glamorous";

import { Header } from "./header";
import { SearchBar } from "../../Profile/SearchBar";
import SearchResults from "./searchResults";
import { ContactInfo } from "./contactInfo";

export default class ContextBox extends Component {
  render() {
    const {
      isContactInfoContextBoxActive,
      handleCancelClick,
      handleDeleteChatClick,
      handleReportSpamClick,
      handleBlockContactClick,
      messagesLog,
      name,
      picturePath
    } = this.props;

    return isContactInfoContextBoxActive ? (
      <ContactInfo
        handleReportSpamClick={handleReportSpamClick}
        handleDeleteChatClick={handleDeleteChatClick}
        handleBlockContactClick={handleBlockContactClick}
        handleCancelClick={handleCancelClick}
        picturePath={picturePath}
        name={name}
      />
    ) : (
      <SearchResults
        name={name}
        messagesLog={messagesLog}
        handleCancelClick={handleCancelClick}
      />
    );
  }
}
