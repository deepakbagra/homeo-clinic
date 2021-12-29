import { Box } from "@material-ui/core";

const Footer = () => {
    return (
        <Box style={{textAlign:'center'}}
            sx={{height:'4em',
                 background: '#2E3B55',
                 color: 'white',
                }}>
            <br/>
                {new Date().getFullYear()}  
            {'Copyright © '}
                | Dr. Reena Homeo-Clinic | All Rights Reserved.
        </Box>
        
    );
}

export default Footer;