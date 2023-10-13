import React from "react";
import CustomMenu from "./components/shared/CustomMenu/CustomMenu";
import { Route, Routes } from "react-router-dom";
import { Sources } from "./pages/Sources/Sources";
import { Settings } from "./pages/Settings/Settings";
import { Integrations } from "./pages/Integrations/Integrations";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { General } from "../src/components/settings/General/General";
import { Model } from "../src/components/settings/Model/Model";
import { ChatInterface } from "../src/components/settings/ChatInterface/ChatInterface";
import { Security } from "../src/components/settings/Security/Security";
import { LeadCapture } from "../src/components/settings/LeadCapture/LeadCapture";
import deleteIcon from "../src/resources/icons/delete-icon.png";
import emdedIcon from "../src/resources/icons/embed-code icon.png";
import shareIcon from "../src/resources/icons/share-icon.png";
import { Chatbot } from "./pages/Chatbot/Chatbot";

const chatbotControls = [emdedIcon, shareIcon, deleteIcon];

export const ChatBot = () => {
  return (
    <div className="chatbot-wrapper">
      <div className="chatbot-menu-container">
        <CustomMenu
          items={[
            { url: "/chatbot/chatbot", label: "Chatbot" },
            { url: "/chatbot/settings/general", label: "Settings" },
            { url: "/chatbot/dashboard/history", label: "Dashboard" },
            { url: "/chatbot/sources", label: "Sources" },
            { url: "/chatbot/integrations", label: "Integrations" },
          ]}
        />
        <div className="chatbot-controls">
          {chatbotControls.length &&
            chatbotControls.map((c) => <img src={c} alt="icon" />)}
        </div>
      </div>
      <Routes>
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/settings/" element={<Settings />}>
          <Route path="general" element={<General />} />
          <Route path="model" element={<Model />} />
          <Route path="chat-interface" element={<ChatInterface />} />
          <Route path="security" element={<Security />} />
          <Route path="lead-capture" element={<LeadCapture />} />
        </Route>
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/sources" element={<Sources />} />
        <Route path="/integrations" element={<Integrations />} />
      </Routes>
    </div>
  );
};
