import { createTheme, ThemeProvider} from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import { Grid } from '@material-ui/core';
import PROFILE from "../../images/PROFILE.jpg";
import LinkBar from "../Linkbar";
import useStyles from '../../styles';
import GoogleMap from "../GoogleMap";
import Address from "../Address";
import QuickLinks from "../QuickLinks";
import BusinessHrs from "../BusinessHrs";
import Footer from "../Footer";
import QueryForm from "../forms/QueryForm";


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
                
                <Grid container spacing={2}>

                    {/* middle part of the page*/} 
                    {/* <Grid item xs={8} md={9}>
                        <img alt="" src={PROFILE} width='90%' height='80%'/>
                    </Grid> */}
                    <Grid item xs={8} md={8}>
                        <img alt="" src={PROFILE} width='100%' height='80%'/>
                    </Grid>
                    <Grid item xs={4} md={4}>
                        <QueryForm className={styles.queryFormWrap}/>
                    </Grid>
                    
                    {/* bottom part of the page*/}
                    
                    <Grid item xs={3} md={4} className={styles.addressWrap} > 
                        <Address />
                    </Grid>
                    <Grid item xs={3} md={4} > 
                        <QuickLinks />
                    </Grid>
                    <Grid item xs={3} md={4} > 
                        <BusinessHrs />
                    </Grid>
                    <Grid item xs={10} md={12} > 
                        < GoogleMap />
                    </Grid>
                    <Grid item xs={12} md={12} style={{marginTop: '520px'}} >
                        <Footer />  
                    </Grid>           
                </Grid> 
                
        </ThemeProvider>     
    )
}

export default Home;