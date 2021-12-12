import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import CallIcon from '../../images/CallAppointment.jpg';

// Google font style
const fontStyle = 'Poppins';

const CallingCard = () => {
    return (
        
        <Card style={{backgroundColor: '#CBD4CD', height: '80%'}}>
        <CardMedia
            component="img"
            height='60%'
            image={CallIcon}
            alt="online booking"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div" style={{fontFamily:fontStyle}}>
                Call on +918974535555 to book an appointment.
            </Typography>
            <Typography gutterBottom variant="body1" style={{fontFamily:fontStyle}}>
            Please call during business* hours only.
            </Typography>
            <Typography variant="body1" style={{fontFamily:fontStyle}}>
            *Business hours:
            </Typography>
            <Typography variant="body2" style={{fontFamily:fontStyle}}>
            Monday to Friday: 03:00pm - 8:30pm<br/>
            Saturday: 03:00pm - 6:30pm<br/>
            Sunday: Close
            </Typography>
        </CardContent>        
        </Card>
    )
}

export default CallingCard;
