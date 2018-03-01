import React, { Component } from 'react';
import { Div } from 'glamorous';

import { Header } from './header';
import { SearchBar } from '../../Profile/SearchBar';
import SearchResults from './searchResults';
import { ContactInfo } from './contactInfo';

export default class ContextBox extends Component {
  render() {
    const {
      type,
      handleCancelClick,
      handleDeleteChatClick,
      handleReportSpamClick,
      handleBlockContactClick,
      messagesLog,
      name,
      picturePath
    } = this.props;

    switch (type) {
      case 'friendInfo':
        return (
          <ContactInfo
            handleReportSpamClick={handleReportSpamClick}
            handleDeleteChatClick={handleDeleteChatClick}
            handleBlockContactClick={handleBlockContactClick}
            handleCancelClick={handleCancelClick}
            picturePath={picturePath}
            name={name}
          />
        );

      case 'search':
        return (
          <SearchResults
            name={name}
            messagesLog={messagesLog}
            handleCancelClick={handleCancelClick}
          />
        );
    }
  }
}
