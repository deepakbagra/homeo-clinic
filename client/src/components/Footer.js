import { Container, Typography, AppBar, Toolbar } from "@material-ui/core";

const Footer = () => {
    return (
        <AppBar style={{ top: '25em' }} position='relative' height='8em'>
          <Container maxWidth="sm">
            <Toolbar>       
                <Typography variant='body2' color='black' align='center'>
                    {'Copyright © '}
                    {new Date().getFullYear()}
                    . Dr. Reena Homeo-Clinic.All Rights Reserved.                    
                </Typography>
            </Toolbar> 
        </Container>
        </AppBar>
    );
}

export default Footer;