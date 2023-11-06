import React from "react";
import "./Integrates.scss";
import telegram from "../../../resources/landing/telegram-logo.png";
import discord from "../../../resources/landing/discord-logo.png";
import wp from "../../../resources/landing/wp-logo.png";
import shopify from "../../../resources/landing/shopify-logo.png";
import arrowRigth from "../../../resources/arrow.png";

export const Integrates = () => {
  const integrationItems = [
    {
      img: telegram,
      text: "Connect your chatbot to a Telegram channel",
    },
    {
      img: discord,
      text: "Connect your chatbot to a Discord channel and interact with it there",
    },
    {
      img: wp,
      text: "Add an AI chatbot to your WordPress website",
    },
    {
      img: shopify,
      text: "Communicate with customers and improve sales with the help of our chat bot",
    },
  ];

  return (
    <section className="itegrates-section">
      <div className="animated-circles">
        <div className="animated-circle one"/>
        <div className="animated-circle two"/>
        <div className="animated-circle three"/>
        <div className="animated-circle four"/>
      </div>
      <div className="integrates-content">
        <h2 className="integrate-title title">
        Quantumchat integrates with your favorite tools
        </h2>
        <div className="integrate-items">
          {integrationItems.map(({ img, text }, index) => {
            return (
              <div key={index} className="integrate-item">
                <div className="item-content">
                  <img className="item-icon"  src={img} alt={"icon"} />
                  <img className="arraw-right"  src={arrowRigth} alt={arrowRigth} />
                  <p className="item-text">{text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
