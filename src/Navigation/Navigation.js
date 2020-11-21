
import React, { useState } from 'react';
import "./Navigation.css"
import Burger from "./Burger/Burger"
import SideMenu from "./SideMenu/SideMenu"
const Navigation = () => {
    const [isActive, setIsActive] = useState(false)
    const handleBurger = () => setIsActive(prevState=>!prevState)
    return (
    <>
     <nav className="navbar">
        <Burger isActive={isActive} setIsActive={handleBurger}/>
        <SideMenu isActive={isActive}/>
     </nav>
    </>  
    );
}
 
export default Navigation;