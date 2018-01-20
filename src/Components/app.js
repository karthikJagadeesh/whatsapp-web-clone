import React, { Component } from "react";
import { Div } from "glamorous";

import { Profile } from "./Profile/profile";
import { ChatBox } from "./ChatBox/chatbox";

class App extends Component {
  constructor(context) {
    super(context);
    this.state = {
      profileData: {},
      chatBoxContext: null
    };
  }

  profileDataUrl = "https://my-json-server.typicode.com/karthikJagadeesh/fake-chat-api/profile";
  friendDataUrl = "https://my-json-server.typicode.com/karthikJagadeesh/fake-chat-api/friends/";

  // profileDataUrl = `
  // http://localhost:7070/profile
  // `;

  wrapperStyle = {
    display: "grid",
    gridTemplateColumns: "3fr 7fr",
    height: "100%",
    boxShadow: "0px 0px 8px #c4c4c4"
  };

  friendsListStyle = {
    background: "#eee"
  };

  chatBoxStyle = {
    background: "#F7F9FA"
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
    return (
      <Div css={this.wrapperStyle}>
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
          />
        </Div>
      </Div>
    );
  }
}

export { App };
