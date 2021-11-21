import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Grid} from "@mui/material";

export default function QuestionCard({question}) {




    return (
        <>
        {question.images.map(item =>(
        <Grid  key={question.id} sx={{display:"flex",  justifyContent:"space-between"}} xs={10} sm={6} md={3} lg={2} item>
            <Card elevation={3}>
                <CardMedia
                    component="img"
                    height="150"

                    image={item.image}


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
                    <Button type="submit" variant="contained" size="small"
                            component="span">
                        Take test
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )

            )}
        </>
            )

}


