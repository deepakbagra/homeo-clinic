import { Container, Typography } from "@material-ui/core";

const Copyright = () => {
    return (
        <Container >
            <Typography variant='body2' color='secondary' align='center'>
            {'Copyright © '}
            {new Date().getFullYear()}
            . Dr. Reena Homeo-Clinic.
            All Rights Reserved.
            </Typography>
        </Container>
    );
}

export default Copyright;