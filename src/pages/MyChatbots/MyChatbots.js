import React from "react";
import "./MyChatbots.scss";
import { ChatbotItem } from "./ChatbotItem/ChatbotItem";

export const MyChatbots = () => {
  const bots = ["Chatbot name.pdf/html/txt/etc."];
  return (
    <div className="my-chatbot-wrapper">
      <h2 className="chatbot-title">My Chatbot</h2>
      <p>{"1"} chatbot limit</p>
      <div className="my-chatbot-content">
        <div className="my-chatbot-list">
          {bots && bots.length && bots.map((b) => <ChatbotItem name={b} />)}
          <div className="new-chatbot-container">
            <div className="new-chatbot-content">
              <span>+</span>
              <p>New chatbot</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
