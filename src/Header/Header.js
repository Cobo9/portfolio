import React from 'react';
import "./Header.css"
import {Switch, Route} from "react-router-dom"
import Home from "../Pages/Home/Home"
import About from "../Pages/About/About"
import Stack from "../Pages/Stack/Stack"
import Projects from "../Pages/Projects/Projects"
import Contact from "../Pages/Contact/Contact"
const Header = () => {
    return (
        <header>
                <section className="image">
                    <Switch>
                        <Route path="/about" component={About}/>
                        <Route path="/stack" component={Stack}/>
                        <Route path="/projects" component={Projects}/>
                        <Route path="/contact" component={Contact}/>
                        <Route path="/" exact component={Home}/>
                    </Switch>



                </section>
                
        </header>


      );
}
 
export default Header;