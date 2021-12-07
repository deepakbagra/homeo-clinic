import { Typography, Button } from "@material-ui/core";

const QuickLinks = () => {
    return (
        <Typography variant='h5' align='center' gutterBottom >            
            Quick Links
            <Typography variant='body2'>
                
                <br/><Button href='/Home' color='secondary'>HOME</Button>
                <br/><Button href='/About' color='secondary'>ABOUT</Button>
                <br/><Button href='/Contact' color='secondary'>CONTACT</Button>
                <br/><Button href='/Gallary' color='secondary'>GALLARY</Button>
                <br/><Button href='/PrivacyPolicy' color='secondary'>PRIVACY POLICY</Button>
                <br/><Button href='/Terms' color='secondary'>TERMS & CONDITION</Button>

            </Typography>
           
        </Typography>
    );
}

export default QuickLinks;
