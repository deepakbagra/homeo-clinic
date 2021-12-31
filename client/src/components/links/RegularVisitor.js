import React from 'react';
import LinkBar from '../Linkbar';
import Footer from '../Footer';
import { createTheme, ThemeProvider} from "@material-ui/core/styles";
import { CssBaseline, Paper } from '@material-ui/core';
import useStyle from '../../styles';
import SignInForm from '../forms/SignInForm';

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
    const styles = useStyle();
    
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>      
            <LinkBar /> 

            <Paper className={styles.signInPageWrap}>
                <SignInForm/>
            </Paper>

            
            <Footer />
        </ThemeProvider > 
    )
}

export default RegularVisitor;
