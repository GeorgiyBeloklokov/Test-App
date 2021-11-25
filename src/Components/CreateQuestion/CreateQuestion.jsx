import {Button, Grid, Input, Paper, TextareaAutosize, TextField, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import Variant from "./Variant";
import React from "react";
import {
    addDescriptionQuestion, addImage,
    addQuestion,
    addTitleQuestion,
    addVariant,
    removeQuestion
} from "../toolkitRedux/questionReducerSlice";


const CreateQuestion = () => {

    const dispatch = useDispatch();
    const questions = useSelector(state => state.questReducer.questions);

    const addVar = (item) => {
        dispatch(addVariant(item))
    };
    const removeQuest = (item) => {
        dispatch(removeQuestion(item))
    };
    const addQuestTitle = (data,item) => {
        dispatch(addTitleQuestion({data,...item}))
    };

    const addQuestDescription = (data,item) => {
        dispatch(addDescriptionQuestion({data,...item}))
    };



    /*const onSubmitImage = data => {
        let image = data.image[0];
        let img  = URL.createObjectURL(image);
        let dat = {...data, image:img};
        dispatch(addQuestion(dat));
    }*/


    const onSubmitImage =(data,questId) => {

        let img  = URL.createObjectURL(data[0]);

        dispatch(addImage({img,questId}));
    };


    return (
        <div>
            <Grid>
                {questions.map((item,index) => (
                    <>
                        <Grid key={item.id} sx={{display: 'flex'}} item >
                            <Typography
                                variant="h5"
                                sx={{flexGrow: 1}}>
                                Edit question #{index + 1}
                            </Typography>
                            <Button
                                type="submit"
                                variant="contained"
                                size="small"
                            >
                                Save question
                            </Button>
                            <Button
                                onClick={()=>removeQuest(item)}
                                type="submit"
                                size='small'
                                color="error"
                                component="span"
                                variant="contained">Remove question</Button>
                        </Grid>
                        <Grid container sx={{mt:2, justifyContent:'space-between'}} >
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
                                            value={item.title}
                                            sx={{mb: 2}}
                                            size="small"
                                            type="input"
                                            id="outlined-basic"
                                            onChange={(e) => addQuestTitle(e.target.value, item)}
                                            label='Question title'
                                            variant="outlined"
                                             />
                                    <Typography variant="h7">
                                        Description
                                    </Typography>
                                    <TextareaAutosize
                                        value={item.description}
                                        aria-label="minimum height"
                                        minRows={10}
                                        onChange={(e) => addQuestDescription(e.target.value, item)}
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
                                            onChange={(event)=>onSubmitImage(event.target.files,item.id)}
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
                    </>
                ))}
            </Grid>
        </div>
    )
}
export default CreateQuestion;