import { React, useState } from 'react';
import axios from 'axios';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { Select, FormControl, InputLabel,
     MenuItem, Typography, Button } from '@material-ui/core';
import useStyle from '../../styles';
const BookingForm = () => {
    const styles = useStyle();

    // defining form fileds states
    const [state, setState] = useState({
        bookDate: null,
        bookTime: '',
    });

    const onChange = (e) => {
        setState({   
            ...state,         
            [e.target.name]: e.target.value
        });
    }  
   
    // handle form validation
    const handleValidation = (fields) => {
        
        let errMessages = "";

        if (fields.bookDate === "") { 
            errMessages += "booking date cannot be empty!\n";            
        }
        if (fields.bookTime === "") { 
            errMessages += "booking time cannot be empty!\n";            
        }
        
        return errMessages;
    }
    
    const onSubmit = (e) => {
        e.preventDefault();

        const bookForm = state;
        
        // posting to database
        console.log(bookForm);

        // valditating form
        let errMessages = handleValidation(bookForm);

        // posting form data to the server if no input error
        if (errMessages === "") {

            axios.post('http://localhost:9000/appointments/bookAppointment', bookForm)
            .then(res => alert(res.data))
            .catch(err => console.log(err));
           
            // setting form field blank after submitting
            setState({
                bookDate: "",
                bookTime: "",                             
            });
            alert("Your appointment is confirmed");        
            
            // directing to Sign-in page           
            window.location.href = "/";                                 
        }
        else {
            alert(errMessages);
        }     
    }

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <form
            noValidate
            autoComplete="off"
            className={styles.SignInFormWrap} >
                
                <Typography variant='body1' gutterBottom >
                     Book an appointment ⏰
                </Typography>

                {/* input appointment date from date picker */}

                <KeyboardDatePicker
                autoOk
                disableToolbar
                disablePast
                mask    
                inputVariant='outlined'           
                format='dd/MM/yyyy'
                placeholder='Appointment Date'
                variant='dialog'
                margin='normal'
                id='date-picker'                
                label='Appointment Date'
                name='bookDate'
                value={state.bookDate}
                required
                onChange={onChange}                
                />

                {/* input appointment time from date picker */}

                <FormControl className={styles.bookingTimeSlot}>
                    <InputLabel
                         id='Appointment-time'
                         >Appointment-time</InputLabel>
                    <Select 
                        labelId='Appointment-time'
                        id='appointment-time'
                        name='bookTime'
                        value={state.bookTime}
                        label='Appointment-time'                        
                        onChange={onChange}
                    >
                        <MenuItem value={31/12/2022}>10:00 - 11:00 am</MenuItem>
                        </Select>
                </FormControl>
            
                {/* submit button for appointment booking */}

                <Button
                    type="submit"
                    variant="contained"
                    color='primary'                                                                        
                    onClick={onSubmit}
                    className={styles.formButton}                    
                >
                    Book Appointment
                </Button>            
            </form>
            
        </MuiPickersUtilsProvider>
        
    
    )
}

export default BookingForm
