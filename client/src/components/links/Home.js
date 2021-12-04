import { createTheme, ThemeProvider} from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import CssBaseline from '@material-ui/core/CssBaseline';
import { Grid, Typography } from '@material-ui/core';
import PROFILE from "../../images/PROFILE.jpg";
import BookingCard from "../cards/BookingCard";
import LinkBar from "../Linkbar";
import useStyles from '../../styles';
import GoogleMap from "../GoogleMap";
import Address from "../Address";
import QuickLinks from "../QuickLinks";
import BusinessHrs from "../BusinessHrs";
import Copyright from "../Copyright";


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

const Home = () => {  
    const styles = useStyles();  
    
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            

                {/* top part of the page*/}
                
                <LinkBar />            
            
                {/* rest part of the page*/}                
                
                <Grid container spacing={0}>

                    {/* middle part of the page*/} 
                    <Grid item xs={9} md={8}>
                        <img alt="" src={PROFILE} height="80%" width="100%"/>
                    </Grid>
                    <Grid item xs={3} md={4} > 
                        <BookingCard />
                    </Grid>

                    {/* bottom part of the page*/}

                    <Grid item xs={3} md={3} className={styles.mapWrapper}> 
                        < GoogleMap />
                    </Grid>
                    <Grid item xs={3} md={3} className={styles.addressWrap}> 
                        <Address />
                    </Grid>
                    <Grid item xs={3} md={3} > 
                        <QuickLinks />
                    </Grid>
                    <Grid item xs={3} md={3} > 
                        <BusinessHrs />
                    </Grid>
                    <Grid item xs={12} md={12} > 
                        < Copyright />
                    </Grid>
                </Grid> 

                {/*bottom part of the page*/}
           

            
        </ThemeProvider>     
    )
}

export default Home;