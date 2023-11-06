import React, { useState } from "react";
import "./ContactUsModal.scss";
import Rodal from "rodal";
import closeIcon from "../../../resources/icons/🦆 icon _cancel_.png";
import { CustomInput } from "../../Shared/CustomInput/CustomInput";
import CustomButton from "../../Shared/CustomBtn/CustomBtn";


export const ContactUsModal = ({ visible, handleClose }) => {
  const [checked, setChecked] = useState(false);

  return (
    <Rodal
      visible={visible}
      onClose={handleClose}
      showCloseButton={false}
      className="contact-us-modal-box"
      animation="fade"
      duration={500}
      closeOnEsc={true}
    >
      <div className="contact-us-modal">
        <h2 className="contact-us-title"> Contact us</h2>
        <h4 className="contact-us-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        </h4>
        <div className="contact-us-form">
          <p>Name</p>
          <CustomInput placeholder={"Your email address"} />
          <p>Email</p>
          <CustomInput placeholder={"Your password"} />
          <p>Message</p>
          <textarea placeholder="Type your message..." />
        </div>
        <div className="contact-us-checkbox">
          <label>
            <input
              type="checkbox"
              checked={checked}
              onChange={() => setChecked((prev) => !prev)}
            />
            <span>I accept the Terms</span>
          </label>
        </div>
        <CustomButton> Submit </CustomButton>
        <img src={closeIcon} onClick={handleClose} className="close-icon" alt="closeIcon" />
      </div>
    </Rodal>
  );
};
