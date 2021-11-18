import {Box, Button, Container, Grid, Input, Paper, TextareaAutosize, TextField, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import Variant from "./Variant";
import React from "react";
import {
    addDescriptionQuestion,
    addQuestion,
    addTitleQuestion,
    addVariant,
    removeQuestion
} from "../toolkitRedux/questionReducerSlice";
import {useForm} from "react-hook-form";

const CreateQuestion = () => {

    /*const [selectedImage, setSelectedImage] = useState();*/
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

    const onSubmit = data => console.log('Отправлено:', data);

    /* const onSubmit = data => */


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
                        <Grid container >
                            <Grid xs={12} sm={12} md={12} lg={4}
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
                                        {...register('Title')}
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
                                        {...register('TextArea')}
                                        placeholder="Question message"
                                        fullWidth
                                        /*style={{width: '100%'}}*/
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
                                            {...register('Image')}
                                        />
                                    </label>
                                </Paper>
                            </Grid>
                            <Grid xs={12} sm={12} md={12} lg={8}
                                  sx={{pl:2}} item>
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

                                    <Variant data={item}/>


                                    <Button
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

    /*});*/
    /*return <div>{question}</div>*/
}
export default CreateQuestion;