import React from "react";
import { Span } from "glamorous";

import { Modal, ModalButton, ModalButtonContainer, ModalHeader } from "./utils";

const ReportSpam = ({ handleModalCancel }) => (
  <Modal type="reportSpam">
    <ModalHeader>
      <Span>
        Report spam and block this contact? If you report and block, this chat's
        history will also be deleted.
      </Span>
    </ModalHeader>
    <ModalButtonContainer type="reportSpam">
      <ModalButton type="cancel-reportSpam" onClick={handleModalCancel}>
        CANCEL
      </ModalButton>
      <ModalButton type="reportSpam" onClick={handleModalCancel}>
        REPORT SPAM AND BLOCK
      </ModalButton>
    </ModalButtonContainer>
  </Modal>
);
export default ReportSpam;
