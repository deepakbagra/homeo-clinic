import { Button, Grid, Typography, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import axios from 'axios';

const QueryForm = () => {

    // defining form fileds states
    const [state, setState] = useState({
        firstName: "",        
        lastName: "",        
        email: "",
        message: "",        
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
        if (fields.email === "") { 
            errMessages += "email cannot be empty!\n";
            
        }
        if (fields.message === "") { 
            errMessages += "message cannot be empty!\n";
            
        }
        return errMessages;
    }    

    const onChangeFirstName = (e) => {
        setState({   
            ...state,         
            firstName: e.target.value
        });
    }

    const onChangeLastName = (e) => {
        setState({   
            ...state,         
            lastName: e.target.value
        });
    }

    const onChangeEmail = (e) => {
        setState({
            ...state,
            email: e.target.value
        });
    }

    const onChangeMessage = (e) => {
        setState({
            ...state,
            message: e.target.value
        });
    }

    
    // updating states into database on form submission event
    const onSubmit = (e) => {
        e.preventDefault();       

        const queryForm = {
            firstName: state.firstName,            
            lastName: state.lastName,            
            email: state.email,
            message: state.message,           
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
        

        axios.post('http://localhost:9000/query/add', queryForm)
            .then(res => console.log(res.data))
            .catch(err => console.log(err)); 

        // setting form field blank after submission
        setState({
            firstName: "",            
            lastName: "",            
            email: "",
            message: "",             
        })
    }

   
    return (
        
            <form noValidate autoComplete="off">
                <Grid container spacing={2}>
                    <Grid item xs={10} md={12}>
                        <Typography variant="h6" gutterBottom style={{marginTop:'10%'}}>
                            Submit your query here
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

                            label="email"                            
                            variant="outlined"
                            required                          
                            fullWidth
                            name="Email"
                            value={state.email}         
                            onChange={onChangeEmail}            
                        />
                    </Grid>

                    <Grid item xs={10} md={12} >
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
                    </Grid>
                    
                    <Button style={{marginTop: '10%'}}
                        type="submit"
                        variant="contained"
                        color='secondary'                        
                        onClick={onSubmit}                        
                    >
                        Submit
                    </Button>
                    

                </Grid>
            </form>        
        
    );
}

export default QueryForm;