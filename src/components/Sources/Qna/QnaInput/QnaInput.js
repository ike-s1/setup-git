import React, { useCallback, useState } from "react";
import "./QnaInput.scss";
import CustomButton from "../../../Shared/CustomBtn/CustomBtn";
import { useDispatch } from "react-redux";
import { setQnA } from "../../../../redux/slices/chatbot/slice";
import { CustomInput } from "../../../Shared/CustomInput/CustomInput";


export const QnaInput = () => {
  const dispatch = useDispatch();
  
  const [question, setQuestion] = useState(""); 
  const [answer, setAnswer] = useState("");

    const handleAddClick = () => {
      if(question.length < 1 && answer.length < 1)  {
        alert('Answer length too short in Q&A section')
        return
      }
        const data = {question, answer};
        dispatch(setQnA(data));
        setQuestion("");
        setAnswer("");
    }

  return (
    <div className={"qna-input-container"}>
      <div className={"qna-input-block"}>
        <p>Question</p>
          <CustomInput
            onChange={(value) => setQuestion(value)}
            placeholder={"Enter user question"}
            value={question} 
          />
      </div>
        <p>Answer</p>
        <div className="answer-block">
          <CustomInput
            onChange={(value) => setAnswer(value)}
            placeholder={"Enter your answer"}
            value={answer}
          />
          <CustomButton dark={true} onClick={handleAddClick}>
            Add
          </CustomButton>
        </div>
      </div>
  );
};
