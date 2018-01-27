import React from "react";
import { Div } from "glamorous";
import MdClose from "react-icons/lib/md/close";

export const Header = ({ handleCancelClick, text }) => {
  const wrapperStyle = {
    height: "100%",
    background: "#eee",
    display: "grid",
    gridTemplateColumns: "2fr 8fr"
  };
  const wrapperCancelButtonStyle = {
    alignSelf: "center",
    justifySelf: "center",
    ":hover": {
      cursor: "pointer"
    }
  };
  const wrapperHeadingStyle = {
    alignSelf: "center",
    justifySelf: "start"
  };
  return (
    <Div css={wrapperStyle}>
      <Div css={wrapperCancelButtonStyle} onClick={handleCancelClick}>
        <MdClose size={30} color="#666" />
      </Div>
      <Div css={wrapperHeadingStyle}>{text}</Div>
    </Div>
  );
};
