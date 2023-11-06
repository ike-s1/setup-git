import React from "react";
import "./LiveChat.scss";
import { ChatbotItem } from "../../ChatbotItem/ChatbotItem";

export const LiveChat = () => {
  return (
    <section className="live-chat-section">
      <div className="live-chat-content">
        <h4 className="live-chat-title title">Try Demo chat</h4>
        <p className="live-chat-subtitle">
          This demo chat was trained on this website, as well as we added custom
          Q/As based on user’s requests as it grew inside of our internal
          knowledge base and F.A.Q materials.
        </p>
        <div className="live-chat-block">
          <ChatbotItem />
        </div>
      </div>
    </section>
  );
};
