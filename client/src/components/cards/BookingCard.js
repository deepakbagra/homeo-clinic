import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core'
import onlineBook from '../../images/BOOKING-ONLINE.jpg';

// Google font style
const fontStyle = 'Poppins';

const BookingCard = () => {

  // inline style function
  const buttonWrap = {
    fontFamily: fontStyle,
    color:'white',
    fontWeight: 'bold',
    backgroundColor: 'blue',
  }
  
  return (
    <Card sx={{ maxWidth: 300 }} style={{backgroundColor: '#CBD4CD', height: '80%'}}>
      <CardMedia
        component="img"
        height='60%'
        image={onlineBook}
        alt="online booking"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{fontFamily:fontStyle}}>
        Online Appointment
        </Typography>        
      </CardContent>
      <CardActions >
        <Button href='/Appointments/SignUp' size="large" variant='contained' color='inherit'
          style={buttonWrap}>
          New Visitor
        </Button>
        <Button href='/Appointments/RegularVisitor' size="large" color='inherit'
          style={buttonWrap}>
          Regular Visitor</Button>
      </CardActions>
    </Card>
  );
}

export default BookingCard;