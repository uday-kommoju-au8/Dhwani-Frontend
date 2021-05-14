import './App.css';
import Home from "./componenets/home"
import About from "./componenets/about"
import {Route} from "react-router-dom"
import React from "react"
function App() {
  return (
    <>
    <Route exact path="/" component={Home}/>
    <Route exact path="/about" component={About}/>
    
    </>
  );
}

export default App;
