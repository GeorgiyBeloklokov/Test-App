import {Button, Grid, Input, Paper, TextareaAutosize, TextField, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import Variant from "./Variant";
import React, {useState} from "react";
import {
    addDescriptionQuestion, addImage,
    addTitleQuestion,
    addVariant,
    removeQuestion
} from "../toolkitRedux/questionReducerSlice";
import {useLocation} from "react-router-dom";

let renderCount = 0;

const CreateQuestion = () => {
    renderCount += 1;
    console.log(`CreateQuestion rendered:`, renderCount);

    const dispatch = useDispatch();
    const questions = useSelector(state => state.questReducer.questions);

    const addVar = (item) => {
        dispatch(addVariant(item))
    };
    const removeQuest = (item) => {
        dispatch(removeQuestion(item))
    };
    const addQuestTitle = (data, item) => {
        dispatch(addTitleQuestion({data, ...item}))
    };

    const addQuestDescription = (data, item) => {
        dispatch(addDescriptionQuestion({data, ...item}))
    };

    const variant =
            {
                id: 12,
                chekBoxFlag: true,
                variantTitle: '',
                variantTextArea: '',
                typeAnswerFlag: true,
                rightAnswer: false,
            };





    /*const onSubmitImage = data => {
        let image = data.image[0];
        let img  = URL.createObjectURL(image);
        let dat = {...data, image:img};
        dispatch(addQuestion(dat));
    }*/


    const onSubmitImage = (data, questId) => {
        let img = URL.createObjectURL(data[0]);
        dispatch(addImage({img, questId}));
    };



    const location = useLocation();
    const {question,index} = (location.state);
    console.log(question,index);

    const [quest,setQuest] = useState(question);

    const addNewVar = () => {
        let questCopy = {...quest};
        questCopy.variants = [...questCopy.variants, variant]
        setQuest({ ...questCopy});
    };

    const removeVar = (varId) => {
        let questCopy = {...quest};
         questCopy.variants = [...quest.variants.filter(item => item.id !== varId)];
        setQuest({ ...questCopy});
    };


    return (
        <div>
            <Grid>
                    <Grid key={quest.id}>
                        <Grid sx={{display: 'flex'}} item>
                            <Typography
                                variant="h5"
                                sx={{flexGrow: 1}}>
                                Edit question # {index+1}
                            </Typography>
                            <Button
                                type="submit"
                                variant="contained"
                                size="small"
                            >
                                Save question
                            </Button>
                            <Button
                                onClick={() => removeQuest(question)}
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
                                        value={quest.title}
                                        sx={{mb: 2}}
                                        size="small"
                                        type="input"
                                        id="outlined-basic"
                                        onChange={(e) => addQuestTitle(e.target.value, question)}
                                        label='Question title'
                                        variant="outlined"
                                    />
                                    <Typography variant="h7">
                                        Description
                                    </Typography>
                                    <TextareaAutosize
                                        value={question.description}
                                        aria-label="minimum height"
                                        minRows={10}
                                        onChange={(e) => addQuestDescription(e.target.value, question)}
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
                                            onChange={(event) => onSubmitImage(event.target.files, question.id)}
                                            accept="image/*"
                                            id="contained-button-file"
                                            type="file"
                                            multiple
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

                                    <Variant quest={quest} removeVar={removeVar}  />

                                    <Button
                                        sx={{mt: 2}}
                                        type="submit"
                                        onClick={ addNewVar}
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
    )
}
export default CreateQuestion;