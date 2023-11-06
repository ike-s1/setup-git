import React from "react";
import "./ChatbotMessage.scss";

export const ChatbotMessage = ({ text }) => {
  return (
    <div className="chatbot-message-wrapper">
      <div className="chatbot-message-container">
        <div className="chatbot-message-content">
          <div className="chatbot-message-text">
            <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

