import React, { Component, Fragment } from "react";
import { Div } from "glamorous";

import { ChatBoxHeader } from "./ChatBoxHeader";
import { ChatBoxDisplay } from "./ChatBoxDisplay";
import { ChatBoxFooter } from "./ChatBoxFooter";
import ContextBox from "./ContextBox";

export default class ChatBox extends Component {
  state = {
    messages: [],
    isContextBoxActive: false,
    isContactInfoContextBoxActive: false
  };

  wrapperStyleWithoutContextBox = {
    display: "grid",
    gridTemplateColumns: "1fr",
    height: "100%"
  };
  wrapperStyleWithContextBox = {
    ...this.wrapperStyleWithoutContextBox,
    gridTemplateColumns: "5.7fr 4.3fr"
  };

  handleFriendChatHeaderClick = _ => {
    this.setState({
      isContactInfoContextBoxActive: true,
      isContextBoxActive: true
    });
  };
  handleSearchClick = _ => {
    this.setState({
      isContextBoxActive: true,
      isContactInfoContextBoxActive: false
    });
  };
  handleCancelClick = _ => {
    this.setState({
      isContextBoxActive: false,
      isContactInfoContextBoxActive: false
    });
  };

  handleChatSend = message => {
    const freshMessages = [message, ...this.state.messages];
    if (message) this.setState({ messages: freshMessages });
  };

  componentWillReceiveProps(nextProps) {
    const { chatBoxContext: currentChatBoxContext } = this.props;
    const { chatBoxContext: nextChatBoxContext } = nextProps;
    if (currentChatBoxContext.id !== nextChatBoxContext.id)
      this.setState({ isContextBoxActive: false });
  }

  render() {
    const {
      chatBoxContext,
      checkForLastChat,
      backgroundColor,
      handleDeleteChatClick,
      handleClearChatClick,
      handleReportSpamClick,
      handleBlockContactClick,
      handleMuteClick
    } = this.props;
    const {
      messages,
      isContextBoxActive,
      isContactInfoContextBoxActive
    } = this.state;
    const wrapperStyle = isContextBoxActive
      ? this.wrapperStyleWithContextBox
      : this.wrapperStyleWithoutContextBox;

    return (
      <Div css={wrapperStyle}>
        <Div
          css={{
            display: "grid",
            gridTemplateRows: "10% 80% 10%",
            height: "100vh"
          }}
        >
          <Div>
            {chatBoxContext ? (
              <ChatBoxHeader
                chatBoxContext={chatBoxContext}
                handleSearchClick={this.handleSearchClick}
                handleFriendChatHeaderClick={this.handleFriendChatHeaderClick}
                handleDeleteChatClick={handleDeleteChatClick}
                handleClearChatClick={handleClearChatClick}
                handleMuteClick={handleMuteClick}
              />
            ) : null}
          </Div>
          <Div>
            {chatBoxContext ? (
              <ChatBoxDisplay
                chatlog={chatBoxContext.chatlog}
                messages={messages}
                backgroundColor={backgroundColor}
              />
            ) : null}
          </Div>
          <Div>
            {chatBoxContext ? (
              <ChatBoxFooter
                isInitialScreen={false}
                handleChatSend={this.handleChatSend}
                checkForLastChat={checkForLastChat}
              />
            ) : (
              <ChatBoxFooter isInitialScreen={true} />
            )}
          </Div>
        </Div>
        {isContextBoxActive ? (
          <Div css={this.contextBoxStyle}>
            <ContextBox
              isContactInfoContextBoxActive={isContactInfoContextBoxActive}
              name={chatBoxContext.name}
              messagesLog={chatBoxContext.chatlog}
              picturePath={chatBoxContext.picture}
              handleCancelClick={this.handleCancelClick}
              handleDeleteChatClick={handleDeleteChatClick}
              handleReportSpamClick={handleReportSpamClick}
              handleBlockContactClick={handleBlockContactClick}
            />
          </Div>
        ) : null}
      </Div>
    );
  }
}
