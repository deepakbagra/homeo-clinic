import { Box, Typography } from "@material-ui/core";
import useStyle from '../styles';

const Footer = () => {
    const classes = useStyle();

    return (
        <Box
            className={classes.footer}>
            <Typography className={classes.text}>
                {new Date().getFullYear()}  
                {'Copyright © '}
                | findmyage.netlify.app | All Rights Reserved.
            </Typography>
        </Box>
    )
}

export default Footer
