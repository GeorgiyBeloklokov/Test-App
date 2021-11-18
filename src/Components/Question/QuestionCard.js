import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function QuestionCard({question}) {

    return (

            <Card elevation={3}  >
            <CardMedia
                component="img"
                height="130"
                image= "https://adrive.by/WebFiles/About/AboutImg4.jpg"


                alt="Images Cap"
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    Base Question
                </Typography>
                <Typography variant="body4" color="text.secondary">
                   First question
                </Typography>

            </CardContent>
            <CardActions>
                <Button    type="submit" variant="contained" size="small"
                                    component="span">
                Take test
            </Button>
            </CardActions>
        </Card>
    );
}


