import React from "react";
import About from "../src/components/links/About";
import Gallary from "../src/components/links/Gallary";
import Contact from "../src/components/links/Contact";
import Home from "../src/components/links/Home";
import NewPatients from "../src/components/NewPatients";
import OldPatients from "../src/components/OldPatients";
import { Route, Routes } from "react-router-dom";

const App = () => {
    
    return (        

        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Home" element={<Home/>} />        
            <Route path="/About" element={<About/>} />
            <Route path="/Gallary" element={<Gallary/>} />
            <Route path="/Contact"element={<Contact/>} /> 
            <Route path="/NewPatients"element={<NewPatients/>} />
            <Route path="/OldPatients"element={<OldPatients/>} />                   
        </Routes>
    );
}

export default App;