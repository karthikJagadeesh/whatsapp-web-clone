import React from "react";
import { Div, Img } from "glamorous";

export const ProfilePicture = ({
  profilePicture: profilePicture = "",
  handlePictureClick
}) => {
  const profilePictureStyle = {
    borderRadius: "50%",
    width: "60%",
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
    <Div css={wrapperStyle} onClick={handlePictureClick}>
      <Img css={profilePictureStyle} alt="" src={profilePicture} />
    </Div>
  );
};
