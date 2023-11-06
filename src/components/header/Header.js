import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../resources/logo.png";
import "./Header.scss";
import arrowRight from "../../resources/arrow.png";
import { useDispatch } from "react-redux";
import { togleSignInModal } from "../../redux/slices/modal/slice";
import { Link } from "react-router-dom";
import menuIcon from "../../resources/icons/burger-menu.png";
import closeIcon from "../../resources/icons/🦆 icon _cancel_.png";

const menuItems = [
  { label: "Demo", path: "/#demo" },
  { label: "Pricing", path: "/#pricing" },
  { label: "FAQs", path: "/#faqs" },
  { label: "My Chatbot", path: "/my-chatbots" },
];

export const Header = () => {
  const dispatch = useDispatch();
  const [menuOpened, openMenu] = useState(false);

  const toggleMenu = (opened) => {
    openMenu(opened);
  };

  const handleLinkCLick = () => {
    if (openMenu) {
      openMenu(false);
    }
  };

  const handleLogin = () => {
    if (openMenu) {
      openMenu(false);
    }
    dispatch(togleSignInModal(true));
  };

  useEffect(()=> {
    if (menuOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpened])

  return (
    <header className={`header  ${menuOpened ? "menu-opened" : "menu-closed"}`}>
      <div className="logo">
        <Link  onClick={handleLinkCLick} to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
        <div className="header-menu">
          {menuOpened && (
            <div className="mobile-menu-top">
              <div>
                <Link to="/"  onClick={handleLinkCLick}>
                  <img src={logo} alt="logo" />
                </Link>
              </div>
              <img
                src={closeIcon}
                alt="close-icon"
                onClick={() => toggleMenu(false)}
              />
            </div>
          )}
          <ul>
            {menuItems.map((item, index) => (
              <li key={index}  onClick={handleLinkCLick}>
                {item.path.startsWith("/#") ? (
                  <a href={item.path}> {item.label}</a>
                ) : (
                  <NavLink to={item.path}>{item.label}</NavLink>
                )}
              </li>
            ))}
          </ul>
        </div>
      <img
        className="menu-icon"
        src={menuIcon}
        alt="menu-icon"
        onClick={() => toggleMenu(true)}
      />
      <div className="login-register">
        {true ? (
          <span  onClick={handleLogin}>Log in</span>
        ) : (
          <Link  onClick={handleLinkCLick} to="/account">Account</Link>
        )}
        <img src={arrowRight} alt="arrow" />
      </div>
    </header>
  );
};
