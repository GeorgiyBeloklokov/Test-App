import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import { useNavigate} from "react-router-dom";
import {Grid} from "@mui/material";


const theme = createTheme({
    components: {
        /*MuiTypography: {
            styleOverrides: {
                root: {
                    textSize: 5,
                    textOverflow: 'clip',


                },
            },
        },*/

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
        /*MuiCardContent: {
            styleOverrides: {
                root: {

                    height: "auto",


                },
            },
        },*/

    },
});


const QuestionCard = ({question,index,loading}) => {

    let navigate = useNavigate();

    if (loading) {
        return <h2>Loading....</h2>
    }

    return (
        <div>
            {question.images.map(item => (
                    <ThemeProvider key={question.id} theme={theme}>
                        <Grid   item>
                            <Card elevation={3}>

                                <CardMedia
                                    component="img"
                                    image={item.image}
                                    alt="Images Cap"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div">
                                        {question.title}
                                    </Typography>

                                    <Typography variant="body4"  color="text.secondary">
                                        {question.description}
                                    </Typography>

                                    <CardActions>
                                        <Button type="submit"
                                                onClick={() => navigate(`/basequestion/${index}`) }

                                            /*component={NavLink} to={{
                                        pathname: '/basequestion',
                                        state: {index,question}
                                    }}*/
                                                variant="contained"
                                                size="small"
                                        >
                                            Take test
                                        </Button>

                                    </CardActions>
                                </CardContent>
                            </Card>
                        </Grid>
                    </ThemeProvider>
                )
            )}
        </div>
    );
};

export default QuestionCard;
