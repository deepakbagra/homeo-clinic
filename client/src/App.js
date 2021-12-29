import React from "react";
import About from "../src/components/links/About";
import Gallary from "../src/components/links/Gallary";
import Contact from "../src/components/links/Contact";
import Home from "../src/components/links/Home";
import Appointments from "./components/links/Appointments";
import { Route, Routes } from "react-router-dom";
import QueryForm from "./components/forms/QueryForm";
import NewVisitor from "./components/links/NewVisitor";
import RegularVisitor from "./components/links/RegularVisitor";
import BookAppointment from "./components/BookAppointment";


const App = () => {
    
    return (        

        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Home" element={<Home/>} />        
            <Route path="/About" element={<About/>} />
            <Route path="/Gallary" element={<Gallary/>} />
            <Route path="/Contact"element={<Contact/>} />
            <Route path="/Query"element={<QueryForm/>} /> 
            <Route path="/Appointments"element={<Appointments/>} />
            <Route path="/Appointments/SignUp"element={<NewVisitor/>} />            
            <Route path="/Appointments/SignIn"element={<RegularVisitor/>} />
            <Route path="/Appointments/Book-Appointment"element={<BookAppointment/>} />

        </Routes>
    );
}

export default App;