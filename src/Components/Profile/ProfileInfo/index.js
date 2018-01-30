import React, { Component } from "react";
import { Div, Span } from "glamorous";
import MdArrowBack from "react-icons/lib/md/arrow-back";

import { ProfilePictureCard } from "../../ContextBox/contactInfoResults";

const Header = ({ handleProfileInfoBackClick }) => {
  const Title = ({ handleProfileInfoBackClick }) => {
    const wrapperStyle = {
      color: "white",
      fontSize: "1.1em",
      fontWeight: "600",
      letterSpacing: "1px",
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
        <Span alignSelf="center">Profile</Span>
      </Div>
    );
  };

  const wrapperStyle = {
    background: "#00bfa5",
    height: "16%",
    display: "grid",
    gridTemplateRows: "1fr"
  };
  const wrapperTitleStyle = {
    alignSelf: "center",
    display: "grid",
    height: "70%"
  };

  return (
    <Div css={wrapperStyle}>
      <Div css={wrapperTitleStyle}>
        <Title handleProfileInfoBackClick={handleProfileInfoBackClick} />
      </Div>
    </Div>
  );
};

const SingleDeckContainer = () => {
  const wrapperStyle = {
    height: "15%",
    background: "#fff",
    gridTemplateColumns: "5fr 5fr"
  };
  const wrapperTitle = {

  };
  const wrapperInfo = {

  }

  return (
    <Div css={wrapperStyle}>
      <Div css={wrapperTitle}>Title</Div>
      <Div css={wrapperInfo}>Info</Div>
    </Div>
  );
};

export const ProfileInfo = ({ handleProfileInfoBackClick, picturePath }) => {
  const wrapperStyle = {
    height: "100%"
  };

  return (
    <Div css={wrapperStyle}>
      <Header handleProfileInfoBackClick={handleProfileInfoBackClick} />
      <ProfilePictureCard
        style={{ background: "#f7f7f7" }}
        picturePath={picturePath}
      />
      <SingleDeckContainer />
    </Div>
  );
};
