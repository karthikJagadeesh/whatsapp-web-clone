import React, { Component } from "react";
import { Div } from "glamorous";

import { ChatBoxHeader } from "./chatBoxHeader";
import { ChatBoxDisplay } from "./chatBoxDisplay";
import { ChatBoxFooter } from "./chatBoxFooter";

class ChatBox extends Component {
  constructor(context) {
    super(context);
    this.state = {
      messages: []
    };
  }

  wrapperStyle = {
    display: "grid",
    gridTemplateRows: "10% 80% 10%",
    height: "94vh"
  };
  wrapperChatBoxDisplay = {};

  handleChatSend = message => {
    const freshMessages = [message, ...this.state.messages];
    if (message) this.setState({ messages: freshMessages });
  };

  render() {
    const { chatBoxContext } = this.props;
    return (
      <Div css={this.wrapperStyle}>
        <Div>
          {chatBoxContext ? (
            <ChatBoxHeader chatBoxContext={chatBoxContext} />
          ) : null}
        </Div>
        <Div css={this.wrapperChatBoxDisplay}>
          {chatBoxContext ? (
            <ChatBoxDisplay messages={this.state.messages} />
          ) : null}
        </Div>
        <Div>
          {chatBoxContext ? (
            <ChatBoxFooter
              isInitialScreen={false}
              handleChatSend={this.handleChatSend}
            />
          ) : (
            <ChatBoxFooter isInitialScreen={true} />
          )}
        </Div>
      </Div>
    );
  }
}

export { ChatBox };
