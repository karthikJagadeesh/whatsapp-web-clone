import React from "react";
import { Span, Input, Div } from "glamorous";

import { Modal, ModalButton, ModalButtonContainer, ModalHeader } from "./utils";

const BlockContact = ({ name, handleModalCancel }) => (
  <Modal type="blockContact">
    <ModalHeader type="blockContact">
      <Span>Block</Span>
    </ModalHeader>
    <Div
      css={{
        display: "grid",
        gridTemplateColumns: "1fr",
        justifySelf: "center",
        alignSelf: "center",
        width: "90%",
        color: "#4b4b4b"
      }}
    >
      <Span>Block {name}?</Span>
    </Div>
    <ModalButtonContainer type="blockContact">
      <ModalButton type="delete" onClick={handleModalCancel}>
        BLOCK
      </ModalButton>
      <ModalButton type="blockContact" onClick={handleModalCancel}>
        REPORT SPAM AND BLOCK
      </ModalButton>
      <ModalButton type="cancel" onClick={handleModalCancel}>
        CANCEL
      </ModalButton>
    </ModalButtonContainer>
  </Modal>
);
export default BlockContact;
