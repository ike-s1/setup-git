import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import discord from "../../../resources/icons/socials/discord.png";
import facebook from "../../../resources/icons/socials/facebook.png";
import x from "../../../resources/icons/socials/x.png";
import logo from "../../../resources/logo.png";

export const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-logo">
            <img src={logo}  alt="logo"/>
          </div>
          <ul className="footer-links">
            <li>
              <a href="/#demo">Demo</a>
            </li>
            <li>
              <a href="/#pricing">Pricing</a>
            </li>
            <li>
              <a href="/#faqs">FAQs</a>
            </li>
            <li>
              <Link to="/my-chatbots">My Chatbot</Link>
            </li>
          </ul>
          <div className="footer-socials">
            <img src={discord} alt="discord" />
            <img src={facebook} alt="facebook" />
            <img src={x} alt="x" />
          </div>
        </div>
        <div className="footer-bottom">
            <div className="footer-about">
                <p>2023 Quantumchat. All right reserved.</p>
                <ul>
                    <li><Link to="/privacy"  target="_blank">Privacy Policy</Link></li>
                    <li><Link to="/terms"  target="_blank">Terms of Service</Link></li>
                    <li><Link to=""  target="_blank">Cookies Settings</Link></li>
                </ul>
            </div>
        </div>
      </div>
    </footer>
  );
};
