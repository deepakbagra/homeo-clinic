import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core'
const PrivacyCard = () => {
    return (
        <Card sx={{ maxWidth: 300 }} style={{backgroundColor: '#CBD4CD'}}> 
            <CardActions>
                <Button size="small" color='secondary'>Privacy Policy</Button>                
            </CardActions>
    </Card>
    );
}

export default PrivacyCard;