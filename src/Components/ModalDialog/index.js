import React, { Fragment } from "react";
import glamorous, { Div, Span, Label, Input } from "glamorous";

import DeleteChat from "./deleteChat";
import ClearChat from "./clearChat";
import Mute from "./mute";

const ModalDialog = ({ type, name, handleModalCancel }) => {
  const props = { name, handleModalCancel };
  switch (type) {
    case "deleteChat":
      return <DeleteChat {...props} />;

    case "clearChat":
      return <ClearChat {...props} />;

    case "mute":
      return <Mute {...props} />;
  }
};
export default ModalDialog;
