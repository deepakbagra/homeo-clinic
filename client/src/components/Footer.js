import { Container, Typography, AppBar, Toolbar } from "@material-ui/core";

const Footer = () => {
    return (
        <AppBar style={{ top: '40em', background: '#2E3B55' }} position='relative' height='10em'>
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