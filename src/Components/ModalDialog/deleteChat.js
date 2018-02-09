import React, { Fragment } from "react";
import { Span } from "glamorous";

import { Modal, ModalButton, ModalButtonContainer, ModalHeader } from "./utils";

const DeleteChat = ({ name, handleModalCancel }) => (
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
export default DeleteChat;
