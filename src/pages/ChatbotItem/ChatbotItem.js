import React, { useEffect, useRef, useState } from "react";
import "./ChatbotItem.scss";
import refreshIcon from "../../resources/icons/refresh icon.png";
import sendIcon from "../../resources/icons/send icon.png";
import { Api } from "../../api";
import ChatbotMessage from "./ChatbotMessage/ChatbotMessage";
import ChatbotAnswear from "./ChatbotAnswear/ChatbotAnswear";

export const ChatbotItem = () => {
  const [message, setMessage] = useState("");
  const [loadingAnswear, setLoadingAnswear] = useState(false);
  const chatbotDialogRef = useRef();


  const [dialog, setDialog] = useState([
    {
      type: "answear",
      text: "Welcome! I am BazaGPT, your personal assistant. Ask me anything about Dark Country universe!",
    },
  ]);

  const scrollToLastMessage = () => {
    if (chatbotDialogRef.current) {
      chatbotDialogRef.current.scrollTop = chatbotDialogRef.current.scrollHeight;
    }
  };

  const handleChatRefresh = () => {
    setDialog([{
      type: "answear",
      text: "Welcome! I am BazaGPT, your personal assistant. Ask me anything about Dark Country universe!",
    }]);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && !loadingAnswear) {
      
      handleSendMessage();
    }
  };

  const handleSendMessage = async () => {
    if(message.length < 4) return 
    try {
      setLoadingAnswear(true);
      setDialog((prev) => [...prev, { type: "question", text: message }]);
      setMessage("");
      const res = await Api.chat.chat({ question: message });
      setDialog((prev) => [...prev, { type: "answear", text: res.data.data }]);
      setLoadingAnswear(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    scrollToLastMessage();
  }, [dialog.length])

  return (
    <div className="chatbot-item-wrapper">
      <div className="chatbot-header">
        <h3>User logo</h3>
        <img
          src={refreshIcon}
          onClick={handleChatRefresh}
          alt="refreshIcon"
          className="refresh-icon"
        />
      </div>
      <div className="chatbot-main-block">
        <div className="chatbot-chat-container">
          <div className="chatbot-chat-content">
            <div className="chatbot-dialog-block" ref={chatbotDialogRef}>
              {dialog.map(({ type, text }, index) => {
                if (type === "answear") {
                  return <ChatbotAnswear   key={index} text={text} />;
                }
                return (
                  <ChatbotMessage
                    loading={loadingAnswear}
                    key={index}
                    text={text}
                  />
                );
              })}
              {loadingAnswear && <ChatbotAnswear  loading={true} />}
            </div>
            <div className="chatbot-input-block">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="chat-input"
                onKeyPress={handleKeyPress}
              ></input>
              <button disabled={loadingAnswear}>
                <img
                  onClick={handleSendMessage}
                  src={sendIcon}
                  alt="sendIcon"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="message-left-block">100 message credits left</div>
    </div>
  );
};
