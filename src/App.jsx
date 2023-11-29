import {useState} from 'react'
import './App.css';
import Circle from "./components/Circle.jsx";
import Info from "./components/Info.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";

function App() {

    return (
        <>
            <div className="circle-container">
                <Circle position="left"/>
                <Circle position="right"/>
            </div>
            <Info/>
            <About/>
            <Skills/>
            <Portfolio/>
        </>
    )
}

export default App
