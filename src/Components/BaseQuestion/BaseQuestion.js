import React from 'react';
import {Button, CardMedia, Divider, Grid, Paper, Typography} from "@mui/material";
import ControlledRadioButtonsGroup from "./SelectVariants";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {NavLink, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import SelectVariants from "./SelectVariants";

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
    const questions = useSelector(state => state.questReducer.questions);

    renderCount += 1;
    console.log(`BaseQuestion rendered:`,renderCount);

    const location = useLocation();
    const {index,question} = (location.state);
    /*console.log(index,question);*/


    const {title,description,images,variants,id} = questions[index];

    return (
        <>
           <ThemeProvider theme={theme}>

                <Grid sx={{display: 'flex', justifyContent: 'space-between'}} item md={12}>
                    <Typography variant="h5">
                        {title}
                    </Typography>
                    <Button type="submit"
                            component={NavLink} to={{
                        pathname: '/newquestion',
                        state: {index}
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
                                {description}
                            </Typography>
                            <Paper sx={{display: 'flex', flexDirection: 'column'}} elevation={2}>
                                <Typography sx={{mt: 2, p: 2}} variant="h5">
                                    Variants
                                </Typography>
                                <Typography sx={{mt: 2, pl: 2}} variant="h7">
                                    Choose one variant
                                </Typography>
                                <Divider sx={{mt: 2, mb: 2}} variant="middle"/>
                                <SelectVariants  variants={variants} questId={id} />

                            </Paper>
                        </Grid>
                    </Grid>
                    <Grid xs={12} sm={4} md={4} lg={4} item>
                        {images.map((item) => (

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