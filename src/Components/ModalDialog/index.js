import React, { Fragment } from "react";
import { Div } from "glamorous";

const ModalDialog = ({ type }) => {
  switch (type) {
    case "deleteChat":
      return (
        <Fragment>
          <Div
            css={{
              width: "350px",
              height: "150px",
              background: "#FFFFFF",
              boxShadow:
                "0 17px 50px 0 rgba(0, 0, 0, 0.19), 0 12px 15px 0 rgba(0, 0, 0, 0.24)",
              borderRadius: "4px",
              alignSelf: "center",
              justifySelf: "center",
              opacity: "1"
            }}
          />
        </Fragment>
      );
  }
};
export default ModalDialog;
