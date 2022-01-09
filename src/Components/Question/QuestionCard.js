import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useNavigate} from "react-router-dom";
import {Grid} from "@mui/material";


/*const theme = createTheme({
    components: {
        /!*MuiTypography: {
            styleOverrides: {
                root: {
                    textSize: 5,
                    textOverflow: 'clip',


                },
            },
        },*!/

        MuiCard: {
            styleOverrides: {
                root: {
                    width: "100%",
                    height: "auto",


                },
            },
        },
        MuiCardMedia: {
            styleOverrides: {
                root: {
                    width: "100%",
                    height: "auto",


                },
            },
        },
        /!*MuiCardContent: {
            styleOverrides: {
                root: {

                    height: "auto",


                },
            },
        },*!/

    },
});*/

const QuestionCard = ({question}) => {
    const navigate = useNavigate();

    return (
        <>
                   {/* <ThemeProvider key={question.id} theme={theme}>*/}
                        <Grid  md={12} sm={12} xs={12} item>

                            <Card elevation={3}>

                                <CardMedia
                                    component="img"
                                    image={question.image}
                                    alt="Images Cap"
                                />
                                <CardContent  >
                                    <Typography  gutterBottom variant="h6"  component="div" sx={{
                                        display: '-webkit-box',
                                        overflow: 'hidden',
                                        WebkitBoxOrient: 'vertical',
                                        WebkitLineClamp: 3,
                                    }}  >
                                        {question.title}
                                    </Typography>

                                    <Typography variant="body4"  color="text.secondary" sx={{
                                        display: '-webkit-box',
                                        overflow: 'hidden',
                                        WebkitBoxOrient: 'vertical',
                                        WebkitLineClamp: 3,
                                    }}   >
                                        {question.description}
                                    </Typography>

                                    <CardActions>
                                        <Button type="submit"
                                                onClick={() => navigate(`/basequestion/${question.id}`) }
                                                variant="contained"
                                                size="small"
                                        >
                                            Take test
                                        </Button>

                                    </CardActions>
                                </CardContent>
                            </Card>

                        </Grid>
                    {/*</ThemeProvider>*/}
        </>
    );
};

export default QuestionCard;
