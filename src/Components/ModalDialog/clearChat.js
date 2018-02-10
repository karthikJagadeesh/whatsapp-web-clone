import React from "react";
import { Span, Input, Div } from "glamorous";

import { Modal, ModalButton, ModalButtonContainer, ModalHeader } from "./utils";

const ClearChat = ({ name, handleModalCancel }) => (
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
);
export default ClearChat;
