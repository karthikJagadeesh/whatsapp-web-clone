import React from "react";
import { Div, Img } from "glamorous";

export const Picture = ({ currentFriend: currentFriend = "" }) => {
  const imageStyle = {
    width: "100%",
    height: "70%",
    borderRadius: "50%",
    alignSelf: "center"
  };
  const wrapperStyle = {
    display: "grid",
    gridTemplateColumns: "100%",
    width: "60px",
    height: "100%"
  };

  return (
    <Div css={wrapperStyle}>
      <Img css={imageStyle} alt="" src={currentFriend} />
    </Div>
  );
};
