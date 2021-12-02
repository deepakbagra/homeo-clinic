import { Button, Grid, Typography, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import axios from 'axios';

const QueryForm = () => {

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

    const onChangeDob = (e) => {
        setState({   
            ...state,         
            dob: e.target.value
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

        const queryForm = {
            firstName: state.firstName,
            middleName: state.middleName,
            lastName: state.lastName,
            gender: state.gender,
            dob: state.dob,
            email: state.email,            
        }
        
        // posting to database
        console.log(queryForm);

        // valditating form
        let errMessages = handleValidation(queryForm);

        if (errMessages === "") {
            alert("Thank you for submitting your query");
        }
        else {
            alert(errMessages);
        }
        

        axios.post('http://localhost:9000/patients/add', queryForm)
            .then(res => console.log(res.data))
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

   
    return (
        //< ValidatorForm ref="form" onSubmit={onSubmit} onError={errors => console.log(errors)}>
            <form noValidate autoComplete="off">
                <Grid container spacing={1}>
                    <Grid item xs={10} md={12}>
                        <Typography variant="h6" gutterBottom>
                            Submit your query
                        </Typography>
                    </Grid>

                    <Grid item xs={10} md={12}>
                        <TextField                             

                            label="first-name"                            
                            variant="outlined"
                            required
                            fullWidth
                            name="first-name"
                            value={state.firstName}           
                            onChange={onChangeFirstName}            
                        />
                    </Grid>

                    <Grid item xs={10} md={12}>
                        <TextField

                            label="middle-name"                            
                            variant="outlined"                            
                            fullWidth
                            name="middle-name"
                            value={state.middleName}           
                            onChange={onChangeMiddleName}            
                        />
                    </Grid>

                    <Grid item xs={10} md={12}>
                        <TextField

                            label="last-name"                            
                            variant="outlined"
                            required                            
                            fullWidth
                            name="last-name"
                            value={state.lastName}           
                            onChange={onChangeLastName}            
                        />
                    </Grid>

                    <Grid item xs={10} md={12}>
                        <TextField

                            label="gender"                            
                            variant="outlined"
                            required                            
                            fullWidth
                            name="gender"
                            value={state.gender}           
                            onChange={onChangeGender}            
                        />
                    </Grid>

                    <Grid item xs={10} md={12}>
                        <TextField

                            label="dob"                            
                            variant="outlined"                                                        
                            fullWidth
                            name="dob"
                            value={state.dob}           
                            onChange={onChangeDob}            
                        />
                    </Grid>                    

                    <Grid item xs={10} md={12}>
                        <TextField

                            label="email"                            
                            variant="outlined"
                            required                          
                            fullWidth
                            name="Email"
                            value={state.email}         
                            onChange={onChangeEmail}            
                        />
                    </Grid>

                    {/* <Grid item xs={10} md={12}>
                        <TextField

                            label="message"
                            id="outlined-controlled"
                            variant="outlined"
                            required
                            name="Message"
                            fullWidth
                            value={state.message}
                            multiline         
                            onChange={onChangeMessage}            
                        />
                    </Grid> */}
                    <Button
                        type="submit"
                        variant="contained"
                        color="inherit"
                        onClick={onSubmit}                        
                    >
                        Submit
                    </Button>

                </Grid>
            </form>
        //</ValidatorForm>
        
    );
}

export default QueryForm;