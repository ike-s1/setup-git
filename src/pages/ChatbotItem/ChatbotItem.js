import React, { useEffect, useRef, useState } from "react";
import "./ChatbotItem.scss";
import refreshIcon from "../../resources/icons/refresh icon.png";
import sendIcon from "../../resources/icons/send icon.png";
import { useDispatch, useSelector } from "react-redux";
import { selectChatbot } from "../../redux/slices/chatbot/selectors";
import { Api } from "../../api";
import { setSettings } from "../../redux/slices/chatbot/slice";
import { ChatbotAnswear } from "./ChatbotAnswear/ChatbotAnswear";
import { ChatbotMessage } from "./ChatbotMessage/ChatbotMessage";
import closeIcon from "../../resources/icons/🦆 icon _cancel_.png";

export const ChatbotItem = () => {
  const [message, setMessage] = useState("");
  const [loadingAnswear, setLoadingAnswear] = useState(false);
  const chatbotDialogRef = useRef();
  const { settings } = useSelector(selectChatbot);
  const dispatch = useDispatch();
  const [isWidget, setIsWidget] = useState(false);

  const [dialog, setDialog] = useState([
    {
      type: "answear",
      text: "Welcome to Quantum Chat!",
    },
  ]);

  const getChatbotSettings = async () => {
    try {
      let res = await Api.chatbot.getSettings({ token: 1, id: 1 });
      dispatch(setSettings(res.data));
      let dialog = localStorage.getItem("botId");
      if (!dialog) {
        localStorage.setItem(
          "botId",
          JSON.stringify([
            {
              type: "answear",
              text: res.data.intro_message,
            },
          ])
        );
        setDialog(JSON.parse(dialog));
      } else {
        setDialog(JSON.parse(dialog));
      }
    } catch (err) {
      console.log(err);
    }
  };

  const scrollToLastMessage = () => {
    if (chatbotDialogRef.current) {
      chatbotDialogRef.current.scrollTop =
        chatbotDialogRef.current.scrollHeight;
    }
  };

  const handleChatRefresh = () => {
    setDialog([
      {
        type: "answear",
        text: settings.intro_message,
      },
    ]);
    localStorage.setItem(
      "botId",
      JSON.stringify([
        {
          type: "answear",
          text: settings.intro_message,
        },
      ])
    );
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && !loadingAnswear) {
      handleSendMessage();
    }
  };

  const handleSendMessage = async () => {
    const dialog = localStorage.getItem("botId");
    const parsedDialog = dialog ? JSON.parse(dialog) : [];
    if (message.length < 1) return;
    try {
      setLoadingAnswear(true);
      setDialog((prev) => [...prev, { type: "question", text: message }]);
      parsedDialog.push({ type: "question", text: message });
      setMessage("");
      const res = await Api.chat.chat({ question: message });
      setDialog((prev) => [...prev, { type: "answear", text: res.data.data }]);
      parsedDialog.push({ type: "answear", text: res.data.data });
      localStorage.setItem("botId", JSON.stringify(parsedDialog));
      setLoadingAnswear(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    scrollToLastMessage();
  }, [dialog?.length]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const isWidget = urlParams.get('isWidget');
    if(isWidget) {
      setIsWidget(true)
    }
  },[])

  useEffect(() => {
    getChatbotSettings();
  }, []);

  return (
    <div className="chatbot-item-wrapper">
      <div className="chatbot-header">
        <h3>User logo</h3>
        <div className="header-icons">
          <img
            src={refreshIcon}
            onClick={handleChatRefresh}
            alt="refreshIcon"
            className="refresh-icon"
          />
          {isWidget && (
            <img
              src={closeIcon}
              onClick={() => {
                window.parent.postMessage({ closeIframe: true }, "*");
              }}
              alt="closeIcon"
              className="close-icon"
            />
          )}
        </div>
      </div>
      <div className="chatbot-main-block">
        <div className="chatbot-chat-container">
          <div className="chatbot-chat-content">
            <div className="chatbot-dialog-block" ref={chatbotDialogRef}>
              {dialog.map(({ type, text }, index) => {
                if (type === "answear") {
                  return <ChatbotAnswear key={index} text={text} />;
                }
                return (
                  <ChatbotMessage
                    loading={loadingAnswear}
                    key={index}
                    text={text}
                  />
                );
              })}
              {loadingAnswear && <ChatbotAnswear loading={true} />}
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
