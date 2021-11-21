import {Button, CardMedia, Grid, Input, Paper, TextareaAutosize, TextField, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import Variant from "./Variant";
import React, {useState} from "react";
import {
    addDescriptionQuestion,
    addQuestion,
    addTitleQuestion,
    addVariant,
    removeQuestion
} from "../toolkitRedux/questionReducerSlice";
import {useForm} from "react-hook-form";



const CreateQuestion = () => {


    const dispatch = useDispatch();

    const questions = useSelector(state => state.questReducer.questions);
    const title = useSelector(state => state.questReducer.questions.title);
    const description = useSelector(state => state.questReducer.questions.description);
    /*const image = useSelector(state => state.edQuestRed.questionAndAnswer.image);*/


    const addNewTitle = (data, questId) => {
        dispatch(addTitleQuestion({data, questId}))
    };

    const addNewDescription = (data, questId) => {
        dispatch(addDescriptionQuestion({data, questId}))
    };
    const addVar = (item) => {
        dispatch(addVariant(item))
    };
    const saveQuest = (image, item) => {
        dispatch(addQuestion({image, item}))
    };
    const removeQuest = (item) => {
        dispatch(removeQuestion(item))
    };

    const {register, handleSubmit} = useForm();

    const onSubmit = data => {

        let image = data.image[0];
        let img  = URL.createObjectURL(image);
        let dat = {...data, image:img};
        dispatch(addQuestion(dat));
    }


    return (
        <div>
            <Grid  >
                {questions.map(item => (

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <Grid key={item.id}
                              sx={{display: 'flex'}} item>
                            <Typography
                                variant="h5"
                                sx={{flexGrow: 1}}>
                                Edit question
                            </Typography>
                            <Button

                                type="submit"
                                variant="contained"
                                size="small"

                            >
                                Save question
                            </Button>
                            <Button

                                type="submit"
                                size='small'
                                color="error"
                                component="span"
                                variant="contained">Remove question</Button>
                        </Grid>
                        <Grid container sx={{mt:2, justifyContent:'space-between'}} >
                            <Grid xs={12} sm={3.8} md={3.8} lg={3.8}
                                   item>
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
                                        fullWidth /*value={title}*/
                                        sx={{mb: 2}}
                                        size="small"
                                        {...register('title')}
                                        type="input"
                                        id="outlined-basic"
                                        label='Question title'
                                        variant="outlined"/>
                                    <Typography variant="h7">
                                        Description
                                    </Typography>
                                    <TextareaAutosize
                                        /*value={description}*/
                                        aria-label="minimum height"
                                        minRows={10}
                                        {...register('textarea')}
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
                                            accept="image/*"
                                            id="contained-button-file"
                                            type="file"
                                            multiple

                                            {...register('image')}
                                        />
                                    </label>

                                </Paper>
                            </Grid>
                            <Grid xs={12} sm={8} md={8} lg={8}
                                   item>
                                <Paper sx={{p: 2}} elevation={3}>
                                    <Typography
                                        variant="h5"
                                    >
                                        Answer
                                    </Typography>
                                    <Typography
                                        variant="h7">
                                        Question type
                                    </Typography>

                                    <Variant data={item} />

                                    <Button
                                        sx={{mt:2}}
                                        type="submit"
                                        onClick={() => addVar(item)}
                                        variant="contained"
                                        size="small"
                                        component="span">
                                        + Add new variant
                                    </Button>
                                </Paper>
                            </Grid>
                        </Grid>


                    </form>

                ))}
            </Grid>
        </div>
    )

}
export default CreateQuestion;