import React, { useState } from "react";
import "./LeadCapture.scss";
import CustomButton from "../../shared/CustomBtn";
import { CustomInput } from "../../shared/CustomInput/CustomInput";
import { CustomCheckbox } from "../../shared/CustomCheckbox/CustomCheckbox";

export const LeadCapture = () => {
  const [title, setTitle] = useState("Let us know how to contact you");
  const [phoneNumber, setPhoneNumber] = useState(
    "Please enter your phone number"
  );
  
  //checboxs
  const [nameChecked, setNameChecked] = useState(false);
  const [emailChecked, setEmailChecked] = useState(false);
  const [discordChecked, setDiscordChecked] = useState(false);
  const [phoneNumberChecked, setPhoneNumberChecked] = useState(false);

  return (
    <div className="lead-capture-wrapper">
      <div className="lead-capture-content">
        <p>Title</p>
        <div className="title-block">
          <CustomInput value={title} onChange={setTitle} />
          <CustomButton>Save</CustomButton>
          <CustomButton dark={true}>Reset</CustomButton>
        </div>
        <div className="checkbox-block">
        <p>Name</p>
        <CustomCheckbox value={nameChecked} onChange={setNameChecked} />
        <p>Email</p>
        <CustomCheckbox value={emailChecked} onChange={setEmailChecked} />
        <p>Discord account</p>
        <CustomCheckbox value={discordChecked} onChange={setDiscordChecked} />
        <p>Phone number</p>
        <CustomCheckbox value={phoneNumberChecked} onChange={setPhoneNumberChecked} />
        </div>
        <div className="lead-setting-block">
          <CustomInput value={phoneNumber} onChange={setPhoneNumber} />
          <CustomButton>Save</CustomButton>
          <CustomButton dark={true}>Reset</CustomButton>
        </div>
      </div>
    </div>
  );
};
