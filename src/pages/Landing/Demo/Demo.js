import React from "react";
import "./Demo.scss";
import blueWave from "../../../resources/decour/blue-wave.png";

export const Demo = () => {
  return (
    <section id="demo" className="demo-section">
              <img  className="blue-wave" src={blueWave} alt="wave"/>
      <div className="demo-content">
        <h4 className="demo-title title">Video Demo</h4>
        <p className="demo-subtitle">
        With those simple steps shown in a video, you can create your own chat bot sourced with your data.
        </p>
        <div className="demo-video"></div>
      </div>
    </section>
  );
};
