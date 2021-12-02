import { createTheme, ThemeProvider} from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import CssBaseline from '@material-ui/core/CssBaseline';
import { Grid, Typography } from '@material-ui/core';
import PROFILE from "../../images/PROFILE.jpg";
import BookingCard from "../cards/BookingCard";
import LinkBar from "../Linkbar";
import useStyles from '../../styles';
import GoogleMap from "../GoogleMap";


// custome theme
const theme = createTheme({
    palette: {
        primary: {
            main: '#00695f',
            light: '#C2A116' ,           
        },
        secondary: {
            main: '#0044ff',            
        },
        
   },
});

const Home = () => {  
    const styles = useStyles();  
    
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{ bgcolor: 'primary.light' }}>

                {/* top part of the page*/}
                
                <LinkBar />            
            
                {/* rest part of the page*/}                
                
                <Grid container spacing={0}>

                    {/* middle part of the page*/} 
                    <Grid item xs={9} md={8}>
                        <img alt="" src={PROFILE} height="73%" width="100%"/>
                    </Grid>
                    <Grid item xs={3} md={4} > 
                        <BookingCard />
                    </Grid>

                    {/* bottom part of the page*/} 
                    <Grid item xs={4} md={4}  height='100%'> 
                        < GoogleMap className={styles.header} />
                    </Grid>
                    <Grid item xs={4} md={4} > 
                        B
                    </Grid>
                    <Grid item xs={4} md={4} > 
                        C
                    </Grid>
                </Grid> 

                {/*bottom part of the page*/}
            </Box>

            
        </ThemeProvider>     
    )
}

export default Home;