import React from "react";
import "./Sources.scss";
import CustomTabs from "../../components/shared/CustomTabs/CustomTabs";
import { useLocation, useNavigate } from "react-router-dom";
import { CreateChatbot } from "./CreateChatbot";
import { Text } from "../../components/sources/text/Text";
import { selectChatbot } from "../../redux/slices/chatbot/selectors";
import { useSelector } from "react-redux";
import { Notion } from "../../components/sources/notion/Notion";
import { QnA } from "../../components/sources/qna/QnA";
import { Website } from "../../components/sources/website/Website";
import { Files } from "../../components/sources/files/Files";

export const Sources = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const dataSource = queryParams.get("data-source");
  const { text } = useSelector(selectChatbot);

  return (
    <div className="sources-wrapper">
      <CustomTabs
        active={dataSource}
        items={[
          {
            label: "Files",
            link: "/chatbot/sources?data-source=files"
          },
          {
            label: "Text",
            link: "/chatbot/sources?data-source=text"
          },
          {
            label: "Website",
            link: "/chatbot/sources?data-source=website"
          },
          {
            label: "QnA",
            link: "/chatbot/sources?data-source=qna"
          },
          {
            label: "Notion",
            link: "/chatbot/sources?data-source=notion"
          }
        ]}
      />
      <div className="sources-content">
        <div className="sources-main">
          {dataSource === "text" && <Text />}
          {dataSource === "notion" && <Notion />}
          {dataSource === "qna" && <QnA />}
          {dataSource === "website" && <Website />}
          {(dataSource === "files" || (!dataSource)) && <Files/>}
        </div>
        <CreateChatbot files={null} QnA={null} links={null} text={text} />
      </div>
    </div>
  );
};
