import React from "react";
import { Container, Toolbar, Typography, AppBar, Link } from '@material-ui/core';

import LOGO from './images/LOGO.png';
import Post from "./components/post/Post";
import Form from "./components/form/Form";
import useStyles from './styles';

const App = () => {
    const styles = useStyles();
    return (
        <Container maxWidth='xl'>
            <AppBar className={styles.AppBar} position="relative">

                <Toolbar sx={{ justifyContent: 'space-between', overflowX: 'auto' }}>
                    <Typography variant="h5">Homeo+Clinic</Typography>
                    <img className={styles.image} src={LOGO} height="50" />                    
                        <Link 
                            variant="button"
                            href="#"
                            color="inherit"                                                                        
                        > <Typography className={styles.aboutUs}> About</Typography>                     
                        </Link>                  
                    
                </Toolbar>

                
            </AppBar>
            
        </Container> 
    );
}

export default App;