import React from 'react';
import {Button, CardMedia, Divider, Grid, Paper, Typography} from "@mui/material";
import ControlledRadioButtonsGroup from "./RadioButtonOne";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {NavLink, useLocation} from "react-router-dom";

let renderCount = 0;
const theme = createTheme({
    components: {
        MuiCardMedia: {
            styleOverrides: {
                root: {
                    width: '100%',
                    height: 'auto'
                },
            },

        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    wordWrap: "break-word"
                },
            },
        },
    }
});

const BaseQuestion = () => {
    renderCount += 1;
    console.log(`BaseQuestion rendered:`,renderCount);

    const location = useLocation();
    const {question} = (location.state);

    console.log(question);
    return (
        <>
           <ThemeProvider theme={theme}>

                <Grid sx={{display: 'flex', justifyContent: 'space-between'}} item md={12}>
                    <Typography variant="h5">
                        {question.title}
                    </Typography>
                    <Button type="submit"
                            component={NavLink} to={{
                        pathname: '/newquestion',
                        state: {question}
                    }}
                            variant="contained"
                            size="small"
                    >
                        Edit question
                    </Button>
                </Grid>
                <Grid item sx={{display: 'flex'}}>
                    <Grid item xs={12} sm={8} md={8} lg={8}>
                        <Grid item>
                            <Typography variant="h7">
                                {question.description}
                            </Typography>
                            <Paper sx={{display: 'flex', flexDirection: 'column'}} elevation={2}>
                                <Typography sx={{mt: 2, p: 2}} variant="h5">
                                    Variants
                                </Typography>
                                <Typography sx={{mt: 2, pl: 2}} variant="h7">
                                    Choose one variant
                                </Typography>
                                <Divider sx={{mt: 2, mb: 2}} variant="middle"/>
                                <ControlledRadioButtonsGroup/>
                                <Button type="submit" variant="contained" size="small"
                                        component="span">
                                    Submit answer
                                </Button>
                            </Paper>
                        </Grid>
                    </Grid>
                    <Grid xs={12} sm={4} md={4} lg={4} item>
                        {question.images.map((item) => (

                            <CardMedia
                                key={item.image}
                                height="312"
                                component="img"
                                image={item.image}
                                alt="Cap image"
                            />
                        ))}
                    </Grid>
                </Grid>
            </ThemeProvider>

        </>
    )
};

export default BaseQuestion;