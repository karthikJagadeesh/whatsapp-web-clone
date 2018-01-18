import React from "react";
import { Div, Img } from "glamorous";
import path from "path";

const ProfilePicture = ({ profilePicture: profilePicture }) => {
  const profilePictureStyle = {
    borderRadius: "25px",
    width: "20%",
    height: "20%",
    display: "grid",
    gridTemplateColumns: "100%",
    ":hover": {
      cursor: "pointer"
    }
  };

  const wrapperStyle = {
    alignSelf: "center",
    justifySelf: "center"
  };

  const profilePicturePath = profilePicture
    ? path.join("../../../", profilePicture)
    : "";

  return (
    <Div css={wrapperStyle}>
      <Img
        css={profilePictureStyle}
        alt="Profile Pic"
        src={profilePicturePath}
      />
    </Div>
  );
};

export { ProfilePicture };
