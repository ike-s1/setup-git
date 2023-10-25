import React from "react";
import './LiveChat.scss';
import { ChatbotItem } from "../../ChatbotItem/ChatbotItem";

export const LiveChat = () => {
  return (
    <section className="live-chat-section">
      <div className="live-chat-content">
        <h4 className="live-chat-title title">Try Demo chat</h4>
        <p className="live-chat-subtitle">
          This chatbot was trained on a documents, wiki and websites about Dark
          Country game. You can embed a widget like this on any page on your
          website!
        </p>
        <div className="live-chat-block">
            <ChatbotItem/>
        </div>
      </div>
    </section>
  );
};
