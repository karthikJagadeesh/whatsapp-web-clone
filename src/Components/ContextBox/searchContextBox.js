import React from "react";
import { Div } from "glamorous";

const ContextBox = _ => {
  const wrapperStyle = {
    background: "orange",
    height: "100%"
  }
  return <Div css={wrapperStyle}/>;
};

export { ContextBox };
