import React from 'react';
import {Button, CardMedia, Divider, Grid, Paper, Typography} from "@mui/material";
import ControlledRadioButtonsGroup from "./RadioButtonOne";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {useLocation} from "react-router-dom";

const theme = createTheme({
    components: {
        MuiCardMedia: {
            styleOverrides: {
                root: {
                    width: '100%',
                    height: '100%'
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
debugger;

    const location = useLocation();
    const {description, title,images}=(location.state.question);

            return (
                <>
                    <ThemeProvider theme={theme}>
                        <Grid sx={{display: 'flex', justifyContent: 'space-between'}} item md={12}>
                            <Typography variant="h5">
                                {title}
                            </Typography>
                            <Button size='small' variant="contained">Edit question</Button>
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
                                        <ControlledRadioButtonsGroup/>
                                        <Button type="submit" variant="contained" size="small"
                                                component="span">
                                            Submit answer
                                        </Button>
                                    </Paper>
                                </Grid>
                            </Grid>
                            <Grid xs={12} sm={4} md={4} lg={4} item>
                                {images.map((item) => (

                                    <CardMedia
                                        component="img"
                                        image={item.image}
                                        alt="Cap image"
                                    />
                                ))};
                            </Grid>
                        </Grid>
                    </ThemeProvider>
                </>
            )
};

export default BaseQuestion;