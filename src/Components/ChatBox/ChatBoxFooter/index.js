import React, { Component } from "react";
import { Div } from "glamorous";
import { format } from "date-fns";

import { SmilieBoard } from "./smilieBoard";
import { ChatMessageInput } from "./chatMessageInput";
import { ChatAudioOrSend } from "./chatAudioOrSend";

export class ChatBoxFooter extends Component {
  state = {
    inputValue: ""
  };

  postChatMessage = timestamp => {
    const { handleChatSend } = this.props;
    handleChatSend({
      text: this.state.inputValue,
      timestamp,
      side: "right",
      message_id: timestamp
    });
    this.setState({ inputValue: "" });
  };

  handleInputKeyDown = event => {
    const enterKeyCode = 13;
    const { checkForLastChat } = this.props;
    const { inputValue } = this.state;
    if (event.keyCode === enterKeyCode && inputValue) {
      const timestamp = new Date().toISOString();
      this.postChatMessage(timestamp);
      checkForLastChat(inputValue, timestamp);
    }
  };

  handleInputChange = ({ target }) => {
    this.setState({ inputValue: target.value });
  };

  render() {
    if (this.props.isInitialScreen) {
      return (
        <Div
          css={{
            height: "100%",
            width: "100%",
            display: "grid"
          }}
        >
          <Div
            css={{
              height: "10%",
              background: "#58e870",
              alignSelf: "end"
            }}
          />
        </Div>
      );
    } else {
      return (
        <Div
          css={{
            background: "#F5F1EE",
            padding: "0px 15px",
            height: "100%",
            display: "grid",
            gridTemplateColumns: "5% 90% 5%"
          }}
        >
          <Div
            css={{
              alignSelf: "center",
              justifySelf: "center",
              ":hover": {
                cursor: "pointer"
              }
            }}
          >
            <SmilieBoard />
          </Div>
          <Div
            css={{
              alignSelf: "center",
              justifySelf: "center",
              width: "100%"
            }}
          >
            <ChatMessageInput
              inputValue={this.state.inputValue}
              handleInputChange={this.handleInputChange}
              handleInputKeyDown={this.handleInputKeyDown}
            />
          </Div>
          <Div
            css={{
              alignSelf: "center",
              justifySelf: "center",
              ":hover": {
                cursor: "pointer"
              }
            }}
          >
            <ChatAudioOrSend
              inputValue={this.state.inputValue}
              handleChatSend={this.postChatMessage}
            />
          </Div>
        </Div>
      );
    }
  }
}
