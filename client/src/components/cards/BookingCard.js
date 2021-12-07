import * as React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core'
import onlineBook from '../../images/BOOKING-ONLINE.jpg';

const BookingCard = () => {
  return (
    <Card sx={{ maxWidth: 300 }} style={{backgroundColor: '#CBD4CD', height: '80%'}}>
      <CardMedia
        component="img"
        height='343'
        image={onlineBook}
        alt="online booking"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <Button size='large' href='/Booking'>Book Now</Button>
        </Typography>
        <Typography variant="body2">
           Currently we are accepting online bookings only.
        </Typography>
      </CardContent>
      <CardActions >
        <Button size="small" color='secondary'>New Visitor</Button>
        <Button size="small" color='secondary'>Regular Visitor</Button>
      </CardActions>
    </Card>
  );
}

export default BookingCard;