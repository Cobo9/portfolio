import React from 'react';
import {NavLink} from "react-router-dom"
import "./SideMenu.css"
const SideMenu = ({isActive}) => {
    return (
    <>
    <aside className={`SideMenu__container ${isActive?"SideMenu__container--active":""}`}>
        <ul className="SideMenu__container__list">
            <li className="SideMenu__container__listItem"><NavLink to="/about">About me</NavLink></li>
            <li className="SideMenu__container__listItem"><NavLink to="/stack">My Stack</NavLink></li>
            <li className="SideMenu__container__listItem"><NavLink to="/projects">My projects</NavLink></li>
            <li className="SideMenu__container__listItem"><NavLink to="/contact">Contact me</NavLink></li>
        </ul>
    </aside>
    </>
    );
}
 
export default SideMenu;