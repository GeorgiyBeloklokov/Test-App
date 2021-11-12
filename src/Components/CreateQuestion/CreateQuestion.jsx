import {Box, Button, Input, Paper, TextareaAutosize, TextField, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {
    addQuestionCreator, addTitleAndDescriptionQuestionCreator,
    addVariantCreator
} from "../Redux/editQuestionReducer";
import Variant from "./Variant";
import React from "react";



const CreateQuestion = () => {

    /*const [selectedImage, setSelectedImage] = useState();*/
    const dispatch = useDispatch();

    const questions = useSelector(state => state.edQuestRed.questions);
    const title = useSelector(state => state.edQuestRed.questions.title);
    const description = useSelector(state => state.edQuestRed.questions.description);
    /*const image = useSelector(state => state.edQuestRed.questionAndAnswer.image);*/



    const addNewTitle = (e,item) => {
        dispatch(addTitleAndDescriptionQuestionCreator(e.target.value,item.description,item))
    };
    const addNewDescription = (e,item) => {
        dispatch(addTitleAndDescriptionQuestionCreator(item.title, e.target.value,item))
    };
    const addVariant = (item) => {
        dispatch(addVariantCreator(item))
    };
    const saveQuest = (e) => {
        dispatch(addQuestionCreator(e))
    };

    /*const fileSelectedHandler = (event) => {
        if (event.target.files && event.target.files.length > 0) {
            setSelectedImage(event.target.files[0]);
        }
    };

    const fileUploadHandler = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    };*/

    let question = questions.map((item) => {

    return (
        <div>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    flexDirection: 'column',
                    width: 150,
                    height: 30,
                }}
            >
                <Typography variant="h5" sx={{width: 300, mr: 68}}>
                    Edit question
                </Typography>
                <Button onClick={saveQuest}  type="submit" variant="contained" size="small"
                        component="span">
                    Save question
                </Button>
                <Button size='small' color="error" variant="contained">Remove question</Button>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: "space-around",
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        mt: 4,
                        width: 500,
                        height: 450,
                        px: 3,
                    },
                }}
            >
                <Paper elevation={3}   sx={{minHeight:450 }} >
                    <Typography variant="h5" sx={{mt: 2, mb: 2}}>
                        General information
                    </Typography>
                    <Typography variant="h7">
                        Title
                    </Typography>
                    <TextField fullWidth value={title} sx={{mb: 2}} onChange={e => addNewTitle(e, item)}
                               size="small" type='input' id="outlined-basic" label='Question title'
                               variant="outlined"/>
                    <Typography variant="h7">
                        Description
                    </Typography>
                    <TextareaAutosize
                        value={description} onChange={e => addNewDescription(e, item)}
                        aria-label="minimum height"
                        minRows={10}
                        placeholder="Question message"
                        style={{width: '100%'}}
                    />
                    <Typography variant="body2" fontWeight='light' sx={{mb: 2}}>
                        Question message
                    </Typography>
                    <Typography variant="h7" component={"div"}>
                        Image
                    </Typography>

                    <label htmlFor="contained-button-file">
                        <Input accept="image/*" id="contained-button-file" type="file" />
                        <Button  type="submit" variant="contained" size="small"
                                component="span">
                            Upload
                        </Button>
                    </label>
                </Paper>

                <Paper elevation={3}>
                    <Typography variant="h5" sx={{mt: 2}}>
                        Answer
                    </Typography>
                    <Typography variant="h7">
                        Question type
                    </Typography>

                    <Typography
                        variant="body2"
                        fontWeight='light'> Answer type </Typography>
                    <Variant data={item} />

                    <Button onClick={() => addVariant( item)} sx={{mt: 4}} type="submit" variant="contained" size="small"
                            component="span">
                        + Add new variant
                    </Button>

                </Paper>
            </Box>
        </div>
    )
    });
    return <div>{question}</div>
}
export default CreateQuestion;