import React from 'react';
import LinkBar from '../Linkbar';
import Footer from '../Footer';
import { Grid, Typography, Button, CssBaseline, Paper } from '@material-ui/core';
import { createTheme, ThemeProvider} from "@material-ui/core/styles";
import AccessAlarm from '@material-ui/icons-material';
// custome theme
const theme = createTheme({
    palette: {
        primary: {
            main: '#00695f',
            dark: '#000000',                       
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
                    <Paper variant='elevation'>
                        <Typography variant='overline' color='primary'>
                            Book appointment by calling to +918957441555
                        </Typography>
                    </Paper>
                </Grid>                    
            </Grid>

            <Footer />
           
        </ThemeProvider >      
            
            
        
    )
}

export default Appointments;
