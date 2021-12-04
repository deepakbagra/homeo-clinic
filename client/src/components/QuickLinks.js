import { Typography, Button } from "@material-ui/core";

const QuickLinks = () => {
    return (
        <Typography variant='h5' align='center' gutterBottom >            
            Quick Links
            <Typography variant='body2'>
                <br/><Button href='/Home' color='secondary'>HOME</Button>
                <br/><Button href='/About' color='secondary'>ABOUT</Button>
                <br/><Button href='/Gallary' color='secondary'>GALLARY</Button>
            </Typography>
           
        </Typography>
    );
}

export default QuickLinks;
