import { FormControl, Button, Typography, TextField, FormLabel, Radio, RadioGroup, FormControlLabel } from '@material-ui/core';
import React, { useState } from 'react';
import useStyle from '../../styles.js';
import DatePickers from '../DatePickers';
import axios from 'axios';


const SignUpForm =  () => {

    // defining style classes
    const styles = useStyle();

    // defining form fileds states
    const [state, setState] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        gender: "",
        dob: "",
        email: "",        
        password: "",        
    });

   // handle form validation
    const handleValidation = (fields) => {
        
        let errMessages = "";

        if (fields.firstName === "") { 
            errMessages += "first name cannot be empty!\n";            
        }
        if (fields.lastName === "") { 
            errMessages += "last name cannot be empty!\n";            
        }
        if (fields.gender === "") { 
            errMessages += "gender cannot be empty!\n";            
        }
        if (fields.email === "") { 
            errMessages += "email cannot be empty!\n";            
        }       
        if (fields.password === "") { 
            errMessages += "password cannot be empty!\n";            
        }
        return errMessages;
    } 
    
    const onChange = (e) => {
        setState({   
            ...state,         
            [e.target.name]: e.target.value
        });
    }

        
    // updating states into database on form submission event
    const onSubmit = (e) => {
        e.preventDefault();
       
        const signUpForm = state;
        
        // posting to database
        console.log(signUpForm);

        // valditating form
        let errMessages = handleValidation(signUpForm);

        // posting form data to the server if no input error
        if (errMessages === "") {

            axios.post('http://localhost:9000/patients/signUp', signUpForm)
            .then(res => alert(res.data))
            .catch(err => console.log(err));

            setState({
                firstName: "",
                middleName: "",
                lastName: "",
                gender: "",
                dob: "",
                email: "",        
                password: "",
            });
            
            // directing to Sign-in page
           // window.location.href = "/Appointments/SignIn";
                      
        }

        else {
            alert(errMessages);
        }       
    }
   
    return (
        
        <form

        noValidate
        autoComplete="off"
        className={styles.formWrap} >
            
            <Typography variant='body1' gutterBottom >
                Sign-up and then click 'Next' to proceed.. 📝
            </Typography>
            
            <TextField size='small' className={styles.textField}
                label="first-name"                            
                variant="outlined"
                required
                fullWidth
                name="firstName"
                value={state.firstName}           
                onChange={onChange}            
            />
            <TextField size='small'
                label="middle-name"                            
                variant="outlined"                            
                fullWidth
                name="middleName"
                value={state.middleName}           
                onChange={onChange}            
            />
            <TextField size='small'
                label="last-name"                            
                variant="outlined"
                required                            
                fullWidth
                name="lastName"
                value={state.lastName}           
                onChange={onChange}            
            />
            
            <FormControl>
                <FormLabel>Gender *</FormLabel>
                <RadioGroup row 
                    name='gender'
                    value={state.gender}
                    onChange={onChange}>

                    <FormControlLabel value='male' control={<Radio/>} label='Male'/>
                    <FormControlLabel value='female' control={<Radio/>} label='Female'/>
                    <FormControlLabel value='other' control={<Radio/>} label='Other'/>
                
                </RadioGroup>
            </FormControl>
            
            {/* calling datpicker component to pick date of birth */}
            <DatePickers />

            <TextField size='small'
                label="email"                            
                variant="outlined"
                required                          
                fullWidth
                name="email"
                value={state.email}         
                onChange={onChange}            
            />
            <TextField size='small'
                label="password"                            
                variant="outlined"
                required                          
                fullWidth
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
                SignUp
            </Button>            
        </form>
        
    );
}

export default SignUpForm;