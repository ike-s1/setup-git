import React from "react";
import './Intro.scss';

export const Intro = () => {
  return (
    <section className="intro-section">
      <div className="intro-left-part">
        <div className="build"></div>
      </div>
      <div className="intro-right-part">
        <div className="try-demo"></div>
        <div className="info-block">
          <div className="contact-us"></div>
          <div className="pricing"></div>
        </div>
      </div>
    </section>
  );
};
