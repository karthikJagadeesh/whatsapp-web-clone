import React, { Component } from "react";
import { Div } from "glamorous";

import { Header } from "./header";
import { ContactInfoResults } from "./contactInfoResults";

export const ContactInfo = ({ handleCancelClick, picturePath, name }) => {
  const wrapperStyle = {
    height: "100vh",
    display: "grid",
    gridTemplateRows: "10% 90%",
    borderLeft: "1px solid rgba(0, 0, 0, 0.05)",
    background: "#FFF"
  };
  return (
    <Div css={wrapperStyle}>
      <Header text={"Contact Info"} handleCancelClick={handleCancelClick} />
      <ContactInfoResults picturePath={picturePath} name={name} />
    </Div>
  );
};
