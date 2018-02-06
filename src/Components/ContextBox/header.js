import React from "react";
import { Div } from "glamorous";
import MdClose from "react-icons/lib/md/close";

export const Header = ({ handleCancelClick, text }) => {
  return (
    <Div
      css={{
        height: "100%",
        background: "#eee",
        display: "grid",
        gridTemplateColumns: "2fr 8fr"
      }}
    >
      <Div
        css={{
          alignSelf: "center",
          justifySelf: "center",
          ":hover": {
            cursor: "pointer"
          }
        }}
        onClick={handleCancelClick}
      >
        <MdClose size={30} color="#666" />
      </Div>
      <Div
        css={{
          alignSelf: "center",
          justifySelf: "start"
        }}
      >
        {text}
      </Div>
    </Div>
  );
};
