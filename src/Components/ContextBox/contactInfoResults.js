import React, { Component } from "react";
import { Div, Img, Label } from "glamorous";
// import MdInsertEmoticon from "react-icons/lib/md/insert-emoticon";

const ProfilePictureCard = ({ picturePath, name }) => {
  const wrapperStyle = {
    height: "320px",
    textAlign: "center",
    background: "#FFF",
    display: "grid",
    gridTemplateRows: "8fr 2fr"
  };

  const Picture = ({ picturePath }) => {
    const wrapperStyle = {
      display: "grid",
      gridTemplateRows: "1fr"
    };
    const imageStyle = {
      justifySelf: "center",
      alignSelf: "center",
      width: "50%",
      height: "80%",
      borderRadius: "50%"
    };
    return (
      <Div css={wrapperStyle}>
        <Img css={imageStyle} src={picturePath} />
      </Div>
    );
  };

  const Name = ({ name }) => {
    const wrapperStyle = {
      display: "grid",
      gridTemplateRows: "1fr",
      width: "40%"
    };
    const nameStyle = {
      justifySelf: "center",
      alignSelf: "start",
      fontSize: "1.2em"
    };
    return (
      <Div css={wrapperStyle}>
        <Label css={nameStyle}>{name}</Label>
      </Div>
    );
  };

  return (
    <Div css={wrapperStyle}>
      <Picture picturePath={picturePath} />
      <Name name={name} />
    </Div>
  );
};

const ContactInfoResults = ({ picturePath, name }) => {
  const wrapperStyle = {
    height: "100%",
    overflowY: "scroll",
    background: "teal"
  };
  const wrapperProfilePictureCardStyle = {};
  return (
    <Div css={wrapperStyle}>
      <Div css={wrapperProfilePictureCardStyle}>
        <ProfilePictureCard picturePath={picturePath} name={name} />
      </Div>
    </Div>
  );
};

export { ContactInfoResults };
