import React, { Component } from "react";
import { Div, Input } from "glamorous";
import MdInsertEmoticon from "react-icons/lib/md/insert-emoticon";

class ChatMessageInput extends Component {
  constructor(context) {
    super(context);
    this.state = {
      value: ""
    };
  }

  inputStyle = {
    width: "95%",
    padding: "4px 10px",
    border: "1px solid rgba(0, 0, 0, 0.05)",
    height: "30px",
    color: "#7f7f7f",
    fontSize: "0.9em",
    fontWeight: "500",
    letterSpacing: "0.5px",
    ":focus": {
      color: "#545454"
    }
  };

  wrapperStyle = {
    textAlign: "center"
  };

  handleInputChange = ({ target }) => {
    this.setState({ value: target.value });
  };

  handleInputKeyDown = event => {
    const enterKeyCode = 13;
    const { handleChatSend } = this.props;
    if (event.keyCode === enterKeyCode) {
      handleChatSend({
        text: this.state.value,
        timestamp: new Date(),
        side: "right"
      });
      this.setState({ value: "" });
    }
  };

  render() {
    return (
      <Div css={this.wrapperStyle}>
        <Input
          css={this.inputStyle}
          type="text"
          placeholder="Type a message"
          value={this.state.value}
          onChange={this.handleInputChange}
          onKeyDown={this.handleInputKeyDown}
        />
      </Div>
    );
  }
}

export { ChatMessageInput };
