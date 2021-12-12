import React from 'react';
import LinkBar from '../Linkbar';
import Footer from '../Footer';
import { CssBaseline, Paper } from '@material-ui/core';
import { createTheme, ThemeProvider} from "@material-ui/core/styles";
import SignUpForm from '../forms/SignUpForm';
import useStyle from '../../styles';

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

const NewVisitor = () => {
    const styles = useStyle();

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>      
            <LinkBar />
            <Paper className={styles.formPageWrap}  
            >
                <SignUpForm/>
            </Paper>
            <Footer />
        </ThemeProvider > 
    )
}

export default NewVisitor;
