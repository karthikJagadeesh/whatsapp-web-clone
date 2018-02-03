import React, { Component } from "react";
import { Div, Span } from "glamorous";
import MdArrowBack from "react-icons/lib/md/arrow-back";
import MdEdit from "react-icons/lib/md/edit";

import { ProfilePictureCard } from "../../ContextBox/contactInfoResults";

export const Header = ({
  handleProfileInfoBackClick,
  title,
  StarredMessagesMenu = ""
}) => {
  const Title = ({ handleProfileInfoBackClick, title }) => {
    const wrapperStyle = {
      color: "white",
      fontSize: "1.1em",
      fontWeight: "600",
      height: "40%",
      alignSelf: "end",
      display: "grid",
      gridTemplateColumns: "2fr 8fr"
    };
    const wrapperIconStyle = {
      justifySelf: "center",
      alignSelf: "center",
      ":hover": {
        cursor: "pointer"
      }
    };

    return (
      <Div css={wrapperStyle}>
        <Div css={wrapperIconStyle} onClick={handleProfileInfoBackClick}>
          <MdArrowBack size={25} color="white" />
        </Div>
        <Span alignSelf="center">{title}</Span>
      </Div>
    );
  };

  const wrapperStyle = {
    background: "#00bfa5",
    height: "16%",
    display: "grid",
    gridTemplateColumns: "8fr 2fr"
  };
  const wrapperTitleStyle = {
    alignSelf: "center",
    display: "grid",
    height: "70%"
  };
  const wrapperStarredMessagesMenuStyle = {
    alignSelf: "end",
    display: "grid",
    height: "40%"
  };

  return (
    <Div css={wrapperStyle}>
      <Div css={wrapperTitleStyle}>
        <Title
          handleProfileInfoBackClick={handleProfileInfoBackClick}
          title={title}
        />
      </Div>
      <Div css={wrapperStarredMessagesMenuStyle}>
        {StarredMessagesMenu ? <StarredMessagesMenu /> : null}
      </Div>
    </Div>
  );
};

const SingleDeckContainer = ({ title, info }) => {
  const wrapperStyle = {
    height: "15%",
    background: "#fff",
    display: "grid",
    gridTemplateRows: "5fr 5fr",
    boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.1)"
  };
  const wrapperTitle = {
    alignSelf: "center",
    justifySelf: "center",
    width: "80%",
    color: "#128c7e",
    fontWeight: "100"
  };
  const wrapperInfo = {
    alignSelf: "center",
    justifySelf: "center",
    width: "80%",
    color: "#494949",
    display: "grid",
    gridTemplateColumns: "9fr 1fr"
  };

  return (
    <Div css={wrapperStyle}>
      <Div css={wrapperTitle}>{title}</Div>
      <Div css={wrapperInfo}>
        <Span>{info}</Span>
        <Span css={{ ":hover": { cursor: "pointer" } }}>
          <MdEdit size={25} color="#949a9d" />
        </Span>
      </Div>
    </Div>
  );
};

const Billboard = _ => {
  const wrapperStyle = {
    height: "14%",
    display: "grid",
    gridTemplateColumns: "1fr",
    color: "#929fa6"
  };
  return (
    <Div css={wrapperStyle}>
      <Span css={{ alignSelf: "center", justifySelf: "center", width: "80%" }}>
        This is not your username or pin. This name will be visible to your
        WhatsApp contacts
      </Span>
    </Div>
  );
};

export const ProfileInfo = ({
  handleProfileInfoBackClick,
  picturePath,
  name,
  status
}) => {
  const wrapperStyle = {
    height: "100%",
    overflowY: "auto"
  };

  return (
    <Div css={wrapperStyle}>
      <Header
        handleProfileInfoBackClick={handleProfileInfoBackClick}
        title={"Profile"}
      />
      <ProfilePictureCard
        style={{ background: "#f7f7f7" }}
        picturePath={picturePath}
      />
      <SingleDeckContainer title={"Your Name"} info={name} />
      <Billboard />
      <SingleDeckContainer title={"About"} info={status} />
    </Div>
  );
};
