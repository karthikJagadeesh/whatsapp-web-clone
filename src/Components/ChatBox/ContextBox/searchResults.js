import React, { Component } from 'react';
import glamorous, { Div, P, Span } from 'glamorous';

import { Header } from './header';
import { SearchBar } from '../../Profile/SearchBar';

const TemplateMessage = glamorous.div({
  marginTop: '50px',
  textAlign: 'center',
  color: 'rgba(0, 0, 0, 0.4)',
  fontSize: '0.9em'
});

const Template = ({ type, name }) => {
  if (type === 'initialDisplay') {
    return <TemplateMessage>Search for messages with {name}</TemplateMessage>;
  } else if (type === 'noResultsDisplay') {
    return <TemplateMessage>No messages found</TemplateMessage>;
  }
};

const DecoratedMessagesLog = ({ msg, searchValue }) => {
  const HighlightWord = glamorous.span({
    color: '#339686',
    fontSize: '1.1em',
    fontWeight: '700'
  });
  const HighlightSentence = glamorous.p({
    borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
    padding: '1em 0',
    color: 'rgba(0, 0, 0, 0.6)',
    fontSize: '0.9em'
  });

  const afterSplit = msg.text.toLowerCase().split(searchValue.toLowerCase());

  const highlightedResult = afterSplit.reduce((acc, curr, index) => {
    if (index % 2 === 0 && index) {
      acc.push(
        <HighlightWord key={index}>{searchValue}</HighlightWord>
      );
    } else if (index === 1) {
      acc.push(
        <HighlightWord key={index}>{searchValue}</HighlightWord>
      );
    }
    return [...acc, curr]
  }, [])

  return <HighlightSentence>{highlightedResult}</HighlightSentence>;
};

const Results = ({ messagesLog, searchValue }) => {
  const resultMessagesLog = messagesLog
    .filter(({ text }) =>
      text.toLowerCase().includes(searchValue.toLowerCase().trim())
    )
    .map(msg => (
      <DecoratedMessagesLog
        key={msg.message_id}
        msg={msg}
        searchValue={searchValue}
      />
    ));

  if (resultMessagesLog.length > 0)
    return (
      <Div padding="20px" textAlign="center">
        {resultMessagesLog}
      </Div>
    );
  else return <Template type="noResultsDisplay" />;
};

export default class SearchResults extends Component {
  state = { value: '' };

  handleInputChange = ({ target }) => this.setState({ value: target.value });

  render() {
    const { name, messagesLog, handleCancelClick } = this.props;
    const { value } = this.state;

    return (
      <Div
        css={{
          height: '100%',
          display: 'grid',
          gridTemplateRows: '1fr 0.6fr 8.4fr',
          borderLeft: '1px solid rgba(0, 0, 0, 0.05)',
          background: '#FFF'
        }}
      >
        <Div borderBottom="1px solid rgba(0, 0, 0, 0.1)">
          <Header
            text={'Search Messages'}
            handleCancelClick={handleCancelClick}
          />
        </Div>
        <Div borderBottom="1px solid rgba(0, 0, 0, 0.1)">
          <SearchBar
            placeholder={'Search...'}
            handleInputChange={this.handleInputChange}
            searchBarValue={value}
          />
        </Div>
        <Div>
          {value ? (
            <Results messagesLog={messagesLog} searchValue={value} />
          ) : (
            <Template type="initialDisplay" name={name} />
          )}
        </Div>
      </Div>
    );
  }
}
