import React from "react";
import "./ChatbotMessage.scss";

const ChatbotMessage = ({ text }, ref) => {
  return (
    <div ref={ref} className="chatbot-message-wrapper">
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

export default React.forwardRef(ChatbotMessage);
