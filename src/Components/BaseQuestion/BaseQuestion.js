import React from 'react';
import {Button, CardMedia, Divider, Grid, Paper, Typography} from "@mui/material";
import SelectVariants from "./SelectVariants";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import { useNavigate, useParams} from "react-router-dom";
import {useSelector} from "react-redux";

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

    // Render component control
    renderCount += 1;
    console.log(`BaseQuestion rendered:`, renderCount);

    // Go to page for edit question
    const navigate = useNavigate();

    // Get question id from URL
    const params = useParams();
    console.log(params);
// Find and get question in state
    /*const question = useSelector(state => state.questReducer.questions.find(item => item.id === params.id));*/
    const question = useSelector(state => state.questReducer.questions[params.index]);
    console.log('test selector questions + params', question);

//Destructure question for print
    const {title, description, images, variants, id} = question;


    return (
        <div>
            <ThemeProvider theme={theme}>
                <Grid sx={{display: 'flex', justifyContent: 'space-between'}} item md={12}>
                    <Typography variant="h5">
                        {title}
                    </Typography>
                    <Button type="submit"
                            onClick={()=>navigate(`/newquestion/${params.index}`)}
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
                                <SelectVariants variants={variants} questId={id}/>
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
        </div>
    );
};

export default BaseQuestion;