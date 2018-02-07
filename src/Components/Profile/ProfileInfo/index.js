import React, { Component } from "react";
import { Div, Span } from "glamorous";
import { Subscriber } from "react-broadcast";

import MdArrowBack from "react-icons/lib/md/arrow-back";
import MdEdit from "react-icons/lib/md/edit";

import { ProfilePictureCard } from "../../ContextBox/contactInfoResults";

const Title = ({ handleProfileInfoBackClick, title }) => {
  return (
    <Div
      css={{
        color: "white",
        fontSize: "1.1em",
        fontWeight: "600",
        height: "40%",
        alignSelf: "end",
        display: "grid",
        gridTemplateColumns: "2fr 8fr"
      }}
    >
      <Div
        css={{
          justifySelf: "center",
          alignSelf: "center",
          ":hover": {
            cursor: "pointer"
          }
        }}
        onClick={handleProfileInfoBackClick}
      >
        <MdArrowBack size={25} color="white" />
      </Div>
      <Span alignSelf="center">{title}</Span>
    </Div>
  );
};

export const Header = ({
  handleProfileInfoBackClick,
  title,
  StarredMessagesMenu = ""
}) => {
  return (
    <Div
      css={{
        background: "#00bfa5",
        height: "16%",
        display: "grid",
        gridTemplateColumns: "8fr 2fr"
      }}
    >
      <Div
        css={{
          alignSelf: "center",
          display: "grid",
          height: "70%"
        }}
      >
        <Title
          handleProfileInfoBackClick={handleProfileInfoBackClick}
          title={title}
        />
      </Div>
      <Div
        css={{
          alignSelf: "end",
          display: "grid",
          height: "40%"
        }}
      >
        {StarredMessagesMenu ? <StarredMessagesMenu /> : null}
      </Div>
    </Div>
  );
};

const SingleDeckContainer = ({ title, info }) => {
  return (
    <Div
      css={{
        height: "15%",
        background: "#fff",
        display: "grid",
        gridTemplateRows: "5fr 5fr",
        boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.1)"
      }}
    >
      <Div
        css={{
          alignSelf: "center",
          justifySelf: "center",
          width: "80%",
          color: "#128c7e",
          fontWeight: "100"
        }}
      >
        {title}
      </Div>
      <Div
        css={{
          alignSelf: "center",
          justifySelf: "center",
          width: "80%",
          color: "#494949",
          display: "grid",
          gridTemplateColumns: "9fr 1fr"
        }}
      >
        <Span>{info}</Span>
        <Span css={{ ":hover": { cursor: "pointer" } }}>
          <MdEdit size={25} color="#949a9d" />
        </Span>
      </Div>
    </Div>
  );
};

const Billboard = _ => {
  return (
    <Div
      css={{
        height: "14%",
        display: "grid",
        gridTemplateColumns: "1fr",
        color: "#929fa6"
      }}
    >
      <Span css={{ alignSelf: "center", justifySelf: "center", width: "80%" }}>
        This is not your username or pin. This name will be visible to your
        WhatsApp contacts
      </Span>
    </Div>
  );
};

export const ProfileInfo = ({ handleProfileInfoBackClick }) => {
  return (
    <Div
      css={{
        height: "100%",
        overflowY: "auto"
      }}
    >
      <Header
        handleProfileInfoBackClick={handleProfileInfoBackClick}
        title="Profile"
      />
      <Subscriber channel="profile">
        {({ profileData }) => (
          <ProfilePictureCard
            style={{ background: "#f7f7f7" }}
            picturePath={profileData.picture}
          />
        )}
      </Subscriber>
      <Subscriber channel="profile">
        {({ profileData }) => (
          <SingleDeckContainer title="Your Name" info={profileData.name} />
        )}
      </Subscriber>
      <Billboard />
      <Subscriber channel="profile">
        {({ profileData }) => (
          <SingleDeckContainer title="About" info={profileData.status} />
        )}
      </Subscriber>
    </Div>
  );
};
