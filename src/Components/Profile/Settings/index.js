import React, { Component } from "react";
import { Div, Span, Img } from "glamorous";

import MdArrowBack from "react-icons/lib/md/arrow-back";
import MdNotifications from "react-icons/lib/md/notifications";
import MdNowWallpaper from "react-icons/lib/md/now-wallpaper";
import MdBlock from "react-icons/lib/md/block";
import MdHelp from "react-icons/lib/md/help";

import { Header } from "../ProfileInfo";
import { SingleDeckContainer } from "../../ContextBox/contactInfoResults";

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

export const ProfileSettings = ({
  handlePictureNameClick,
  handleProfileInfoBackClick,
  picturePath,
  name,
  status
}) => {
  const wrapperStyle = {
    height: "100%",
    background: "#fff"
  };
  const singleDeckContainerData = [
    {
      icon: MdNotifications,
      text: "Notifications"
    },
    {
      icon: MdNowWallpaper,
      text: "Chat Wallpaper"
    },
    {
      icon: MdBlock,
      text: "Blocked"
    },
    {
      icon: MdHelp,
      text: "Help"
    }
  ];

  return (
    <Div css={wrapperStyle}>
      <Header
        title={"Settings"}
        handleProfileInfoBackClick={handleProfileInfoBackClick}
      />
      <PictureAndName
        status={status}
        name={name}
        picturePath={picturePath}
        handlePictureNameClick={handlePictureNameClick}
      />
      {singleDeckContainerData.map(data => (
        <SingleDeckContainer
          Icon={data.icon}
          iconStyle={{ size: "22", color: "rgba(0,0,0,0.4)" }}
          text={data.text}
          style={{
            marginTop: "0",
            boxShadow: "0",
            borderBottom: "1px solid rgba(0, 0, 0, 0.06)"
          }}
        />
      ))}
    </Div>
  );
};
