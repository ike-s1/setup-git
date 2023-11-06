import React from "react";
import "./QnA.scss";
import { QnaInput } from "./QnaInput/QnaInput";
import { useDispatch, useSelector } from "react-redux";
import { selectChatbot } from "../../../redux/slices/chatbot/selectors";
import { QnaItem } from "./QnaItem/QnaItem";
import { deleteAllQnA, deleteQnA  } from "../../../redux/slices/chatbot/slice";

export const QnA = () => {
  const dispatch = useDispatch();

  const { qna } = useSelector(selectChatbot);

  const deleteAllQna = () => {
    dispatch(deleteAllQnA());
  };

  const deletQnaItem = (q) => {
    dispatch(deleteQnA(q));
  };

  return (
    <div className="upload-qna-wrapper border-container">
      <div className="upload-qna-container">
        {qna?.length ? (
          <div className="saved-qna-container">
            <div className="saved-qna">
              <div className="qna-info-block">
                <p>
                  Q&A <span>({qna.length} answers)</span>
                </p>
                <span onClick={deleteAllQna} className="qna-delete">Delete all</span>
              </div>
              <div className="qna-list">
                {qna.map((qna, index) => (
                  <QnaItem
                    key={index}
                    onDeleteIconClick={() => deletQnaItem(qna.question)}
                    qna={qna}
                  />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
        <QnaInput />
      </div>
    </div>
  );
};
