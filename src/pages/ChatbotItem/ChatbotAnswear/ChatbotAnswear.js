import React from "react";
import "./ChatbotAnswear.scss";
import Loader from "react-loader-spinner";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

export const ChatbotAnswear = ({ text, loading }) => {
  return (
    <div className="chatbot-answear-wrapper">
      <div className="chatbot-answear-container">
        <div className="chatbot-answear-content">
          <div className="chatbot-answear-text">
            {loading ? (
              <Loader
                type="ThreeDots"
                color="#333"
                height={20}
                width={40}
              />
            ) : (
              <ReactMarkdown  remarkPlugins={[gfm]} children={text}/>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

