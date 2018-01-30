import React, { Component } from "react";
import { Div, Img, Label, Span } from "glamorous";
import FaAngleRight from "react-icons/lib/fa/angle-right";
import MdBlock from "react-icons/lib/md/block";
import MdThumbDown from "react-icons/lib/md/thumb-down";
import MdDelete from "react-icons/lib/md/delete";
import Checkbox from "rc-checkbox";

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

  const Picture = ({ picturePath }) => {
    const wrapperStyle = {
      display: "grid",
      gridTemplateRows: "1fr",
      ...style
    };
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
    }

    return (
      <Div css={wrapperStyle}>
        <Img
          css={name ? imageStyleWithName : imageStyleWithoutName}
          src={picturePath}
        />
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
    <Div css={name ? wrapperStyleWithName : wrapperStyleWithoutName}>
      <Picture picturePath={picturePath} />
      {name ? <Name name={name} /> : null}
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
      gridTemplateColumns: "8fr 2fr",
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
      alignSelf: "center",
      justifySelf: "center"
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

const AboutAndPhoneNumber = _ => {
  const wrapperStyle = {
    height: "160px",
    background: "#FFF",
    display: "grid",
    gridTemplateRows: "3fr 3.5fr 3.5fr",
    marginTop: "1em",
    boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.1)"
  };

  const Title = _ => {
    const wrapperStyle = {
      display: "grid",
      gridTemplateColumns: "1fr",
      width: "100%",
      fontSize: "0.9em",
      color: "#128C7E",
      fontSize: "0.9em",
      fontWeight: "100"
    };
    return (
      <Div css={wrapperStyle}>
        <Span
          css={{ alignSelf: "center", width: "80%", justifySelf: "center" }}
        >
          About and phone number
        </Span>
      </Div>
    );
  };

  const Status = ({ status: status = "Available" }) => {
    const wrapperStyle = {
      display: "grid",
      gridTemplateColumns: "1fr",
      width: "100%",
      borderBottom: "1px solid rgba(0, 0, 0, 0.06)"
    };
    return (
      <Div css={wrapperStyle}>
        <Span
          css={{ alignSelf: "center", width: "80%", justifySelf: "center" }}
        >
          {status}
        </Span>
      </Div>
    );
  };

  const PhoneNumber = ({ phoneNumber: phoneNumber = "99999 10101" }) => {
    const wrapperStyle = {
      display: "grid",
      gridTemplateColumns: "1fr",
      width: "100%"
    };
    return (
      <Div css={wrapperStyle}>
        <Span
          css={{ alignSelf: "center", width: "80%", justifySelf: "center" }}
        >
          {phoneNumber}
        </Span>
      </Div>
    );
  };

  return (
    <Div css={wrapperStyle}>
      <Title />
      <Status />
      <PhoneNumber />
    </Div>
  );
};

const GroupsInCommon = _ => {
  const wrapperStyle = {};
  return <Div css={wrapperStyle} />;
};

const SingleDeckContainer = props => {
  const wrapperStyle = {
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
    ...props.style
  };
  const wrapperIconStyle = {
    alignSelf: "center",
    justifySelf: "center"
  };
  const wrapperTextStyle = {
    alignSelf: "center"
  };
  const { Icon } = props;

  return (
    <Div css={wrapperStyle}>
      <Div css={wrapperIconStyle}>
        <Icon {...props.iconStyle} />
      </Div>
      <Div css={wrapperTextStyle}>
        <Span css={props.textStyle}>{props.text}</Span>
      </Div>
    </Div>
  );
};

export const ContactInfoResults = ({ picturePath, name }) => {
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
        <AboutAndPhoneNumber />
        <SingleDeckContainer
          Icon={MdBlock}
          iconStyle={{ size: "25", color: "#666" }}
          text={"Block Contact"}
        />
        <SingleDeckContainer
          Icon={MdThumbDown}
          iconStyle={{ size: "25", color: "#DF3333" }}
          text={"Report spam"}
        />
        <SingleDeckContainer
          style={{ marginBottom: "2em" }}
          Icon={MdDelete}
          iconStyle={{ size: "25", color: "#DF3333" }}
          text={"Delete chat"}
        />
      </Div>
    </Div>
  );
};
