import React, { Fragment } from "react";
import glamorous, { Div, Span, Label, Input } from "glamorous";

const ModalDialog = ({ type, name, handleModalCancel }) => {
  const Modal = glamorous.div(
    {
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
    },
    ({ type }) => {
      switch (type) {
        case "clear":
          return {
            gridTemplateRows: "3fr 1fr 5fr",
            height: "180px"
          };
        case "mute":
          return {
            gridTemplateRows: "3fr 3fr 4fr",
            height: "260px"
          };
      }
    }
  );
  const ModalButton = glamorous.div(
    {
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
    },
    ({ type }) => {
      return type === "delete"
        ? {
            background: "#08c65b",
            color: "#ffffff",
            ":hover": {
              background: "#0cb757",
              boxShadow:
                "0 1px 1px 0 rgba(0, 0, 0, 0.06), 0 2px 5px 0 rgba(0, 0, 0, 0.2)"
            }
          }
        : null;
    }
  );
  const ModalButtonContainer = glamorous.div({
    display: "grid",
    gridTemplateColumns: "5fr 5fr",
    width: "70%",
    justifySelf: "end",
    alignSelf: "center"
  });
  const ModalHeader = glamorous.div(
    {
      width: "90%",
      alignSelf: "center",
      justifySelf: "center",
      color: "#4b4b4b"
    },
    ({ type }) =>
      type === "mute"
        ? {
            fontSize: "1.4em"
          }
        : null
  );

  switch (type) {
    case "deleteChat":
      return (
        <Fragment>
          <Modal>
            <ModalHeader>
              <Span>Delete chat with "{name}"</Span>
            </ModalHeader>
            <ModalButtonContainer>
              <ModalButton type="cancel" onClick={handleModalCancel}>
                CANCEL
              </ModalButton>
              <ModalButton type="delete" onClick={handleModalCancel}>
                DELETE
              </ModalButton>
            </ModalButtonContainer>
          </Modal>
        </Fragment>
      );

    case "clearChat":
      return (
        <Fragment>
          <Modal type="clear">
            <ModalHeader>
              <Span>Clear chat with "{name}"?</Span>
            </ModalHeader>
            <Div
              css={{
                display: "grid",
                gridTemplateColumns: "1fr 9fr",
                justifySelf: "center",
                alignSelf: "center",
                width: "90%",
                color: "#4b4b4b"
              }}
            >
              <Input css={{ cursor: "pointer" }} type="checkbox" />
              <Span>Keep starred messages</Span>
            </Div>
            <ModalButtonContainer>
              <ModalButton type="cancel" onClick={handleModalCancel}>
                CANCEL
              </ModalButton>
              <ModalButton type="delete" onClick={handleModalCancel}>
                DELETE
              </ModalButton>
            </ModalButtonContainer>
          </Modal>
        </Fragment>
      );

    case "mute":
      return (
        <Fragment>
          <Modal type="mute">
            <ModalHeader type="mute">
              <Span>Mute "{name}" for...</Span>
            </ModalHeader>
            <Div
              css={{
                display: "grid",
                gridTemplateRows: "33% 33% 33%",
                gridGap: "10px",
                justifySelf: "center",
                alignSelf: "center",
                width: "90%",
                color: "#4b4b4b"
              }}
            >
              <Div>
                <Input
                  type="radio"
                  name="mute-period"
                  data-id="8-hrs"
                  checked
                />
                <Label for="8-hrs">8 Hours</Label>
              </Div>
              <Div>
                <Input type="radio" name="mute-period" data-id="1-week" />
                <Label for="1-week">1 Week</Label>
              </Div>
              <Div>
                <Input type="radio" name="mute-period" data-id="1-year" />
                <Label for="1-year">1 Year</Label>
              </Div>
            </Div>
            <ModalButtonContainer>
              <ModalButton type="cancel" onClick={handleModalCancel}>
                CANCEL
              </ModalButton>
              <ModalButton type="delete" onClick={handleModalCancel}>
                DELETE
              </ModalButton>
            </ModalButtonContainer>
          </Modal>
        </Fragment>
      );
  }
};
export default ModalDialog;
