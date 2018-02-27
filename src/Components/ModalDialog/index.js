import React from "react";

import DeleteChat from "./deleteChat";
import ClearChat from "./clearChat";
import Mute from "./mute";
import ReportSpam from "./reportSpam";
import BlockContact from "./blockContact";
import { ModalWrapper } from "./utils";

const ModalDialog = ({ type, name, handleModalCancel }) => {
  const props = { name, handleModalCancel };
  switch (type) {
    case "deleteChat":
      return (
        <ModalWrapper>
          <DeleteChat {...props} />
        </ModalWrapper>
      );

    case "clearChat":
      return (
        <ModalWrapper>
          <ClearChat {...props} />
        </ModalWrapper>
      );

    case "mute":
      return (
        <ModalWrapper>
          <Mute {...props} />
        </ModalWrapper>
      );

    case "reportSpam":
      return (
        <ModalWrapper>
          <ReportSpam handleModalCancel={handleModalCancel} />
        </ModalWrapper>
      );

    case "blockContact":
      return (
        <ModalWrapper>
          <BlockContact {...props} />
        </ModalWrapper>
      );
  }
};
export default ModalDialog;
