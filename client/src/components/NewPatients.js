import React from 'react';
import { Link } from "react-router-dom";

const NewPatients = () => {
    return (
        <>
        <h1>New Patient</h1>
        
            <Link to="/Home" color="inherit"
            > Home </Link> 
        </>
    )
}

export default NewPatients;