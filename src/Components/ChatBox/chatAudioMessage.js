import React from "react";
import { Div } from "glamorous";
import MdKeyboardVoice from "react-icons/lib/md/keyboard-voice";

const ChatAudioMessage = _ => {
  return (
    <Div>
      <MdKeyboardVoice size={25} color="#989B9C"/>
    </Div>
  );
};

export { ChatAudioMessage };
