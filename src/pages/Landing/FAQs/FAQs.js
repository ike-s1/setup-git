import React from "react";
import "./FAQs.scss";
import { FAQItem } from "./FAQItem/FAQItem";

const questionsLeft = [{
  question: 'Question text goes here',
  answear: 'Answear text goes here Answear text goes here'
},
{
  question: 'Question text goes here',
  answear: 'Answear text goes here Answear text goes here'
},
{
  question: 'Question text goes here',
  answear: 'Answear text goes here Answear text goes here'
},
{
  question: 'Question text goes here',
  answear: 'Answear text goes here Answear text goes here'
},
{
  question: 'Question text goes here',
  answear: 'Answear text goes here Answear text goes here'
},
]

const questionsRight = [{
  question: 'Question text goes here',
  answear: 'Answear text goes here Answear text goes here'
},
{
  question: 'Question text goes here',
  answear: 'Answear text goes here Answear text goes here'
},
{
  question: 'Question text goes here',
  answear: 'Answear text goes here Answear text goes here'
},
{
  question: 'Question text goes here',
  answear: 'Answear text goes here Answear text goes here'
},
{
  question: 'Question text goes here',
  answear: 'Answear text goes here Answear text goes here'
},
]

export const FAQs = () => {
  return (
    <section id="faqs" className="faqs-section">
      <div className="faqs-content">
        <h2 className="faqs-title title">FAQs</h2>
        <div className="faqs-questions">
        <div className="question-block">
          {questionsLeft.map(({question, answear}) => {
            return <FAQItem question={question} answear={answear}/>
          })}
        </div>
        <div className="question-block">
        {questionsRight.map(({question, answear}) => {
            return <FAQItem question={question} answear={answear}/>
          })}
        </div>
        </div>
      </div>
    </section>
  );
};
