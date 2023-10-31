import React, { useState } from "react";
import CustomButton from "../../shared/CustomBtn";
import "./General.scss";
import copy from "copy-to-clipboard";
import copyIcon from '../../../resources/icons/🦆 icon _copy_.png';
import { CustomInput } from "../../shared/CustomInput/CustomInput";
import { toast } from "react-toastify";

export const General = () => {
  const [name, setName] = useState("User’s Chatbot Name");
  const chatbotId = "126356ghjkldnnkl3562";

  const handleSave = () => {
    alert(`Saved name: ${name}`);
  };

  const handleCopyId = () => {
    copy(chatbotId);
    toast.success('copied to clipboard');
  }

  return (
    <div className="general-wrapper">
      <div className="general-info-container">
        <div className="general-info-content">
          <div className="id-block">
            <p className="id-title">Chatbot ID</p>
            <p className="id-content">
              <span>{chatbotId}</span>{" "}
              <img
                src={copyIcon}
                onClick={handleCopyId}
                alt={"copy"}
              />
            </p>
          </div>
          <div className="characters-block">
            <p>Number of characters</p>
            <span>{"99,999"}</span>
          </div>
          <div className="name-block">
            <p>Name</p>
            <div className="save-name-block">
              <CustomInput
                value={name}
                onChange={setName}
              />
              <CustomButton onClick={handleSave}>Save</CustomButton>
            </div>
          </div>
        </div>
      </div>
      <div className="last-trained-time">
        <p>Last trained at</p>
        <span>Dec 01, 2023, 00:00 PM GMT +3</span>
      </div>
    </div>
  );
};
