import React from "react";
import { Div } from "glamorous";
import MdKeyboardVoice from "react-icons/lib/md/keyboard-voice";
import MdSend from "react-icons/lib/md/send";

const ChatAudioOrSend = ({ inputValue, handleChatSend }) => {
  return (
    <Div>
      {inputValue ? (
        <MdSend size={25} color="#989B9C" onClick={handleChatSend} />
      ) : (
        <MdKeyboardVoice size={25} color="#989B9C" />
      )}
    </Div>
  );
};

export { ChatAudioOrSend };
