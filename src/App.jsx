import {useState} from 'react'
import './App.css'
import Info from "./components/Info.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";

function App() {
    return (
        <>
            <Info/>
            <About/>
            <Skills/>
            <Portfolio/>
        </>
    )
}

export default App
