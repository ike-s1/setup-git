import React from "react";
import "./Sources.scss";
import CustomTabs from "../../components/Shared/CustomTabs/CustomTabs";
import { useLocation } from "react-router-dom";
import { CreateChatbot } from "../../components/Sources/CreateChatBot/CreateChatbot";
import { Text } from "../../components/Sources/Text/Text";
import { selectChatbot } from "../../redux/slices/chatbot/selectors";
import { useSelector } from "react-redux";
import { Notion } from "../../components/Sources/Notion/Notion";
import { QnA } from "../../components/Sources/Qna/QnA";
import { Website } from "../../components/Sources/Website/Website";
import { Files } from "../../components/Sources/Files/Files";

const dataSources = {
  ['text'] : <Text/>,
  ['notion'] : <Notion/>,
  ['qna'] : <QnA />,
  ['website'] : <Website/>,
  ['files'] : <Files/>,
}

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
          {dataSources[dataSource] || <Files/>}
        </div>
        <CreateChatbot files={null} QnA={null} links={null} text={text} />
      </div>
    </div>
  );
};
