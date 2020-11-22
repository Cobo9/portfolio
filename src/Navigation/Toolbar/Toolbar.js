import React from 'react';
import "./Toolbar.css"
const Toolbar = () => {
    return (
    <>
    <nav className="desktop-nav">
        <ul className="desktop-nav__list">
            <li className="desktop-nav__list-item"><a href="/">About me</a></li>
            <li className="desktop-nav__list-item"><a href="/">My stack</a></li>
            <li className="desktop-nav__list-item"><a href="/">My projects</a></li>
            <li className="desktop-nav__list-item"><a href="/">Contact me</a></li>
        </ul>
    </nav>
    </>  
    );
}
 
export default Toolbar;