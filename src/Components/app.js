import "babel-polyfill";
import React, { Component, Fragment } from "react";
import { Div } from "glamorous";
import { Broadcast } from "react-broadcast";

import Profile from "./Profile";
import ChatBox from "./ChatBox";
import ContextBox from "./ContextBox/";
import ModalDialog from "./ModalDialog";
import { profileDataUrl, friendDataUrl, fetchData } from "../network";

export default class App extends Component {
  state = {
    profileData: {},
    chatBoxContext: null,
    isContextBoxActive: false,
    isContactInfoContextBoxActive: false,
    currentHovered: {
      id: 100,
      color: "#E5DDD5"
    },
    currentSelected: {
      id: 0,
      color: "#E5DDD5"
    },
    modalDialog: {
      show: false,
      view: ""
    }
  };

  wrapperStyleWithContextBox = {
    opacity: "1",
    display: "grid",
    gridTemplateColumns: "3fr 4fr 3fr",
    height: "100%",
    boxShadow: "0px 0px 8px #c4c4c4"
  };
  wrapperStyleWithoutContextBox = {
    ...this.wrapperStyleWithContextBox,
    gridTemplateColumns: "3fr 7fr"
  };

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
  handleColorBoxClick = ({ currentTarget }) => {
    this.setState({
      currentSelected: {
        id: currentTarget.dataset.id,
        color: currentTarget.dataset.color
      }
    });
  };
  handleColorBoxHover = ({ currentTarget }) => {
    this.setState({
      currentHovered: {
        color: currentTarget.dataset.color,
        id: currentTarget.dataset.id
      }
    });
  };
  handleColorBoxHoverOut = _ => {
    this.setState(prevState => {
      return {
        currentSelected: {
          color: prevState.currentSelected.color,
          id: prevState.currentSelected.id
        },
        currentHovered: {
          id: 100,
          color: prevState.currentSelected.color
        }
      };
    });
  };
  handleDeleteChatClick = _ => {
    this.setState({ modalDialog: { show: true, view: "deleteChat" } });
  };

  handleListItemClick = ({ currentTarget }) => {
    (async _ => {
      const id = currentTarget.dataset.id;
      const url = friendDataUrl + id;
      const chatBoxContext = await fetchData(url);
      this.setState({ chatBoxContext, isContextBoxActive: false });
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
      chatBoxContext,
      isContextBoxActive,
      isContactInfoContextBoxActive,
      currentHovered,
      modalDialog
    } = this.state;
    const wrapperStyle = isContextBoxActive
      ? this.wrapperStyleWithContextBox
      : this.wrapperStyleWithoutContextBox;

    return (
      <Fragment>
        <Div
          css={
            modalDialog.show
              ? { ...wrapperStyle, opacity: "0.2" }
              : wrapperStyle
          }
        >
          <Div css={{ background: "#eee" }}>
            <Broadcast channel="profile" value={this.state}>
              <Profile
                handleListItemClick={this.handleListItemClick}
                selectedFriend={chatBoxContext ? chatBoxContext.id : "0"}
                handleColorBoxClick={this.handleColorBoxClick}
                handleColorBoxHover={this.handleColorBoxHover}
                handleColorBoxHoverOut={this.handleColorBoxHoverOut}
              />
            </Broadcast>
          </Div>
          <Div css={{ background: "#F7F9FA" }}>
            <ChatBox
              currentFriend={this.handleListItemClick}
              chatBoxContext={chatBoxContext}
              handleSearchClick={this.handleSearchClick}
              handleDeleteChatClick={this.handleDeleteChatClick}
              friendChatHeaderClick={this.friendChatHeaderClick}
              backgroundColor={currentHovered.color}
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
        {modalDialog.show ? (
          <Div
            css={{
              top: "0",
              left: "0",
              display: "grid",
              gridTemplateRows: "1fr",
              position: "absolute",
              zIndex: "10",
              height: "100vh",
              width: "100vw"
            }}
          >
            <ModalDialog type={modalDialog.view} />
          </Div>
        ) : null}
      </Fragment>
    );
  }
}
