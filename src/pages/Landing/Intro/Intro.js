import React from "react";
import "./Intro.scss";
import CustomButton from "../../../components/Shared/CustomBtn/CustomBtn";
import arrowRightW from "../../../resources/icons/arrowRightW.png";
import arrowRightB from "../../../resources/icons/arrowRightB.png";
import wave from "../../../resources/decour/wave.png";
import doubleCircle from "../../../resources/landing/double-circle.png";

export const Intro = () => {
  return (
    <section className="intro-section">
      <div className="intro-left-part">
        <div className="build">
          <div className="build-content">
            <div className="ellipse"></div>
            <img className="wave" src={wave} />
            <p className="build-header">
              <span>Presonalize</span>ChatGPT for<span>Your Data</span>
            </p>
            <p className="build-text">
              Simply link up where your information is stored, and you'll get a
              chat buddy similar to ChatGPT for your details. You can easily add
              this chat buddy to your website or chat with it using our
              available integrations or API
            </p>
            <div className="build-btn-block">
              <CustomButton>
                Build Your Chatbot <img src={arrowRightW} alt="arrow-right" />
              </CustomButton>
              <div className="try-for-free">Try for Free</div>
            </div>
          </div>
        </div>
      </div>
      <div className="intro-right-part">
        <div className="try-demo">
          <div className="try-demo-content">
            <div className="animated-circles">
              <div className="circle-item-one"></div>
              <div className="circle-item two"></div>
              <div className="circle-item three"></div>
              <div className="circle-item four"></div>
              <div className="circle-item five"></div>
              <div className="circle-item six"></div>
              <div className="circle-line"></div>
            </div>
            <img className="arrow-right" src={arrowRightB} alt="arrowRigth" />
            <p className="try-demo-text">
              Here’s a demo chatbot trained on our website and product data, so
              you can visit it look at it and ask questions
            </p>
            <div className="heading">Try Demo Chat</div>
          </div>
        </div>
        <div className="info-block">
          <div className="contact-us">
            <div className="contact-us-content">
              <img className="right-arrow" src={arrowRightB} alt="arrowRigth" />
              <div className="contact-us-text">Any questions left?</div>
              <div className="contact-us-heading">Contact Us</div>
            </div>
          </div>
          <div className="pricing">
            <div className="pricing-content">
              <img className="double-circle" src={doubleCircle} alt="ouble-circle" />
              <img className="right-arrow" src={arrowRightB} alt="arrowRigth" />
              <p className="pricing-text">
                Plans that'll suit for all types of products
              </p>
              <div className="pricing-heading">Pricing</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
