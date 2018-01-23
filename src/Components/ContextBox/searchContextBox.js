import React from "react";
import { Div } from "glamorous";

import { Header } from "./header";
import { SearchBar } from "../Profile/searchBar";

const ContextBox = _ => {
  const wrapperStyle = {
    height: "100%",
    display: "grid",
    gridTemplateRows: "10% 6% 84%",
    borderLeft: "1px solid rgba(0, 0, 0, 0.05)",
    background: "#FFF"
  };
  const wrapperHeaderStyle = {
    height: "100%",
    width: "100%"
  };
  const wrapperSearchBarStyle = { ...wrapperHeaderStyle };
  return (
    <Div css={wrapperStyle}>
      <Div css={wrapperHeaderStyle}>
        <Header />
      </Div>
      <Div css={wrapperSearchBarStyle}>
        <SearchBar placeholder={"Search..."} />
      </Div>
      {/* <Results> */}
    </Div>
  );
};

export { ContextBox };
