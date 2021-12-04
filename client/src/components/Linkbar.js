import { Link } from "react-router-dom";
import useStyle from "../styles";
import { Toolbar, Typography, AppBar } from '@material-ui/core';
import LOGO from '../images/LOGO.png';


const LinkBar = () => {
    const styles = useStyle();
    
    return (
        
        <AppBar position='static' color='primary'>
            <Toolbar >
                <img alt="" className={styles.image} src={LOGO} height="60" />

                <Typography className={styles.header} variant="h5">Dr Reena Homeo-Clinic
                </Typography>

                <Link to="/Home" className={styles.linkWrap} 
                > Home </Link> 

                <Link to="/About" className={styles.linkWrap}
                > About </Link>                                            

                <Link to="/Gallary" className={styles.linkWrap}
                > Gallary </Link> 

                <Link to="/Contact" className={styles.linkWrap}
                > Contact </Link> 
            </Toolbar> 
        </AppBar>         
    )
}

export default LinkBar;