import React from 'react';
import LinkBar from '../Linkbar';
import Footer from '../Footer';
import { CssBaseline } from '@material-ui/core';
import { createTheme, ThemeProvider} from "@material-ui/core/styles";

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

const RegularVisitor = () => {
    
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>      
            <LinkBar /> 
            Regular Visitor
            <Footer />
        </ThemeProvider > 
    )
}

export default RegularVisitor;
