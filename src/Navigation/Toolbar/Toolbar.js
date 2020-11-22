import React from "react";
import "./Toolbar.css";
import { NavLink } from "react-router-dom";
const Toolbar = () => {
  return (
    <>
      <nav className="desktop-nav">
        <ul className="desktop-nav__list">
          <li className="desktop-nav__list-item">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="desktop-nav__list-item">
            <NavLink to="/about">About me</NavLink>
          </li>
          <li className="desktop-nav__list-item">
            <NavLink to="/stack">My stack</NavLink>
          </li>
          <li className="desktop-nav__list-item">
            <NavLink to="/projects">My projects</NavLink>
          </li>
          <li className="desktop-nav__list-item">
            <NavLink to="/contact">Contact me</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Toolbar;
