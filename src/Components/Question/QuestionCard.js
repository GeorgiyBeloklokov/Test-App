import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import {NavLink} from "react-router-dom";
import {Grid} from "@mui/material";
import BaseQuestion from "../BaseQuestion/BaseQuestion";
import {useDispatch} from "react-redux";

const theme = createTheme({
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    wordWrap: "break-word"
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    width: "auto",
                    margin: 10,

                },
            },
        },
    },
});


export default function QuestionCard({question}) {
    const dispatch = useDispatch();

    /* const showQuestion =(question) => {
         dispatch(BaseQuestion(question))

     }*/


    return (
        <>
            {question.images.map(item => (
                    <ThemeProvider theme={theme}>
                        <Grid key={question.id} sx={{display: "flex", justifyContent: "space-between"}} xs={12} sm={6}
                              md={4} lg={2} item>
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
                                    <Typography variant="body4" color="text.secondary">
                                        {question.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button type="submit"
                                        /*onClick={() =>showQuestion(question)}*/
                                            component={NavLink} to={{
                                        pathname: '/basequestion',
                                        state: {
                                            question
                                        }}}
                                            variant="contained"
                                            size="small"
                                    >
                                        Take test
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </ThemeProvider>
                )
            )}
        </>
    )
}


