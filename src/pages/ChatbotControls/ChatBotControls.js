import React from "react";
import "./ChatbotControls.scss";

import { Route, Routes } from "react-router-dom";
import { Sources } from "../Sources/Sources";
import { Settings } from "../Settings/Settings";
import { Integrations } from "../Integrations/Integrations";
import { Dashboard } from "../Dashboard/Dashboard";
import { General } from "../../components/Settings/General/General";
import { Model } from "../../components/Settings/Model/Model";
import { ChatInterface } from "../../components/Settings/ChatInterface/ChatInterface";
import { Security } from "../../components/Settings/Security/Security";
import { LeadCapture } from "../../components/Settings/LeadCapture/LeadCapture";
import deleteIcon from "../../resources/icons/delete-icon.png";
import emdedIcon from "../../resources/icons/embed-code icon.png";
import shareIcon from "../../resources/icons/share-icon.png";
import { ChatbotItem } from "../ChatbotItem/ChatbotItem";
import CustomMenu from "../../components/Shared/CustomMenu/CustomMenu";
import { useDispatch } from "react-redux";
import { togleEmbedModal } from "../../redux/slices/modal/slice";

const chatbotMenu = [
  { url: "/chatbot/chatbot", label: "Chatbot" },
  { url: "/chatbot/settings/general", label: "Settings" },
  { url: "/chatbot/dashboard/history", label: "Dashboard" },
  { url: "/chatbot/sources", label: "Sources" },
  { url: "/chatbot/integrations", label: "Integrations" },
];

export const ChatBotControls = () => {
  const dispatch = useDispatch();

  const handleOpenEmbedModal = () => {
    dispatch(togleEmbedModal(true))
}
  
  const chatbotControlsIcon = [
    { icon: emdedIcon, onClick: handleOpenEmbedModal},
    { icon: shareIcon, onClick: () => {} },
    { icon: deleteIcon, onCLick: () => {} },
  ];

  return (
    <div className="chatbot-controls-wrapper">
      <h2>Quantum Chat Bot Title</h2>
      <div className="chatbot-menu-container">
        <CustomMenu items={chatbotMenu} />
        <div className="chatbot-controls">
          {chatbotControlsIcon.length &&
            chatbotControlsIcon.map(({ icon, onClick }) => (
              <img src={icon} onClick={onClick} alt="icon" />
            ))}
        </div>
      </div>
      <Routes>
        <Route path="/chatbot" element={<ChatbotItem />} />
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
