import React, { useState } from "react";
import "./LeadCapture.scss";
import CustomButton from "../../Shared/CustomBtn/CustomBtn";
import { CustomInput } from "../../Shared/CustomInput/CustomInput";
import { CustomCheckbox } from "../../Shared/CustomCheckbox/CustomCheckbox";

export const LeadCapture = () => {
  const [title, setTitle] = useState("Let us know how to contact you");

  //inputs
  const [phoneNumber, setPhoneNumber] = useState(
    "Please enter your phone number"
  );
  const [discordAccount, setDiscordAccount] = useState(
    "Please enter your discord account"
  );
  const [email, setEmail] = useState(
    "Please enter your email"
  );
  const [name, setName] = useState(
    "Please enter your name "
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
        { nameChecked && <div className="lead-setting-block">
          <CustomInput value={name} onChange={setName} />
          <CustomButton>Save</CustomButton>
          <CustomButton dark={true}>Reset</CustomButton>
        </div> }
        <p>Email</p>
        <CustomCheckbox value={emailChecked} onChange={setEmailChecked} />
        { emailChecked && <div className="lead-setting-block">
          <CustomInput value={email} onChange={setEmail} />
          <CustomButton>Save</CustomButton>
          <CustomButton dark={true}>Reset</CustomButton>
        </div> }
        <p>Discord account</p>
        <CustomCheckbox value={discordChecked} onChange={setDiscordChecked} />
        { discordChecked && <div className="lead-setting-block">
          <CustomInput value={discordAccount} onChange={setDiscordAccount} />
          <CustomButton>Save</CustomButton>
          <CustomButton dark={true}>Reset</CustomButton>
        </div> }
        <p>Phone number</p>
        <CustomCheckbox value={phoneNumberChecked} onChange={setPhoneNumberChecked} />
        { phoneNumberChecked && <div className="lead-setting-block">
          <CustomInput value={phoneNumber} onChange={setPhoneNumber} />
          <CustomButton>Save</CustomButton>
          <CustomButton dark={true}>Reset</CustomButton>
        </div> }
        </div>
      </div>
    </div>
  );
};
