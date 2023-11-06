import React, { useCallback, useState } from "react";
import "./Text.scss";
import { useDispatch, useSelector } from "react-redux";
import { setText } from "../../../redux/slices/chatbot/slice";
 import { selectChatbot } from "../../../redux/slices/chatbot/selectors";
import debounce from "lodash.debounce";

export const Text = () => {
  const { text } = useSelector(selectChatbot);
  const [textareaValue, setTextareaValue] = useState(text);
  const dispatch = useDispatch();

  const updateText = useCallback(
    debounce((str) => {
      dispatch(setText(str));
    }, 500),
    []
  );

  const handleTextareaChange = (event) => {
    setTextareaValue(event.target.value);
    updateText(event.target.value);

    const textarea = event.target;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  return (
    <div className={`upload-text-wrapper`}>
      <textarea
        className={`text-wrapper border-container`}
        value={textareaValue}
        onChange={handleTextareaChange}
      />
    </div>
  );
};
