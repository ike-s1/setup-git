import React, { useState } from "react";
import CustomButton from "../../shared/CustomBtn";
import './ChatInterface.scss';

export const ChatInterface = () => {
  const [itnroMessage, setIntroMessage] = useState(
    "Hello! My name is BAZA chatbot, how can I help you?"
  );
  const [suggestedMessage, setSuggestedMessage] = useState(
    "What can I do with this chatbot?"
  );

  return (
    <div className="chat-interface-wrapper">
      <div className="chat-intro-container">
        <div className="chat-intro-content">
          <p>Intro message</p>
          <textarea
            value={itnroMessage}
            onChange={(e) => setIntroMessage(e.target.value)}
          />
          <p className="intro-output">Enter each message in a new line.</p>
          <div className="intro-btns-block">
            <CustomButton>Save</CustomButton>
            <CustomButton dark={true}>Reset</CustomButton>
          </div>
        </div>
      </div>
      <div className="suggested-message-container">
        <div className="suggested-message-content">
          <p>Suggested messages</p>
          <textarea
            value={suggestedMessage}
            onChange={(e) => setSuggestedMessage(e.target.value)}
          />
          <p className="suggested-output">Enter each message in a new line.</p>
          <div className="suggested-bts-block">
            <CustomButton>Save</CustomButton>
            <CustomButton dark={true}>Reset</CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};
