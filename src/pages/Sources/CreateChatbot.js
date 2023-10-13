import React, { useEffect, useState } from "react";
import CustomButton from "../../components/shared/CustomBtn";
import { useSelector } from "react-redux";
import { selectChatbot } from "../../redux/slices/chatbot/selectors";

export const CreateChatbot = () => {
  const { files, text, websites, qna, notion } = useSelector(selectChatbot);

  const [filesData, setFilesData] = useState(files);

  let websitesTotal = websites?.reduce((count, w) => {
    return count + w.length;
  }, 0);

  let qnaTotal = qna?.reduce((count, qna) => {
    return count + (qna.question.length + qna.answer.length);
  }, 0);

  let filesTotal = filesData.length ? filesData.reduce((count, f) => {
    return count + f?.symbolsLength;
  }, 0) : 0;

  const getTotalLength = () => {
    return websitesTotal + qnaTotal + text.length + filesTotal;
  };

  useEffect(() => {
    if (files.length) {
      const newFileInfoList = [];

      files.forEach((file) => {
        debugger;
        if (file) {
          const reader = new FileReader();

          reader.onload = (e) => {
            const content = e.target.result;
            const symbols = content.replace(/\s+/g, "").length;
            const fileInfo = {
              name: file.name,
              symbolsLength: symbols,
            };
            newFileInfoList.push(fileInfo);

            if (newFileInfoList.length === files.length) {
              setFilesData(newFileInfoList);
            }
          };

          reader.readAsText(file);
        }
      });
    }
  }, [files]);

  return (
    <div className="create-chatbot-container">
      <div className="chatbot-creation-info">
        {filesData?.length > 0 && (
          <p>
            {filesData.length} files({filesTotal} char)
          </p>
        )}
        {text?.length > 0 && <p>Text ({text.length} char)</p>}
        {websites?.length > 0 && (
          <p>
            {websites.length} links ({websitesTotal} char)
          </p>
        )}
        {qna?.length > 0 && (
          <p>
            {qna.length} Q&A ({qnaTotal} char)
          </p>
        )}
        {notion?.length > 0 && (
          <p>
            {notion.length} Notion Pages ({"10"} char)
          </p>
        )}
        <p className="total-characters">
          Total characters: {getTotalLength()}
          <span>/999,999 limit</span>
        </p>
      </div>
      <CustomButton  animated={true} className={"create-btn"}>Create chatbot</CustomButton>
    </div>
  );
};
