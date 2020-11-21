import React from 'react';
import "./SideMenu.css"
const SideMenu = ({isActive}) => {
    return (
    <>
    <aside className={`SideMenu__container ${isActive?"SideMenu__container--active":""}`}>
        <ul className="SideMenu__container__list">
            <li className="SideMenu__container__listItem"><a href="/">About me</a></li>
            <li className="SideMenu__container__listItem"><a href="/">My Stack</a></li>
            <li className="SideMenu__container__listItem"><a href="/">My projects</a></li>
            <li className="SideMenu__container__listItem"><a href="/">Contact me</a></li>
        </ul>
    </aside>
    </>
    );
}
 
export default SideMenu;