import React, { Component } from "react";
import { Div, Img, Label, Span } from "glamorous";

import FaAngleRight from "react-icons/lib/fa/angle-right";
import MdBlock from "react-icons/lib/md/block";
import MdThumbDown from "react-icons/lib/md/thumb-down";
import MdDelete from "react-icons/lib/md/delete";

import Checkbox from "rc-checkbox";

const Picture = ({ picturePath, name, style }) => {
  const imageStyleWithName = {
    justifySelf: "center",
    alignSelf: "center",
    width: "50%",
    height: "80%",
    borderRadius: "50%",
    ":hover": {
      cursor: "pointer"
    }
  };
  const imageStyleWithoutName = {
    ...imageStyleWithName,
    width: "55%"
  };

  return (
    <Div
      css={{
        display: "grid",
        gridTemplateRows: "1fr",
        ...style
      }}
    >
      <Img
        css={name ? imageStyleWithName : imageStyleWithoutName}
        src={picturePath}
      />
    </Div>
  );
};

const Name = ({ name }) => {
  return (
    <Div
      css={{
        display: "grid",
        gridTemplateRows: "1fr",
        width: "40%"
      }}
    >
      <Label
        css={{
          justifySelf: "center",
          alignSelf: "start",
          fontSize: "1.2em"
        }}
      >
        {name}
      </Label>
    </Div>
  );
};

export const ProfilePictureCard = ({ picturePath, name, style = {} }) => {
  const wrapperStyleWithName = {
    height: "320px",
    textAlign: "center",
    background: "#FFF",
    display: "grid",
    gridTemplateRows: "8fr 2fr",
    boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.1)"
  };
  const wrapperStyleWithoutName = {
    ...wrapperStyleWithName,
    gridTemplateRows: "1fr",
    height: "260px"
  };

  return (
    <Div css={name ? wrapperStyleWithName : wrapperStyleWithoutName}>
      <Picture picturePath={picturePath} name={name} style={style} />
      {name ? <Name name={name} /> : null}
    </Div>
  );
};

const Title = _ => {
  return (
    <Div
      css={{
        display: "grid",
        width: "100%",
        gridTemplateColumns: "8fr 2fr",
        ":hover": {
          cursor: "pointer"
        }
      }}
    >
      <Div
        css={{
          alignSelf: "center",
          justifySelf: "center",
          width: "80%",
          color: "#128C7E",
          fontSize: "0.9em",
          fontWeight: "100"
        }}
      >
        <Span>Media, Links and Docs</Span>
      </Div>
      <Div
        css={{
          alignSelf: "center",
          justifySelf: "center"
        }}
      >
        <FaAngleRight size={25} color="#666" />
      </Div>
    </Div>
  );
};

const MediaLinksDocs = _ => {
  return (
    <Div
      css={{
        height: "180px",
        background: "#FFF",
        display: "grid",
        gridTemplateRows: "3fr 7fr",
        marginTop: "1em",
        boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.1)"
      }}
    >
      <Title />
      {/* <MediaLinks /> */}
    </Div>
  );
};

const Mute = _ => {
  return (
    <Div
      css={{
        display: "grid",
        gridTemplateColumns: "8fr 2fr",
        width: "100%",
        ":hover": {
          cursor: "pointer"
        },
        borderBottom: "1px solid rgba(0, 0, 0, 0.06)"
      }}
    >
      <Span css={{ alignSelf: "center", width: "80%", justifySelf: "center" }}>
        Mute
      </Span>
      <Checkbox style={{ alignSelf: "center", justifySelf: "center" }} />
    </Div>
  );
};

const Starred = _ => {
  return (
    <Div
      css={{
        display: "grid",
        gridTemplateColumns: "8fr 2fr",
        width: "100%",
        ":hover": {
          cursor: "pointer"
        }
      }}
    >
      <Span css={{ alignSelf: "center", width: "80%", justifySelf: "center" }}>
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

const MuteAndStarred = _ => {
  return (
    <Div
      css={{
        height: "120px",
        background: "#FFF",
        display: "grid",
        gridTemplateRows: "5fr 5fr",
        marginTop: "1em",
        boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.1)"
      }}
    >
      <Mute />
      <Starred />
    </Div>
  );
};

const AboutTitle = _ => {
  return (
    <Div
      css={{
        display: "grid",
        gridTemplateColumns: "1fr",
        width: "100%",
        fontSize: "0.9em",
        color: "#128C7E",
        fontSize: "0.9em",
        fontWeight: "100"
      }}
    >
      <Span css={{ alignSelf: "center", width: "80%", justifySelf: "center" }}>
        About and phone number
      </Span>
    </Div>
  );
};

const Status = ({ status: status = "Available" }) => {
  return (
    <Div
      css={{
        display: "grid",
        gridTemplateColumns: "1fr",
        width: "100%",
        borderBottom: "1px solid rgba(0, 0, 0, 0.06)"
      }}
    >
      <Span css={{ alignSelf: "center", width: "80%", justifySelf: "center" }}>
        {status}
      </Span>
    </Div>
  );
};

const PhoneNumber = ({ phoneNumber: phoneNumber = "99999 10101" }) => {
  return (
    <Div
      css={{
        display: "grid",
        gridTemplateColumns: "1fr",
        width: "100%"
      }}
    >
      <Span css={{ alignSelf: "center", width: "80%", justifySelf: "center" }}>
        {phoneNumber}
      </Span>
    </Div>
  );
};

const AboutAndPhoneNumber = _ => {
  return (
    <Div
      css={{
        height: "160px",
        background: "#FFF",
        display: "grid",
        gridTemplateRows: "3fr 3.5fr 3.5fr",
        marginTop: "1em",
        boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.1)"
      }}
    >
      <AboutTitle />
      <Status />
      <PhoneNumber />
    </Div>
  );
};

export const SingleDeckContainer = props => {
  const { Icon, IconStyle, TextStyle, Text, OnClick } = props;

  return (
    <Div
      css={{
        height: "60px",
        background: "#FFF",
        display: "grid",
        gridTemplateColumns: "2fr 8fr",
        marginTop: "1em",
        boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.1)",
        ":hover": {
          cursor: "pointer",
          background: "#F4F5F5"
        },
        ...props.Style
      }}
      onClick={OnClick}
    >
      <Div
        css={{
          alignSelf: "center",
          justifySelf: "center"
        }}
      >
        <Icon {...IconStyle} />
      </Div>
      <Div
        css={{
          alignSelf: "center"
        }}
      >
        <Span css={TextStyle}>{Text}</Span>
      </Div>
    </Div>
  );
};

export const ContactInfoResults = ({ picturePath, name }) => {
  return (
    <Div
      css={{
        height: "100%",
        overflowY: "scroll",
        background: "#F7F7F7"
      }}
    >
      <Div>
        <ProfilePictureCard picturePath={picturePath} name={name} />
        <MediaLinksDocs />
        <MuteAndStarred />
        <AboutAndPhoneNumber />
        <SingleDeckContainer
          Icon={MdBlock}
          IconStyle={{ size: "25", color: "#666" }}
          Text={"Block Contact"}
        />
        <SingleDeckContainer
          Icon={MdThumbDown}
          IconStyle={{ size: "25", color: "#DF3333" }}
          Text={"Report spam"}
        />
        <SingleDeckContainer
          Style={{ marginBottom: "2em" }}
          Icon={MdDelete}
          IconStyle={{ size: "25", color: "#DF3333" }}
          Text={"Delete chat"}
        />
      </Div>
    </Div>
  );
};
