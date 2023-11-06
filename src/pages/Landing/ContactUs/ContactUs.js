import React from "react";
import './ContactUs.scss';
import CustomButton from "../../../components/Shared/CustomBtn/CustomBtn";

export const ContactUs = () => {
  return (
    <section className="contact-section">
      <h4 className="contact-title title">
        Need exclusive plan for your case?
      </h4>
      <p className="contact-subtitle">Feel free to contact us!</p>
      <CustomButton animated={true} >Contact</CustomButton>
    </section>
  );
};
