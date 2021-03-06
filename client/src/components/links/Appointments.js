import React from 'react';
import LinkBar from '../Linkbar';
import Footer from '../Footer';
import { Grid, CssBaseline } from '@material-ui/core';
import { createTheme, ThemeProvider} from "@material-ui/core/styles";
import CallingCard from '../cards/CallingCard';
import BookingCard from '../cards/BookingCard';

// custome theme
const theme = createTheme({
    palette: {
        primary: {
            main: '#00695f',                                  
        }, 
        secondary: {
            main: '#C70411',
        }      
   },
});

const Appointments = () => {
    
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>      
            <LinkBar /> 
            <Grid container>
                <Grid item xs={6} md={6}>                    
                 <CallingCard/>
                </Grid>
                <Grid item xs={6} md={6}>                    
                 <BookingCard/>
                </Grid>                      
            </Grid>
            <Footer />
        </ThemeProvider > 
    )
}

export default Appointments;
