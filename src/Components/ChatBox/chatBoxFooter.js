import React, { Component } from "react";
import { Div } from "glamorous";

import { SmilieBoard } from "./smilieBoard";
import { ChatMessageInput } from "./chatMessageInput";
import { ChatAudioOrSend } from "./chatAudioOrSend";

class ChatBoxFooter extends Component {
  constructor(context) {
    super(context);
    this.state = {
      inputValue: ""
    };
  }

  greenBarWrapperStyle = {
    height: "100%",
    width: "100%",
    display: "grid"
  };
  greenBarStyle = {
    height: "10%",
    background: "#58e870",
    alignSelf: "end"
  };

  wrapperStyle = {
    background: "#F5F1EE",
    padding: "0px 15px",
    height: "100%",
    display: "grid",
    gridTemplateColumns: "5% 90% 5%"
  };

  smilieBoardWrapperStyle = {
    alignSelf: "center",
    justifySelf: "center",
    ":hover": {
      cursor: "pointer"
    }
  };
  chatMessageWrapperStyle = {
    alignSelf: "center",
    justifySelf: "center",
    width: "100%"
  };
  chatAudioMessageWrapperStyle = {
    alignSelf: "center",
    justifySelf: "center",
    ":hover": {
      cursor: "pointer"
    }
  };

  handleInputChange = ({ target }) => {
    this.setState({ inputValue: target.value });
  };

  postChatMessage = _ => {
    const { handleChatSend } = this.props;
    handleChatSend({
      text: this.state.inputValue,
      timestamp: new Date(),
      side: "right",
      message_id: Math.round(Math.random() * Math.pow(10, 10)) // dummy placeholder
    });
    this.setState({ inputValue: "" });
  };

  handleInputKeyDown = event => {
    const enterKeyCode = 13;
    if (event.keyCode === enterKeyCode) {
      if (this.state.inputValue) {
        this.postChatMessage();
      }
    }
  };

  render() {
    if (this.props.isInitialScreen) {
      return (
        <Div css={this.greenBarWrapperStyle}>
          <Div css={this.greenBarStyle} />
        </Div>
      );
    } else {
      return (
        <Div css={this.wrapperStyle}>
          <Div css={this.smilieBoardWrapperStyle}>
            <SmilieBoard />
          </Div>
          <Div css={this.chatMessageWrapperStyle}>
            <ChatMessageInput
              inputValue={this.state.inputValue}
              handleInputChange={this.handleInputChange}
              handleInputKeyDown={this.handleInputKeyDown}
            />
          </Div>
          <Div css={this.chatAudioMessageWrapperStyle}>
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

export { ChatBoxFooter };
