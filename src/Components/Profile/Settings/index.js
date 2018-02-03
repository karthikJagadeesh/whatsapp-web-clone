import React, { Component } from "react";
import { Div, Span, Img } from "glamorous";

import MdNotifications from "react-icons/lib/md/notifications";
import MdNowWallpaper from "react-icons/lib/md/now-wallpaper";
import MdBlock from "react-icons/lib/md/block";
import MdHelp from "react-icons/lib/md/help";

import { Header } from "../ProfileInfo";
import { SingleDeckContainer } from "../../ContextBox/contactInfoResults";
import { ChatWallpaper } from "./chatWallpaper";

const PictureAndName = ({
  status,
  picturePath,
  name,
  handlePictureNameClick
}) => {
  const wrapperStyle = {
    height: "16%",
    display: "grid",
    gridTemplateColumns: "3fr 7fr",
    ":hover": {
      background: "#F4F5F5",
      cursor: "pointer"
    }
  };
  const wrapperPictureStyle = {
    display: "grid",
    height: "100%",
    gridTemplateColumns: "1fr",
    justifySelf: "center",
    alignSelf: "center"
  };
  const pictureStyle = {
    justifySelf: "center",
    alignSelf: "center",
    height: "60%",
    width: "60%",
    borderRadius: "50%"
  };
  const wrapperNameStatusStyle = {
    display: "grid",
    gridTemplateRows: "5fr 5fr",
    gridGap: "0.4em"
  };

  return (
    <Div css={wrapperStyle} onClick={handlePictureNameClick}>
      <Div css={wrapperPictureStyle}>
        <Img css={pictureStyle} src={picturePath} alt="" />
      </Div>
      <Div css={wrapperNameStatusStyle}>
        <Span css={{ alignSelf: "end", fontSize: "1.2em" }}>{name}</Span>
        <Span
          css={{
            alignSelf: "start",
            color: "rgba(0,0,0,0.6)"
          }}
        >
          {status}
        </Span>
      </Div>
    </Div>
  );
};

export default class ProfileSettings extends Component {
  state = {
    currentView: "settings"
  };

  wrapperStyle = {
    height: "100%",
    background: "#fff"
  };

  handleChatWallpaperClick = _ => {
    this.setState({ currentView: "chatWallpaper" });
  };
  handleProfileInfoBackClick = _ => {
    this.setState({ currentView: "settings" });
  };

  singleDeckContainerData = [
    {
      icon: MdNotifications,
      text: "Notifications",
      onClick: _ => {}
    },
    {
      icon: MdNowWallpaper,
      text: "Chat Wallpaper",
      onClick: this.handleChatWallpaperClick
    },
    {
      icon: MdBlock,
      text: "Blocked",
      onClick: _ => {}
    },
    {
      icon: MdHelp,
      text: "Help",
      onClick: _ => {}
    }
  ];

  getCurrentProfileView = _ => {
    switch (this.state.currentView) {
      case "settings":
        return (
          <Div css={this.wrapperStyle}>
            <Header
              title={"Settings"}
              handleProfileInfoBackClick={this.props.handleProfileInfoBackClick}
            />
            <PictureAndName
              status={this.props.status}
              name={this.props.name}
              picturePath={this.props.picturePath}
              handlePictureNameClick={this.props.handlePictureNameClick}
            />
            {this.singleDeckContainerData.map((data, index) => (
              <SingleDeckContainer
                key={index}
                OnClick={data.onClick}
                Icon={data.icon}
                IconStyle={{ size: "22", color: "rgba(0,0,0,0.4)" }}
                Text={data.text}
                Style={{
                  marginTop: "0",
                  boxShadow: "0",
                  borderBottom: "1px solid rgba(0, 0, 0, 0.06)"
                }}
              />
            ))}
          </Div>
        );

      case "chatWallpaper":
        return (
          <ChatWallpaper
            currentHovered={this.props.currentHovered}
            currentSelected={this.props.currentSelected}
            handleColorBoxHover={this.props.handleColorBoxHover}
            handleColorBoxClick={this.props.handleColorBoxClick}
            handleColorBoxHoverOut={this.props.handleColorBoxHoverOut}
            handleProfileInfoBackClick={this.handleProfileInfoBackClick}
          />
        );
    }
  };

  render() {
    return this.getCurrentProfileView();
  }
}
