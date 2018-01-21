import React from "react";
import { Div, Img } from "glamorous";
import path from "path";

const Picture = ({ currentFriend: currentFriend = "" }) => {
  const friendPicturePath = path.join("../../../", currentFriend);
  const imageStyle = {
    width: "100%",
    height: "70%",
    borderRadius: "50%",
    alignSelf: "center"
  };
  const wrapperStyle = {
    display: "grid",
    gridTemplateColumns: "100%",
    width: "50px",
    height: "100%"
  };

  return (
    <Div css={wrapperStyle}>
      <Img css={imageStyle} alt="Image" src={friendPicturePath} />
    </Div>
  );
};

export { Picture };
