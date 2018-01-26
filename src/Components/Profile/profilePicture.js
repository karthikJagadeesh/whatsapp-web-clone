import React from "react";
import { Div, Img } from "glamorous";

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

  return (
    <Div css={wrapperStyle}>
      <Img css={profilePictureStyle} alt="" src={profilePicture} />
    </Div>
  );
};

export { ProfilePicture };
