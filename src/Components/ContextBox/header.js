import React from "react";
import { Div } from "glamorous";
import MdCancel from "react-icons/lib/md/cancel";

const Header = _ => {
  const wrapperStyle = {
    height: "100%",
    background: "#eee",
    display: "grid",
    gridTemplateColumns: "2fr 8fr"
  };
  const wrapperCancelButtonStyle = {
    alignSelf: "center",
    justifySelf: "center"
  };
  const wrapperHeadingStyle = {
    ...wrapperCancelButtonStyle,
    justifySelf: "start"
  };
  return (
    <Div css={wrapperStyle}>
      <Div css={wrapperCancelButtonStyle}>
        <MdCancel size={30} color="#666" />
      </Div>
      <Div css={wrapperHeadingStyle}>Search Messages</Div>
    </Div>
  );
};

export { Header };
