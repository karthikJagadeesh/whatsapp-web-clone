import React from "react";

import DeleteChat from "./deleteChat";
import ClearChat from "./clearChat";
import Mute from "./mute";
import ReportSpam from "./reportSpam";
import BlockContact from "./blockContact";

const ModalDialog = ({ type, name, handleModalCancel }) => {
  const props = { name, handleModalCancel };
  switch (type) {
    case "deleteChat":
      return <DeleteChat {...props} />;

    case "clearChat":
      return <ClearChat {...props} />;

    case "mute":
      return <Mute {...props} />;

    case "reportSpam":
      return <ReportSpam handleModalCancel={handleModalCancel} />;

    case "blockContact":
      return <BlockContact {...props} />;
  }
};
export default ModalDialog;
