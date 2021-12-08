import useStyle from "../styles";
import { Toolbar, Typography, AppBar, Button } from '@material-ui/core';
import LOGO from '../images/LOGO.png';


const LinkBar = () => {
    const styles = useStyle();
    
    return (
        
        <AppBar position='static' color='primary'>
            <Toolbar style={{height:'5em'}} >
                <img alt="" className={styles.image} src={LOGO} height="60" />

                <Typography className={styles.header} variant="h5">Dr Reena Homeo-Clinic
                </Typography>

                <Button href="/Appointments" className={styles.header } 
                > Book Appointment </Button>

                <Button href="/Home" className={styles.linkWrap} 
                > Home </Button> 

                <Button href="/About" className={styles.linkWrap}
                > About </Button>                                            

                <Button href="/Gallary" className={styles.linkWrap}
                > Gallary </Button> 

                <Button href="/Contact" className={styles.linkWrap}
                > Contact </Button> 
            </Toolbar> 
        </AppBar>         
    )
}

export default LinkBar;