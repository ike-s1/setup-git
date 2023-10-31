import React, { useEffect, useState } from "react";
import CustomButton from "../../shared/CustomBtn";
import { useSelector } from "react-redux";
import { selectChatbot } from "../../../redux/slices/chatbot/selectors";
import "./CreateChatBot.scss";
import Loader from "react-loader-spinner";
import { toast } from "react-toastify";
import { Api } from "../../../api";
import { useNavigate } from "react-router-dom";

export const CreateChatbot = () => {
  const { files, text, websites, qna, notion } = useSelector(selectChatbot);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [filesData, setFilesData] = useState(files);

  let websitesTotal = websites?.reduce((count, w) => {
    return count + w.length;
  }, 0);

  let qnaTotal = qna?.reduce((count, qna) => {
    return count + (qna.question.length + qna.answer.length);
  }, 0);

  let filesTotal = filesData.length
    ? filesData.reduce((count, f) => {
        return count + f?.symbolsLength;
      }, 0)
    : 0;

  const getTotalLength = () => {
    return websitesTotal + qnaTotal + text.length + filesTotal;
  };

  const handleCreateChatbot = async () => {
    try {
      setLoading(true);
      await Api.chat.addData({
        data_type: "string",
        url_or_text: text,
        instructions: "string",
      });
      navigate('/chatbot/chatbot')
      toast.success("successfully");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (files.length) {
      const newFileInfoList = [];

      files.forEach((file) => {
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
      <CustomButton
        animated={true}
        onClick={handleCreateChatbot}
        className={"create-btn"}
        disabled={loading}
      >
        {loading ? (
          <Loader type="ThreeDots" color="white" height={20} width={40} />
        ) : (
          "Create chatbot"
        )}
      </CustomButton>
    </div>
  );
};
