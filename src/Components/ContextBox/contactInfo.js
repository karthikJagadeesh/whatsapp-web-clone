import React, { Component } from "react";
import { Div } from "glamorous";

import { Header } from "./header";
import { ContactInfoResults } from "./contactInfoResults";

const ContactInfo = ({ handleCancelClick, picturePath, name }) => {
  const wrapperStyle = {
    height: "100%",
    display: "grid",
    gridTemplateRows: "1fr 9fr",
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

export { ContactInfo };
