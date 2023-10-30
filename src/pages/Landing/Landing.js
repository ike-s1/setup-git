import React from "react";
import "./Landing.scss";
import { Intro } from "./Intro/Intro";
import { Demo } from "./Demo/Demo";
import { LiveChat } from "./LiveChat/LiveChat";
import { Pricing } from "./Pricing/Pricing";
import { ContactUs } from "./ContactUs/ContactUs";
import { FAQs } from "./FAQs/FAQs";
import { QuestionContact } from "./QuestionContact/QuestionContact";
import { Integrates } from "./Integrates/Integrates";
import { Footer } from "./Footer/Footer";
import { Features } from "./Features/Features";

export const Landing = () => {
  return (
    <div className="landing-wrapper">
      <div className="landing-content">
            <Intro/>
            <Demo/>
            <Features/>
            <LiveChat/>
            <Pricing/>
            <ContactUs/>
            <FAQs/>
            <QuestionContact/>
            <Integrates/>
            <Footer/>
      </div>
    </div>
  );
};
