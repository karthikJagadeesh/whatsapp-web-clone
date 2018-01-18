import React, { Component } from "react";
import { Div } from "glamorous";

import { Profile } from "./Profile/profile";
import { ChatBox } from "./ChatBox/chatbox";

class App extends Component {
  constructor(context) {
    super(context);
    this.state = {
      profileData: {}
    };
  }

  profileDataUrl = `
  https://my-json-server.typicode.com/karthikJagadeesh/fake-chat-api/profile
  `;

  // profileDataUrl = `
  // http://localhost:7070/profile
  // `;

  wrapperStyle = {
    display: "grid",
    gridTemplateColumns: "30% 70%",
    height: "100%",
    boxShadow: "0px 0px 8px #c4c4c4"
  };

  friendsListStyle = {
    background: "#eee"
  };

  chatBoxStyle = {
    background: "#E5DDD5"
  };

  async fetchProfileData() {
    const response = await fetch(this.profileDataUrl);
    const json = await response.json();
    return json;
  }

  componentWillMount() {
    (async _ => {
      const profileData = await this.fetchProfileData();
      this.setState({ profileData });
    })();
  }

  render() {
    return (
      <Div css={this.wrapperStyle}>
        <Div css={this.friendsListStyle}>
          <Profile profileData={this.state.profileData} />
        </Div>
        <Div css={this.chatBoxStyle}>
          <ChatBox />
        </Div>
      </Div>
    );
  }
}

export { App };
