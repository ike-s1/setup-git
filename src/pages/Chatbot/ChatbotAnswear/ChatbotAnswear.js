import React from "react";
import "./ChatbotAnswear.scss";
import Loader from "react-loader-spinner";

const ChatbotAnswear = ({ text, loading }, ref) => {
  return (
    <div ref={ref} className="chatbot-answear-wrapper">
      <div className="chatbot-answear-container">
        <div className="chatbot-answear-content">
          <div className="chatbot-answear-text">
            {loading ? (
              <Loader
                type="ThreeDots"
                color="#1844DF"
                height={20}
                width={40}
              />
            ) : (
              <p> <pre>{text}</pre></p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.forwardRef(ChatbotAnswear);
