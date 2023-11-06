import React, { useState } from "react";
import "./Security.scss";
import { PRIVAT, PUBLICK } from "../../../constants/chatbotVisibility.constant";
import CustomButton from "../../Shared/CustomBtn/CustomBtn";
import { CustomInput } from "../../Shared/CustomInput/CustomInput";
import { CustomSelect } from "../../Shared/CustomSelect/CustomSelect";

const visibilityOptions = [PRIVAT, PUBLICK];

export const Security = () => {
  const [visibility, setVisibility] = useState(visibilityOptions[0]);
  const [limitMessage, setLimitMessage] = useState(
    "Too many messages in a row"
  );

  const [limitToOnly, setLimitToOnly] = useState(0);
  const [messageEvery, setMessageEvery] = useState(0);

  const handleSetLimitToOnly = (number) => {
    setLimitToOnly(Math.floor(number));
  };

  const handleSetMessageEvery = (number) => {
    setMessageEvery(Math.floor(number));
  };

  return (
    <div className="security-wrapper">
      <div className="visibility-container">
        <div className="visibility-content">
          <p>Visibility</p>
          <CustomSelect
            type="select"
            options={[
              { value: PRIVAT, label: "Private" },
              { value: PUBLICK, label: "Publick" },
            ]}
            value={visibility}
            onChange={setVisibility}
          />
          <p className="visibility-output">
            ‘Privat’: no one can access your chatbot and your account
          </p>
          <p className="visibility-output">
            ‘Can be embedded on website’: other people can chat with your
            chatbot if you send them the link. You can also embed it on your
            website so your website visitors are able to use it.
          </p>
        </div>
      </div>
      <div className="rate-limit-container">
        <div className="rate-limit-content">
          <p>Rate Limiting</p>
          <div className="limit-inputs-block">
            Limit to only
            <CustomInput
              style={{ maxWidth: "100px" }}
              type="number"
              step={1}
              min={0}
              value={limitToOnly}
              onChange={handleSetLimitToOnly}
            />
            messages every
            <CustomInput
              style={{ maxWidth: "110px" }}
              type="number"
              step={1}
              min={0}
              value={messageEvery}
              onChange={handleSetMessageEvery}
            />
            seconds.
            <div className="rate-limit-btns">
              <CustomButton>Save</CustomButton>
              <CustomButton dark={true}>Reset</CustomButton>
            </div>
          </div>
          <p>Show this messages to show when limit is hit </p>
          <div className="message-input-block">
            <CustomInput value={limitMessage} onChange={setLimitMessage} />
            <CustomButton>Save</CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};
