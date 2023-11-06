import React from "react";
import CustomTabs from "../../components/Shared/CustomTabs/CustomTabs";
import { Outlet} from "react-router-dom";

import './Setting.scss';

const settingLinks = [
  {
    label: "General",
    link: "/chatbot/settings/general",
  },
  {
    label: "Model",
    link: "/chatbot/settings/model",
  },
  {
    label: "Chat interface",
    link: "/chatbot/settings/chat-interface",
  },
  {
    label: "Security",
    link: "/chatbot/settings/security",
  },
  {
    label: "Lead capture",
    link: "/chatbot/settings/lead-capture",
  },
]

export const Settings = () => {
  return (
    <div className="settings-wrapper">
      <CustomTabs
        items={settingLinks}
      />
      <div className="settings-content  border-container">
        <div className="settings-main">
           <Outlet />
        </div>
      </div>
    </div>
  );
};
