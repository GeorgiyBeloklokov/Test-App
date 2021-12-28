import React, {useState} from 'react';
import {Button, Grid, Input, Paper, TextareaAutosize, TextField, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import Variant from "./Variant";
import {ref, set} from "firebase/database";
import {
    addImage,
    addTitleDescriptionQuestion,
    addVariant,
    removeQuestion,
    removeVariant, saveQuestion,
} from "../Redux/editQuestionSlice";
import {useNavigate, useParams} from "react-router-dom";
import BasicSelect from "./BasicSelect";
import ModalSendQuest from "./ModalSendQuest";
import {FormProvider, useForm} from "react-hook-form";
import {database, logout} from "../Firebase/firebase";


let renderCount = 0;

const CreateQuestion = () => {

    //Control render of component
    renderCount ++;
    console.log(`CreateQuestion rendered:`, renderCount);

    const dispatch = useDispatch();
    const quest = useSelector(state => state.editQuest.questions);





//firebase write data
    function writeQuestionsInData (data) {
        set(ref(database, "questions/" ),{
            data
        })
    }



    const addVar = (id) => {
        dispatch(addVariant({id}))
    };

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    setTimeout(() => {
        if (open) {
            setOpen(false);
            setTimeout(()=>{
                navigate('/questionslist');
            },490);
        }
    }, 1900);

    const handleSubmit = (data,id) => {
        console.log(`test data general`,data);
        setOpen(true);
        dispatch(saveQuestion({...data,id}));

        /*writeQuestionsInData();*/

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
        img.onload = () => URL.revokeObjectURL(img);
    };

// Navigation to page for edit question or creating new question
    let navigate = useNavigate();

    // Get question id from URL
    const params = useParams();


//Empty object for new question button in AppBar
    const emptyQuestion = {
        title:'Base question ',
        description: 'Some text from emptyQuest ' ,
        image:"Some image",
        variants: [{ variantTitle: "Some text", checkbox: false}]
    };


// Find and get question in state
    const newQuestion = useSelector(state => state.editQuest.questions.find(item => item.id === params.id));

//If not  index of question , make a  new empty question ( for create new question button in AppBar)
    const question = params ? newQuestion : emptyQuestion;



//Destructure question for print
    const {title, description, image, index, variants, id} = question ? question : emptyQuestion ;
    /*console.log('test  question and emptyQuestion ', question, emptyQuestion);*/


/*let varian = JSON.parse(JSON.stringify(variants));
    console.log(`test varian`,varian);*/
    //React-hook-form
    const methods = useForm({
        defaultValues: {
            title,
            description,
            image,
            variants:[...variants]
        }
    });


    return (
        <div>
            <Grid>
                <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit((data) => handleSubmit(data,id))}>
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
                            Edit question # {params.index }
                        </Typography>
                        <Grid item sx={{mr:8, border:2, borderRadius:1, color: "blue"}} className="counter">Render Count: {renderCount}</Grid>
                        <Button
                           /* onClick={() => addNewQuestion()}*/

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

                                   /* value={title}*/
                                    sx={{mb: 2}}
                                    size="small"
                                    type="input"
                                    id="outlined-basic"
                                    {...methods.register(`title`)}
                                    /*onChange={(e) => addQuestTitle(e.target.value, id)}*/
                                    label='Question title'
                                    variant="outlined"
                                />
                                <Typography variant="h7">
                                    Description
                                </Typography>
                                <TextareaAutosize
                                    aria-label="minimum height"
                                    minRows={10}
                                    /*onChange={(e) => addQuestDescription(e.target.value, id)}*/
                                    {...methods.register(`description`)}
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

                                    <Input
                                       /* onChange={(event) => onSubmitImage(event.target.files, id)}*/
                                        {...methods.register(`image`)}
                                        name="image"
                                        accept="image/*"
                                        type="file"
                                    />


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

                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
                </form>
                </FormProvider>
            </Grid>
        </div>
    );
};
export default CreateQuestion;