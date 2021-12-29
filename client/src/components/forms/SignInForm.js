import { Button, Typography, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import useStyle from '../../styles.js';
import axios from 'axios';

const SignInForm =  () => {

    // defining style classes
    const styles = useStyle();

    // defining form fileds states
    const [state, setState] = useState({        
        email: "",        
        password: "",        
    });

       
    const onChange = (e) => {
        setState({   
            ...state,         
            [e.target.name]: e.target.value
        });
    }
        
    // updating states into database on Sign-in form submission event
    const onSubmit = (e) => {
        e.preventDefault();
       
        const signInForm = state;
        
        // posting to database
        console.log(signInForm);

        // posting form data to the server if no input error
        axios.post('http://localhost:9000/patients/signIn', signInForm)
        .then(res => alert(res.data))
        .catch(err => console.log(err));            

        // setting form field blank after submitting
        setState({            
            email: "",                
            password: "",             
        });
        
        // directing to Sign-in page
        window.location.href = "/Appointments/Book-Appointment";
    }
   
    return (
        
        <form

        noValidate
        autoComplete="off"
        className={styles.SignInFormWrap} >
            
            <Typography variant='body1' gutterBottom >
                Please login to book an appointment 🔐
            </Typography>
            
            

            <TextField size='small'
                label="email"                            
                variant="outlined"
                required
                name="email"
                value={state.email}         
                onChange={onChange}            
            />
            <TextField size='small'
                label="password"                            
                variant="outlined"
                required 
                name="password"
                value={state.password}         
                onChange={onChange}            
            /> 
            <Button
                type="submit"
                variant="contained"
                color='primary'                                                                        
                onClick={onSubmit}
                className={styles.formButton}                    
            >
                Sign-in
            </Button>            
        </form>
        
    );
}

export default SignInForm;