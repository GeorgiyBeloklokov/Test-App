import React from 'react';
import {Button, CardMedia, Container, Divider, Grid, Paper, Typography} from "@mui/material";
import ControlledRadioButtonsGroup from "./RadioButtonOne";


const BaseQuestion = () => {
    return (
        <div>
            <Paper>
                <Container container  maxWidth={"lg"}>
                    <Grid container >
                        <Grid sx={{display: 'flex', justifyContent: 'space-between'}} item md={12}>
                            <Typography variant="h5">
                                Base question
                            </Typography>
                            <Button size='small' variant="contained">Edit question</Button>
                        </Grid>

                        <Grid item sx={{mt: 4}} md={7}>
                            <Typography  variant="h7">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium assumenda
                                blanditiis culpa deleniti earum, enim exercitationem fugiat, ipsam ipsum natus neque
                                omnis optio perspiciatis quaerat quia quis quo quod recusandae sint tempora veniam
                                voluptas voluptatem voluptates voluptatibus! Consectetur cupiditate debitis distinctio,
                                doloremque facere iure labore molestiae quas quos suscipit.Consectetur cupiditate
                                debitis distinctio,
                                doloremque facere iure labore molestiae quas quos suscipit.
                            </Typography>
                            <Paper elevation={2} >
                                <Typography sx={{mt: 2, p:2}} variant="h5">
                                    Variants
                                </Typography>
                                <Typography sx={{mt: 2, pl:2}} variant="h7">
                                    Choose one variant
                                </Typography>

                                <Divider sx={{mt: 2, mb:2}} variant="middle" />
                                <ControlledRadioButtonsGroup  />
                                <Button sx={{display: 'flex'}} type="submit" variant="contained" size="small"
                                         component="span">
                                    Submit answer
                                </Button>
                            </Paper>
                        </Grid>
                        <Grid sx={{mt: 4}} >
                            <CardMedia
                                width="400"
                                component="img"
                                height="240"
                                image="/static/images/cards/contemplative-reptile.jpg"
                                alt="green iguana"
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Paper>
        </div>
    );
};

export default BaseQuestion;