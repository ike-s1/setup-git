import React, { useState } from 'react';
import './FAQItem.scss';
import arrowDown from "../../../../resources/icons/arrow-donw.png";

export const FAQItem = ({ question, answear }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div onClick={toggleAnswer} className={!isOpen ? 'faq-item' : 'faq-item active'}>
            <div className="item-header">
              <p className="question">{question}</p>
              <img className={isOpen ? 'active' : ' '} src={arrowDown} alt="arrow" />
            </div>
            {isOpen && <p className="item-answear">{answear}</p>}
          </div>
  );
};

