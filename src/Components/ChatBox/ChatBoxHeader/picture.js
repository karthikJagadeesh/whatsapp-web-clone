import React from "react";
import { Div, Img } from "glamorous";

export const Picture = ({ currentFriend: currentFriend = "" }) => {
  return (
    <Div
      css={{
        display: "grid",
        gridTemplateColumns: "100%",
        width: "60px",
        height: "100%"
      }}
    >
      <Img
        css={{
          width: "100%",
          height: "70%",
          borderRadius: "50%",
          alignSelf: "center"
        }}
        alt=""
        src={currentFriend}
      />
    </Div>
  );
};
