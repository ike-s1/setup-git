import React, { useState } from "react";
import "./Features.scss";

const featuresList = [
  {
    title: "Super easy customizations",
    text: "Create custom tools and integrations for your chat widget witha personalized behavior prompt to do specific tasks.",
  },
  {
    title: "Setup multiple integrations",
    text: " Our product already has a number of integrations, such as website, wordpress, telegram, discord, but more are coming. Also you can make your own integration via our API.",
  },
  {
    title: "Access To Chat History",
    text: " You own all the data collected through your chat widget, giving you complete control over your customer interactions.",
  },
  {
    title: "Collect leads and get notified",
    text: "In order to receive maximum value, you can choose to receive leads via chatbot and get daily notifications via email regarding all conversations and leads.",
  },
];

export const Features = () => {
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  
  return (
    <section className="features-section">
      <div className="features-content">
        <h2 className="features-title title">Product Features</h2>
        <div className="info-block">
          <div className="info-sidebar">
            <div className="info-sidebar-content">
              {featuresList.map((f, index) => {
                return (
                  <div
                    key={f.title}
                    onClick={() => setActiveFeatureIndex(index)}
                    className={`info-sidebar-item ${
                      activeFeatureIndex === index ? "active" : ""
                    }`}
                  >
                    <div className="item-title">{f.title}</div>
                    <p className="item-text">{f.text}</p>
                    <div className="item-label" />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="info-image">
            <img />
          </div>
        </div>
      </div>
    </section>
  );
};
