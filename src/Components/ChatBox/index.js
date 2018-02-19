import React, { Component } from "react";
import { Div } from "glamorous";

import { ChatBoxHeader } from "./ChatBoxHeader";
import { ChatBoxDisplay } from "./ChatBoxDisplay";
import { ChatBoxFooter } from "./ChatBoxFooter";

export default class ChatBox extends Component {
  state = {
    messages: []
  };

  handleChatSend = message => {
    const freshMessages = [message, ...this.state.messages];
    if (message) this.setState({ messages: freshMessages });
  };

  render() {
    const {
      chatBoxContext,
      checkForLastChat,
      handleSearchClick,
      handleFriendChatHeaderClick,
      backgroundColor,
      handleDeleteChatClick,
      handleClearChatClick,
      handleMuteClick
    } = this.props;
    const { messages } = this.state;

    return (
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
              handleSearchClick={handleSearchClick}
              handleFriendChatHeaderClick={handleFriendChatHeaderClick}
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
    );
  }
}
