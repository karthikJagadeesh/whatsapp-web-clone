import React, { Component } from "react";
import { Div, Input } from "glamorous";
import MdInsertEmoticon from "react-icons/lib/md/insert-emoticon";

export class ChatMessageInput extends Component {
  constructor(context) {
    super(context);
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

  render() {
    return (
      <Div css={this.wrapperStyle}>
        <Input
          css={this.inputStyle}
          type="text"
          placeholder="Type a message"
          value={this.props.inputValue}
          onChange={this.props.handleInputChange}
          onKeyDown={this.props.handleInputKeyDown}
        />
      </Div>
    );
  }
}
