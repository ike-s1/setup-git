import React from "react";
import "./Demo.scss";

export const Demo = () => {
  return (
    <section id="demo" className="demo-section">
      <div className="demo-content">
        <h4 className="demo-title title">Video Demo</h4>
        <p className="demo-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
          facilisis velit et magna
        </p>
        <div className="demo-video"></div>
      </div>
    </section>
  );
};
