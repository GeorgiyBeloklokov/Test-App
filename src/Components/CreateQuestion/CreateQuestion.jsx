import {Box, Button, Input, Paper, TextareaAutosize, TextField, Typography} from "@mui/material";
import ControllableInputStates from "./ControllableInputStates";
import {useDispatch, useSelector} from "react-redux";
import {addDescriptionQuestionCreator, addTitleQuestionCreator, addVariantCreator} from "../Redux/editQuestionReducer";
import Variant from "./Variant";


const CreateQuestion = () => {

    /*const [selectedImage, setSelectedImage] = useState();*/
    const dispatch = useDispatch();

    const title = useSelector(state => state.edQuestRed.questionAndAnswer.title);
    const description = useSelector(state => state.edQuestRed.questionAndAnswer.description);
    /*const image = useSelector(state => state.edQuestRed.questionAndAnswer.image);*/



    const addNewTitle = (titleText) => {
        dispatch(addTitleQuestionCreator(titleText))
    };
    const addNewDescription = (descriptionText) => {
        dispatch(addDescriptionQuestionCreator(descriptionText))
    };
    const addVariant = (e) => {
        dispatch(addVariantCreator(e))
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
                <Button size='small' variant="contained">Save question</Button>
                <Button size='small' color="error" variant="contained">Remove question</Button>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: "space-around",
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        mt: 4,
                        width: 450,
                        height: 500,
                        px: 3,
                    },
                }}
            >
                <Paper elevation={3}>
                    <Typography variant="h5" sx={{mt: 2, mb: 2}}>
                        General information
                    </Typography>
                    <Typography variant="h7">
                        Title
                    </Typography>
                    <TextField fullWidth value={title} sx={{mb: 2}} onChange={e => addNewTitle(e.target.value)}
                               size="small" type='input' id="outlined-basic" label='Question title'
                               variant="outlined"/>
                    <Typography variant="h7">
                        Description
                    </Typography>
                    <TextareaAutosize
                        value={description} onChange={e => addNewDescription(e.target.value)}
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
                    <ControllableInputStates/>
                    <Typography
                        variant="body2"
                        fontWeight='light'> Answer type </Typography>
                    <Variant />
                    <Button onClick={addVariant} sx={{mt: 4}} type="submit" variant="contained" size="small"
                            component="span">
                        + Add new variant
                    </Button>

                </Paper>
            </Box>
        </div>
    )
}
export default CreateQuestion;