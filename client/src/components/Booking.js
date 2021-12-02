import React from 'react';
import { Link } from "react-router-dom";

const Booking = () => {
    return (
        <>
        <h4>Book an Appointment</h4>
        
        
            <Link to="/NewPatients" color="inherit"
            > New Patient </Link> 

            <Link to="/OldPatients" color="inherit"
            > Old Patient </Link> 
        </>
    )
}

export default Booking;