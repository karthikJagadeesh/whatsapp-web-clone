import React, { Component } from "react";
import { Div } from "glamorous";

import { ChatBoxHeader } from "./chatBoxHeader";
import { ChatBoxDisplay } from "./chatBoxDisplay";
import { ChatBoxFooter } from "./chatBoxFooter";

class ChatBox extends Component {
  constructor(context) {
    super(context);
    this.state = {
      message: ""
    };
  }

  wrapperStyle = {
    display: "grid",
    gridTemplateRows: "10% 80% 10%",
    height: "94vh"
  };

  handleChatSend = message => {
    this.setState({ message });
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
        <Div>
          {chatBoxContext ? (
            <ChatBoxDisplay message={this.state.message} />
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
