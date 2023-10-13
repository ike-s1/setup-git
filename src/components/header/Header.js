import React from "react";
import {  NavLink } from "react-router-dom";
import logo from "../../resources/logo.png";
import "./Header.scss";
import arrowRight from '../../resources/arrow.png';
import { useDispatch } from "react-redux";
import { togleSignInModal } from "../../redux/slices/modal/slice";

const menuItems = [
  { label: "Demo", path: "/#demo" },
  { label: "Pricing", path: "/#pricing" },
  { label: "FAQs", path: "/#faqs" },
  { label: "My Chatbot", path: "/my-chatbots" },
];

export const Header = () => {
    const dispatch =  useDispatch();

  const handleLogin = () => {
      dispatch(togleSignInModal(true))
  }
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="header-menu">
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <NavLink
                className={({ isActive }) => {
                  return isActive && (!item.path.startsWith("/#")) ? "active" : "";
                }}
                to={item.path}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="login-register">
        <span onClick={handleLogin}>Log in</span>
        <img src={arrowRight} alt="arrow"/>
      </div>
    </header>
  );
};
