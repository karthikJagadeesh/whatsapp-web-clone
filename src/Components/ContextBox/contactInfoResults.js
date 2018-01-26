import React, { Component } from "react";
import { Div, Img, Label, Span } from "glamorous";
import FaAngleRight from "react-icons/lib/fa/angle-right";
import Checkbox from "rc-checkbox";

const ProfilePictureCard = ({ picturePath, name }) => {
  const wrapperStyle = {
    height: "320px",
    textAlign: "center",
    background: "#FFF",
    display: "grid",
    gridTemplateRows: "8fr 2fr",
    boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.1)"
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
      borderRadius: "50%",
      ":hover": {
        cursor: "pointer"
      }
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

const MediaLinksDocs = _ => {
  const wrapperStyle = {
    height: "180px",
    background: "#FFF",
    display: "grid",
    gridTemplateRows: "3fr 7fr",
    marginTop: "1em",
    boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.1)"
  };

  const Title = _ => {
    const wrapperStyle = {
      display: "grid",
      width: "100%",
      gridTemplateColumns: "9fr 1fr",
      ":hover": {
        cursor: "pointer"
      }
    };
    const wrapperLabelStyle = {
      alignSelf: "center",
      justifySelf: "center",
      width: "80%",
      color: "#128C7E",
      fontSize: "0.9em",
      fontWeight: "100"
    };
    const wrapperIconStyle = {
      alignSelf: "center"
    };

    return (
      <Div css={wrapperStyle}>
        <Div css={wrapperLabelStyle}>
          <Span>Media, Links and Docs</Span>
        </Div>
        <Div css={wrapperIconStyle}>
          <FaAngleRight size={25} color="#666" />
        </Div>
      </Div>
    );
  };

  return (
    <Div css={wrapperStyle}>
      <Title />
      {/* <MediaLinks /> */}
    </Div>
  );
};

const MuteAndStarred = _ => {
  const wrapperStyle = {
    height: "120px",
    background: "#FFF",
    display: "grid",
    gridTemplateRows: "5fr 5fr",
    marginTop: "1em",
    boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.1)"
  };

  const Mute = _ => {
    const wrapperStyle = {
      display: "grid",
      gridTemplateColumns: "8fr 2fr",
      width: "100%",
      ":hover": {
        cursor: "pointer"
      },
      borderBottom: "1px solid rgba(0, 0, 0, 0.06)"
    };
    return (
      <Div css={wrapperStyle}>
        <Span
          css={{ alignSelf: "center", width: "80%", justifySelf: "center" }}
        >
          Mute
        </Span>
        <Checkbox style={{ alignSelf: "center", justifySelf: "center" }} />
      </Div>
    );
  };

  const Starred = _ => {
    const wrapperStyle = {
      display: "grid",
      gridTemplateColumns: "8fr 2fr",
      width: "100%",
      ":hover": {
        cursor: "pointer"
      }
    };
    return (
      <Div css={wrapperStyle}>
        <Span
          css={{ alignSelf: "center", width: "80%", justifySelf: "center" }}
        >
          Starred Messages
        </Span>
        <FaAngleRight
          style={{ alignSelf: "center", justifySelf: "center" }}
          size={25}
          color="#666"
        />
      </Div>
    );
  };

  return (
    <Div css={wrapperStyle}>
      <Mute />
      <Starred />
    </Div>
  );
};

const ContactInfoResults = ({ picturePath, name }) => {
  const wrapperStyle = {
    height: "100%",
    overflowY: "scroll",
    background: "#F7F7F7"
  };
  const wrapperProfilePictureCardStyle = {};
  return (
    <Div css={wrapperStyle}>
      <Div css={wrapperProfilePictureCardStyle}>
        <ProfilePictureCard picturePath={picturePath} name={name} />
        <MediaLinksDocs />
        <MuteAndStarred />
      </Div>
    </Div>
  );
};

export { ContactInfoResults };
