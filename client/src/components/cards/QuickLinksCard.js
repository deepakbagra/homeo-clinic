import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core'
const QuickLinksCard = () => {
    return (
        <Card sx={{ maxWidth: 300 }} style={{backgroundColor: '#CBD4CD'}}>            
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Quick Links
                </Typography>                
            </CardContent>
            <CardActions>
                <Button size="small" color='secondary'>About US</Button>
                <Button size="small" color='secondary'>Contact US</Button>
                <Button size="small" color='secondary'>Gallary</Button>
                <Button size="small" color='secondary'>About US</Button>
                <Button size="small" color='secondary'>Contact US</Button>
                <Button size="small" color='secondary'>Gallary</Button>
            </CardActions>
    </Card>
    );
}

export default QuickLinksCard;