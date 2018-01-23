import React from "react";
import { Div } from "glamorous";

const Header = _ => {
  const wrapperStyle = {
    height: "100%",
    background: "#eee"
  };
  return <Div css={wrapperStyle}>Header</Div>;
};

const SearchBox = _ => {
  return <Div />;
};

const ContextBox = _ => {
  const wrapperStyle = {
    height: "100%",
    display: "grid",
    gridTemplateRows: "10% 6% 84%",
    borderLeft: "1px solid rgba(0, 0, 0, 0.05)"
  };
  return (
    <Div css={wrapperStyle}>
      <Header />
      <SearchBox />
      {/* <Results> */}
    </Div>
  );
};

export { ContextBox };
