import React from "react";
import { Div } from "glamorous";

import { Picture } from "./picture";
import { Search } from "./search";
import { Attach } from "./attach";
import { Menu } from "./menu";

const ChatBoxHeader = _ => {
  const wrapperStyle = {
    background: "#eee",
    padding: "0px 15px",
    height: "100%",
    display: "grid",
    gridTemplateColumns: "85% 5% 5% 5%",
    boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)"
  };

  const pictureWrapperStyle = {
    alignSelf: "center",
    justifySelf: "start",
    ":hover": {
      cursor: "pointer"
    }
  };

  const searchWrapperStyle = {
    alignSelf: "center",
    justifySelf: "center",
    ":hover": {
      cursor: "pointer"
    }
  };

  const attachWrapperStyle = Object.assign({}, searchWrapperStyle);
  const menuWrapperStyle = Object.assign({}, searchWrapperStyle);

  return (
    <Div css={wrapperStyle}>
      <Div css={pictureWrapperStyle}>
        <Picture />
      </Div>
      <Div css={searchWrapperStyle}>
        <Search />
      </Div>
      <Div css={attachWrapperStyle}>
        <Attach />
      </Div>
      <Div css={menuWrapperStyle}>
        <Menu />
      </Div>
    </Div>
  );
};

export { ChatBoxHeader };
