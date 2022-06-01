import React from "react";
import { NavLink } from "react-router-dom";
import "../style/NavBar.css";
const NavBar = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/form1"
          >
            Form 1
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/form2"
          >
            Form 2
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/form3"
          >
            Form 3
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/master"
          >
            Master
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
