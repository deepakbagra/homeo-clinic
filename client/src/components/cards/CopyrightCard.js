import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core'
const CopyrightCard = () => {
    return (
        <Card sx={{ maxWidth: 300 }} style={{backgroundColor: '#CBD4CD'}}>            
            <CardContent>
                <Typography gutterBottom variant="body2" component="div">
                {'Copyright © '}
                {new Date().getFullYear()}
                </Typography>                
            </CardContent>
            
    </Card>
    );
}
export default CopyrightCard;