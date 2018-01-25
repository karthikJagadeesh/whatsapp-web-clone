import React, { Component } from "react";
import { Div } from "glamorous";
import "babel-polyfill";

import { Profile } from "./Profile";
import { ChatBox } from "./ChatBox";
import { ContextBox } from "./ContextBox/";

class App extends Component {
  constructor(context) {
    super(context);
    this.state = {
      profileData: {},
      chatBoxContext: null,
      isContextBoxActive: false,
      isContactInfoContextBoxActive: false
    };
  }

  profileDataUrl = "https://my-json-server.typicode.com/karthikJagadeesh/fake-chat-api/profile";
  friendDataUrl = "https://my-json-server.typicode.com/karthikJagadeesh/fake-chat-api/friends/";

  // profileDataUrl = "http://localhost:7070/profile";
  // friendDataUrl = "http://localhost:7070/friends/";

  wrapperStyleWithContextBox = {
    display: "grid",
    gridTemplateColumns: "3fr 4fr 3fr",
    height: "100%",
    boxShadow: "0px 0px 8px #c4c4c4"
  };
  wrapperStyleWithoutContextBox = {
    ...this.wrapperStyleWithContextBox,
    gridTemplateColumns: "3fr 7fr"
  };
  friendsListStyle = {
    background: "#eee"
  };
  chatBoxStyle = {
    background: "#F7F9FA"
  };
  contextBoxStyle = {};

  friendChatHeaderClick = _ => {
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

  handleListItemClick = ({ currentTarget }) => {
    (async _ => {
      const id = currentTarget.dataset.id;
      const url = this.friendDataUrl + id;
      const chatBoxContext = await this.fetchData(url);
      this.setState({ chatBoxContext });
    })();
  };

  async fetchData(url) {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  }

  componentWillMount() {
    (async _ => {
      const profileData = await this.fetchData(this.profileDataUrl);
      this.setState({ profileData });
    })();
  }

  render() {
    let wrapperStyle = this.wrapperStyleWithoutContextBox;
    if (this.state.isContextBoxActive) {
      wrapperStyle = this.wrapperStyleWithContextBox;
    }
    return (
      <Div css={wrapperStyle}>
        <Div css={this.friendsListStyle}>
          <Profile
            profileData={this.state.profileData}
            handleListItemClick={this.handleListItemClick}
          />
        </Div>
        <Div css={this.chatBoxStyle}>
          <ChatBox
            currentFriend={this.handleListItemClick}
            chatBoxContext={this.state.chatBoxContext}
            handleSearchClick={this.handleSearchClick}
            friendChatHeaderClick={this.friendChatHeaderClick}
          />
        </Div>
        {this.state.isContextBoxActive ? (
          <Div css={this.contextBoxStyle}>
            <ContextBox
              isContactInfoContextBoxActive={
                this.state.isContactInfoContextBoxActive
              }
              handleCancelClick={this.handleCancelClick}
              name={this.state.chatBoxContext.name}
              messagesLog={this.state.chatBoxContext.chatlog}
            />
          </Div>
        ) : null}
      </Div>
    );
  }
}

export { App };
