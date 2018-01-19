import React from "react";
import { Div, Img } from "glamorous";
import path from "path";

const ProfilePicture = ({ profilePicture: profilePicture = "" }) => {
  const profilePictureStyle = {
    borderRadius: "50%",
    width: "60%",
    // height: "20%",
    display: "grid",
    gridTemplateColumns: "100%",
    ":hover": {
      cursor: "pointer"
    },
    alignSelf: "center",
    justifySelf: "center"
  };

  const wrapperStyle = {
    alignSelf: "center",
    justifySelf: "center",
    width: "30%",
    display: "grid"
  };

  const profilePicturePath = path.join("../../../", profilePicture);

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
