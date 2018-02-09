import React, { Fragment } from "react";
import { Div, Span } from "glamorous";

const ModalDialog = ({ type, name, handleModalCancel }) => {
  switch (type) {
    case "deleteChat":
      return (
        <Fragment>
          <Div
            css={{
              display: "grid",
              gridTemplateRows: "4fr 6fr",
              width: "350px",
              height: "150px",
              background: "#FFFFFF",
              boxShadow:
                "0 17px 50px 0 rgba(0, 0, 0, 0.19), 0 12px 15px 0 rgba(0, 0, 0, 0.24)",
              borderRadius: "4px",
              alignSelf: "center",
              justifySelf: "center",
              fontSize: "0.9em"
            }}
          >
            <Div
              css={{
                width: "90%",
                alignSelf: "center",
                justifySelf: "center"
              }}
            >
              <Span>Delete chat with {name}</Span>
            </Div>
            <Div
              css={{
                display: "grid",
                gridTemplateColumns: "5fr 5fr",
                width: "70%",
                justifySelf: "end",
                alignSelf: "center"
              }}
            >
              <Div
                css={{
                  width: "100px",
                  height: "36px",
                  cursor: "pointer",
                  color: "#08c65b",
                  borderRadius: "4px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  ":hover": {
                    boxShadow:
                      "0 1px 1px 0 rgba(0, 0, 0, 0.06), 0 2px 5px 0 rgba(0, 0, 0, 0.2)"
                  }
                }}
                onClick={handleModalCancel}
              >
                CANCEL
              </Div>
              <Div
                css={{
                  width: "100px",
                  height: "36px",
                  cursor: "pointer",
                  background: "#08c65b",
                  borderRadius: "4px",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  ":hover": {
                    background: "#0cb757",
                    boxShadow:
                      "0 1px 1px 0 rgba(0, 0, 0, 0.06), 0 2px 5px 0 rgba(0, 0, 0, 0.2)"
                  }
                }}
                onClick={handleModalCancel}
              >
                DELETE
              </Div>
            </Div>
          </Div>
        </Fragment>
      );
  }
};
export default ModalDialog;
