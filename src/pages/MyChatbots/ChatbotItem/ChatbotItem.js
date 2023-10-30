import React from "react";
import "./ChatbotItem.scss";
import { useNavigate } from "react-router-dom";
import wave from '../../../resources/decour/wave.png';

export const ChatbotItem = ({ name }) => {

    const navigate = useNavigate();
    const handleChatbotClick = () => {
        navigate('/chatbot/sources')
    }

  return (
    <div className="chatbot-item-container" onClick={handleChatbotClick}>
      <div className="chatbot-item-content">
        <img
          src={wave}
          alt="wave"
        >
        </img>
        <span className="chatbot-name">{name}</span>
      </div>
    </div>
  );
};
