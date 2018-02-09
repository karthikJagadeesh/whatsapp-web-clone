import React, { Fragment } from "react";
import { Span, Div, Input, Label } from "glamorous";

import { Modal, ModalButton, ModalButtonContainer, ModalHeader } from "./utils";

const Mute = ({ type, handleModalCancel }) => (
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
          <Input type="radio" name="mute-period" id="8-hrs" defaultChecked />
          <Label for="8-hrs">8 Hours</Label>
        </Div>
        <Div>
          <Input type="radio" name="mute-period" id="1-week" />
          <Label for="1-week">1 Week</Label>
        </Div>
        <Div>
          <Input type="radio" name="mute-period" id="1-year" />
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
export default Mute;
