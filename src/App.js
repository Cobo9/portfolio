import './App.css';
import React from 'react';
import Navigation from "./Navigation/Navigation"
import Header from "./Header/Header"
import {BrowserRouter as Router} from "react-router-dom"
function App() {
  

  return (
    <Router>
    <Navigation/>
    <Header/>
    </Router>
  );
}

export default App;
