import React from "react";
import "./CustomMenu.scss";
import { NavLink } from "react-router-dom";

const CustomMenu = ({ items }) => {
  return (
    <div className="custom-menu">
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <NavLink
              className={({ isActive }) => {
                return isActive &&  (!item.url.startsWith('/#')) ? "active" : "";
              }}
              to={item.url}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomMenu;
