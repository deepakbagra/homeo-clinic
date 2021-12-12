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
        return errMessages;
    }    

    const onChangeFirstName = (e) => {
        setState({   
            ...state,         
            firstName: e.target.value
        });
    }

    const onChangeMiddleName = (e) => {
        setState({   
            ...state,         
            middleName: e.target.value
        });
    }

    const onChangeLastName = (e) => {
        setState({   
            ...state,         
            lastName: e.target.value
        });
    }

    const onChangeGender = (e) => {
        setState({   
            ...state,         
            gender: e.target.value
        });
    }

    const onChangeEmail = (e) => {
        setState({
            ...state,
            email: e.target.value
        });
    }

    
    // updating states into database on form submission event
    const onSubmit = (e) => {
        e.preventDefault();       

        const signUpForm = {
            firstName: state.firstName,
            middleName: state.middleName,
            lastName: state.lastName,
            gender: state.gender,
            dob: state.dob,
            email: state.email,            
        }
        
        // posting to database
        console.log(signUpForm);

        // valditating form
        let errMessages = handleValidation(signUpForm);

        // posting form data to the server if no input error
        if (errMessages === "") {
            
            //alert("Thank you for sign up");

            axios.post('http://localhost:9000/patients/signUp', signUpForm)
            .then(res => alert(res.data))
            .catch(err => console.log(err));
            

            // setting form field blank after submitting
            setState({
                firstName: "",
                middleName: "",
                lastName: "",
                gender: "",
                dob: "",
                email: "",             
            })
            
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
            
            <Typography variant="h6" gutterBottom >
                Please register your detail here
            </Typography>
            
            <TextField                             

                label="first-name"                            
                variant="outlined"
                required
                fullWidth
                name="first-name"
                value={state.firstName}           
                onChange={onChangeFirstName}            
            />
        

        
            <TextField

                label="middle-name"                            
                variant="outlined"                            
                fullWidth
                name="middle-name"
                value={state.middleName}           
                onChange={onChangeMiddleName}            
            />
        

        
            <TextField

                label="last-name"                            
                variant="outlined"
                required                            
                fullWidth
                name="last-name"
                value={state.lastName}           
                onChange={onChangeLastName}            
            />
        

        
            {/* <TextField

                label="gender"
                select                                             
                variant="outlined"
                required                            
                fullWidth
                name="gender"
                value={state.gender}           
                onChange={onChangeGender}            
            >
                <MenuItem value={'M'}>M</MenuItem>
                <MenuItem value={'F'}>F</MenuItem>
            </TextField> */}
            
            <FormControl>
                <FormLabel>Gender</FormLabel>
                <RadioGroup row 
                    name='gender'
                    value={state.gender}
                    onChange={onChangeGender}>

                    <FormControlLabel value='male' control={<Radio/>} label='Male'/>
                    <FormControlLabel value='female' control={<Radio/>} label='Female'/>
                    <FormControlLabel value='other' control={<Radio/>} label='Other'/>
                
                </RadioGroup>
            </FormControl>
        

        
            {/* <TextField

                label="dob"                            
                variant="outlined"                                                        
                fullWidth
                name="dob"
                value={state.dob}           
                onChange={onChangeDob}            
            /> */}

            <DatePickers />
        
            <TextField

                label="email"                            
                variant="outlined"
                required                          
                fullWidth
                name="Email"
                value={state.email}         
                onChange={onChangeEmail}            
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