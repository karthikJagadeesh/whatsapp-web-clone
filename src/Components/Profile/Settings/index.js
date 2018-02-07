import React, { Component } from "react";
import { Div, Span, Img } from "glamorous";
import { Subscriber } from "react-broadcast";

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
  return (
    <Div
      css={{
        height: "16%",
        display: "grid",
        gridTemplateColumns: "3fr 7fr",
        ":hover": {
          background: "#F4F5F5",
          cursor: "pointer"
        }
      }}
      onClick={handlePictureNameClick}
    >
      <Div
        css={{
          display: "grid",
          height: "100%",
          gridTemplateColumns: "1fr",
          justifySelf: "center",
          alignSelf: "center"
        }}
      >
        <Img
          css={{
            justifySelf: "center",
            alignSelf: "center",
            height: "60%",
            width: "60%",
            borderRadius: "50%"
          }}
          src={picturePath}
          alt=""
        />
      </Div>
      <Div
        css={{
          display: "grid",
          gridTemplateRows: "5fr 5fr",
          gridGap: "0.4em"
        }}
      >
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

  render() {
    switch (this.state.currentView) {
      case "settings":
        const {
          handlePictureNameClick,
          handleProfileInfoBackClick
        } = this.props;

        return (
          <Div
            css={{
              height: "100%",
              background: "#fff"
            }}
          >
            <Header
              title={"Settings"}
              handleProfileInfoBackClick={handleProfileInfoBackClick}
            />
            <Subscriber channel="profile">
              {({ profileData }) => (
                <PictureAndName
                  status={profileData.status}
                  name={profileData.name}
                  picturePath={profileData.picture}
                  handlePictureNameClick={handlePictureNameClick}
                />
              )}
            </Subscriber>
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
        const {
          currentHovered,
          currentSelected,
          handleColorBoxHover,
          handleColorBoxClick,
          handleColorBoxHoverOut
        } = this.props;

        return (
          <ChatWallpaper
            currentHovered={currentHovered}
            currentSelected={currentSelected}
            handleColorBoxHover={handleColorBoxHover}
            handleColorBoxClick={handleColorBoxClick}
            handleColorBoxHoverOut={handleColorBoxHoverOut}
            handleProfileInfoBackClick={this.handleProfileInfoBackClick}
          />
        );
    }
  }
}
