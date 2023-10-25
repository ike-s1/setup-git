import React from "react";
import "./FAQs.scss";
import arrowDown from "../../../resources/icons/Vector 1.png";

export const FAQs = () => {
  return (
    <section id="faqs" className="faqs-section">
      <div className="faqs-content">
        <h2 className="faqs-title title">FAQs</h2>
        <div className="faqs-questions">
        <div className="question-block">
          <div className="question-item">
            <div className="item-header">
              <p>Question text goes here</p>
              <img src={arrowDown} alt="arrow" />
            </div>
            <p className="item-answear"></p>
          </div>
          <div className="question-item">
            <div className="item-header">
              <p>Question text goes here</p>
              <img src={arrowDown} alt="arrow" />
            </div>
            <p className="item-answear"></p>
          </div>
          <div className="question-item">
            <div className="item-header">
              <p>Question text goes here</p>
              <img src={arrowDown} alt="arrow" />
            </div>
            <p className="item-answear"></p>
          </div>
          <div className="question-item">
            <div className="item-header">
              <p>Question text goes here</p>
              <img src={arrowDown} alt="arrow" />
            </div>
            <p className="item-answear"></p>
          </div>
          <div className="question-item">
            <div className="item-header">
              <p>Question text goes here</p>
              <img src={arrowDown} alt="arrow" />
            </div>
            <p className="item-answear"></p>
          </div>
        </div>
        <div className="question-block">
          <div className="question-item">
            <div className="item-header">
              <p>Question text goes here</p>
              <img src={arrowDown} alt="arrow" />
            </div>
            <p className="item-answear"></p>
          </div>
          <div className="question-item">
            <div className="item-header">
              <p>Question text goes here</p>
              <img src={arrowDown} alt="arrow" />
            </div>
            <p className="item-answear"></p>
          </div>
          <div className="question-item">
            <div className="item-header">
              <p>Question text goes here</p>
              <img src={arrowDown} alt="arrow" />
            </div>
            <p className="item-answear"></p>
          </div>
          <div className="question-item">
            <div className="item-header">
              <p>Question text goes here</p>
              <img src={arrowDown} alt="arrow" />
            </div>
            <p className="item-answear"></p>
          </div>
          <div className="question-item">
            <div className="item-header">
              <p>Question text goes here</p>
              <img src={arrowDown} alt="arrow" />
            </div>
            <p className="item-answear"></p>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};
