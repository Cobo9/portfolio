import React from 'react';
import "./Navbar.css"
import Toolbar from "../Toolbar/Toolbar"
import Burger from "../Burger/Burger"
const Navbar = ({isActive, setIsActive}) => {
    return (
    <div className="navbar">
        <Burger isActive={isActive} setIsActive={setIsActive} />
        <Toolbar/>
    </div>  
    );
}
 
export default Navbar;