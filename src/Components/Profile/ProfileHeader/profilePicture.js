import React from "react";
import { Div, Img } from "glamorous";

export const ProfilePicture = ({
  profilePicture: profilePicture = "",
  handlePictureClick
}) => {
  return (
    <Div
      css={{
        alignSelf: "center",
        justifySelf: "center",
        width: "30%",
        display: "grid"
      }}
      onClick={handlePictureClick}
    >
      <Img
        css={{
          borderRadius: "50%",
          width: "60%",
          display: "grid",
          gridTemplateColumns: "100%",
          alignSelf: "center",
          justifySelf: "center",
          ":hover": {
            cursor: "pointer"
          }
        }}
        alt=""
        src={profilePicture}
      />
    </Div>
  );
};
