import React, { Component } from "react";
import { Div } from "glamorous";
import "babel-polyfill";

import { Profile } from "./Profile";
import { ChatBox } from "./ChatBox";
import { ContextBox } from "./ContextBox/";
import { profileDataUrl, friendDataUrl, fetchData } from "../network";

export class App extends Component {
  constructor(context) {
    super(context);
    this.state = {
      profileData: {},
      chatBoxContext: null,
      isContextBoxActive: false,
      isContactInfoContextBoxActive: false
    };
  }

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
      const url = friendDataUrl + id;
      const chatBoxContext = await fetchData(url);
      this.setState({ chatBoxContext });
    })();
  };

  componentDidMount() {
    (async _ => {
      const profileData = await fetchData(profileDataUrl);
      this.setState({ profileData });
    })();
  }

  render() {
    const {
      profileData,
      chatBoxContext,
      isContextBoxActive,
      isContactInfoContextBoxActive
    } = this.state;
    let wrapperStyle = this.wrapperStyleWithoutContextBox;
    if (isContextBoxActive) {
      wrapperStyle = this.wrapperStyleWithContextBox;
    }

    return (
      <Div css={wrapperStyle}>
        <Div css={this.friendsListStyle}>
          <Profile
            profileData={profileData}
            handleListItemClick={this.handleListItemClick}
          />
        </Div>
        <Div css={this.chatBoxStyle}>
          <ChatBox
            currentFriend={this.handleListItemClick}
            chatBoxContext={chatBoxContext}
            handleSearchClick={this.handleSearchClick}
            friendChatHeaderClick={this.friendChatHeaderClick}
          />
        </Div>
        {isContextBoxActive ? (
          <Div css={this.contextBoxStyle}>
            <ContextBox
              isContactInfoContextBoxActive={isContactInfoContextBoxActive}
              handleCancelClick={this.handleCancelClick}
              name={chatBoxContext.name}
              messagesLog={chatBoxContext.chatlog}
              picturePath={chatBoxContext.picture}
            />
          </Div>
        ) : null}
      </Div>
    );
  }
}
