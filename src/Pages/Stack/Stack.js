import React from 'react';
import Card from "../../Components/Card"
import "./Stack.css"
import {FaHtml5, FaCss3Alt, FaJsSquare, FaReact} from 'react-icons/fa';
const Stack = () => {

    return (<> 
    <Card>
        <div className="stack__container">

        
        <div className="stack__text">
        <h2>My Stack</h2>
        <p className="description">Tools I use in my projects</p>
        <div className="icons_container">
            <div className="icon_box">
                <FaHtml5 className="icon" style={{color:"e34f26"}}/>    
                <p className="icon_description">I try to stick to conventions when it comes to marking the app.</p>
            </div>
            <div className="icon_box">
                <FaCss3Alt className="icon" style={{color:"2965f1"}}/>
                <p className="icon_description">My current focus is Responsive Web Design and animations.</p>
            </div>
            <div className="icon_box">
                <FaJsSquare className="icon" style={{color:"f0db4f"}}/> 
                <p className="icon_description">I try to grasp the weird parts about this language including truthy and falsy values.</p>
            </div>
            <div className="icon_box">
                <FaReact className="icon" style={{color:"61DBFB"}}/>
                <p className="icon_description">My favourite framework so far. I use it very often, currently I'm studying Context API and React Router.</p>
            </div>
            
            
            
            
        </div>
        </div>
        </div>
    </Card>
    </> );
}
 
export default Stack;