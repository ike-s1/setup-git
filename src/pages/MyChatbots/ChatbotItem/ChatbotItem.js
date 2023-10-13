import React from "react";
import "./ChatbotItem.scss";
import { useNavigate } from "react-router-dom";

export const ChatbotItem = ({ name }) => {

    const navigate = useNavigate();
    const handleChatbotClick = () => {
        navigate('/chatbot/sources')
    }

  return (
    <div className="chatbot-item-container" onClick={handleChatbotClick}>
      <div className="chatbot-item-content">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="210"
          height="46"
          viewBox="0 0 210 46"
          fill="none"
        >
          <g clip-path="url(#clip0_283_892)">
            <path
              d="M0.853882 18.8543L8.26882 10.2904L15.7287 1.72644L23.1661 10.2904L30.6035 18.8543"
              stroke="white"
              stroke-width="2"
              stroke-miterlimit="10"
            />
            <path
              d="M30.6035 18.8543L38.0409 10.2904L45.4783 1.72644L52.9157 10.2904L60.3531 18.8543"
              stroke="white"
              stroke-width="2"
              stroke-miterlimit="10"
            />
            <path
              d="M60.3531 18.8543L67.7906 10.2904L75.228 1.72644L82.6878 10.2904L90.1252 18.8543"
              stroke="white"
              stroke-width="2"
              stroke-miterlimit="10"
            />
            <path
              d="M90.1252 18.8543L97.5626 10.2904L105 1.72644L112.437 10.2904L119.875 18.8543"
              stroke="white"
              stroke-width="2"
              stroke-miterlimit="10"
            />
            <path
              d="M119.875 18.8543L127.312 10.2904L134.75 1.72644L142.187 10.2904L149.625 18.8543"
              stroke="white"
              stroke-width="2"
              stroke-miterlimit="10"
            />
            <path
              d="M149.625 18.8543L157.062 10.2904L164.522 1.72644L171.959 10.2904L179.397 18.8543"
              stroke="white"
              stroke-width="2"
              stroke-miterlimit="10"
            />
            <path
              d="M179.397 18.8543L186.834 10.2904L194.271 1.72644L201.709 10.2904L209.146 18.8543"
              stroke="white"
              stroke-width="2"
              stroke-miterlimit="10"
            />
            <path
              d="M0.853882 45.2503L8.26882 36.6864L15.7287 28.1224L23.1661 36.6864L30.6035 45.2503"
              stroke="white"
              stroke-width="2"
              stroke-miterlimit="10"
            />
            <path
              d="M30.6035 45.2503L38.0409 36.6864L45.4783 28.1224L52.9157 36.6864L60.3531 45.2503"
              stroke="white"
              stroke-width="2"
              stroke-miterlimit="10"
            />
            <path
              d="M60.3531 45.2503L67.7906 36.6864L75.228 28.1224L82.6878 36.6864L90.1252 45.2503"
              stroke="white"
              stroke-width="2"
              stroke-miterlimit="10"
            />
            <path
              d="M90.1252 45.2503L97.5626 36.6864L105 28.1224L112.437 36.6864L119.875 45.2503"
              stroke="white"
              stroke-width="2"
              stroke-miterlimit="10"
            />
            <path
              d="M119.875 45.2503L127.312 36.6864L134.75 28.1224L142.187 36.6864L149.625 45.2503"
              stroke="white"
              stroke-width="2"
              stroke-miterlimit="10"
            />
            <path
              d="M149.625 45.2503L157.062 36.6864L164.522 28.1224L171.959 36.6864L179.397 45.2503"
              stroke="white"
              stroke-width="2"
              stroke-miterlimit="10"
            />
            <path
              d="M179.397 45.2503L186.834 36.6864L194.271 28.1224L201.709 36.6864L209.146 45.2503"
              stroke="white"
              stroke-width="2"
              stroke-miterlimit="10"
            />
          </g>
          <defs>
            <clipPath id="clip0_283_892">
              <rect width="210" height="46" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <span className="chatbot-name">{name}</span>
      </div>
    </div>
  );
};
