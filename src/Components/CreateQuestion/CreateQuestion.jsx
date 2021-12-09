import React from 'react';
import {Button, Grid, Input, Paper, TextareaAutosize, TextField, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import Variant from "./Variant";

import {
    addImage,
    addQuestion,
    addTitleDescriptionQuestion,
    addVariant,
    removeQuestion,
    removeVariant
} from "../toolkitRedux/questionReducerSlice";
import {useHistory, useParams} from "react-router-dom";
import BasicSelect from "./BasicSelect";
import ModalSendQuest from "./ModalSendQuest";

let renderCount = 0;

const CreateQuestion = () => {
    //Control render of component
    renderCount ++;
    console.log(`CreateQuestion rendered:`, renderCount);

    const dispatch = useDispatch();
    /*const questions = useSelector(state => state.questReducer.questions);*/


    const addVar = (id) => {
        dispatch(addVariant({id}))
    };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const history = useHistory();

    setTimeout(() => {
        if (open) {
            setOpen(false);
            setTimeout(()=>{
                history.push('/questionslist');
            },490);
        }
    }, 1900);

    const addNewQuestion = () => {
        setOpen(true);
        dispatch(addQuestion());

    };

    const removeVar = (varId) => {
        dispatch(removeVariant({varId}))
    };
    const removeQuest = (id) => {
        dispatch(removeQuestion({id}))
    };
    const addQuestTitle = (questTitle, item) => {
        dispatch(addTitleDescriptionQuestion({questTitle, item}))
    };

    const addQuestDescription = (questDesc, item) => {
        dispatch(addTitleDescriptionQuestion({questDesc, item}))
    };


    const onSubmitImage = (data, questId) => {
        let img = URL.createObjectURL(data[0]);
        dispatch(addImage({img, questId}));
    };
// Go to page for edit question
    const router = useHistory();

    // Get question id from URL
    const params = useParams();
    console.log(params);
// Find and get question in state
    const question = useSelector(state => state.questReducer.questions[params.index]);
    console.log('test selector questions + params', question);
//Destructure question for print
    const {title, description, images, index, variants, id} = question;


    return (
        <div>
            <Grid>
                <Grid key={id}>
                    <div>
                        <ModalSendQuest children1 = {"Our question saved ! "}
                                        children2={"Let`s go to Question List ..."}
                                        open={open}
                                        handleOpen={handleOpen}
                                        handleClose={handleClose} />

                    </div>
                    <Grid sx={{display: 'flex'}} item>
                        <Typography
                            variant="h5"
                            sx={{flexGrow: 1}}>
                            Edit question # {index  }
                        </Typography>
                        <Button
                            onClick={() => addNewQuestion()}

                            type="submit"
                            variant="contained"
                            size="small"
                        >
                            Save question
                        </Button>
                        <Button
                            onClick={() => removeQuest(id)}
                            type="submit"
                            size='small'
                            color="error"
                            component="span"
                            variant="contained">Remove question</Button>
                    </Grid>
                    <Grid container sx={{mt: 2, justifyContent: 'space-between'}}>
                        <Grid xs={12} sm={3.8} md={3.8} lg={3.8} item>
                            <Paper sx={{p: 2}} elevation={3}>
                                <Typography
                                    variant="h5"
                                    sx={{mb: 2}}>
                                    General information
                                </Typography>
                                <Typography variant="h7">
                                    Title
                                </Typography>
                                <TextField
                                    fullWidth

                                    value={title}
                                    sx={{mb: 2}}
                                    size="small"
                                    type="input"
                                    id="outlined-basic"

                                    onChange={(e) => addQuestTitle(e.target.value, id)}
                                    label='Question title'
                                    variant="outlined"
                                />
                                <Typography variant="h7">
                                    Description
                                </Typography>
                                <TextareaAutosize

                                    value={description}
                                    aria-label="minimum height"
                                    minRows={10}
                                    onChange={(e) => addQuestDescription(e.target.value, id)}

                                    placeholder="Question message"
                                    style={{width: '98%'}}
                                />
                                <Typography
                                    variant="body2"
                                    fontWeight='light'
                                    sx={{mb: 2}}>
                                    Question message
                                </Typography>
                                <Typography
                                    variant="h7"
                                    component={"div"}>
                                    Image
                                </Typography>
                                <label
                                    htmlFor="contained-button-file">
                                    <Input
                                        onChange={(event) => onSubmitImage(event.target.files, id)}

                                        accept="image/*"
                                        id="contained-button-file"
                                        type="file"

                                    />
                                </label>
                            </Paper>
                        </Grid>
                        <Grid xs={12} sm={8} md={8} lg={8} item>
                            <Paper sx={{p: 2}} elevation={3}>
                                <Typography variant="h5">
                                    Answer
                                </Typography>
                                <Typography
                                    variant="h7">
                                    Question type
                                </Typography>

                                <BasicSelect/>
                                <Variant variants={variants} questId={id}
                                         removeVar={removeVar}/>

                                <Button
                                    sx={{mt: 2}}
                                    type="submit"
                                    onClick={() => addVar(id)}
                                    variant="contained"
                                    size="small"
                                    component="span">
                                    + Add new variant
                                </Button>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};
export default CreateQuestion;