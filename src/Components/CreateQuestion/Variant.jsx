import React from 'react';
import {Button, Checkbox, FormControlLabel, Paper, TextareaAutosize, TextField, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {addVariantOneCreator, addVariantTextCreator, toggleChekBoxCreator} from "../Redux/editQuestionReducer";


const Variant = (key,variantTextArea,variantTitle,item) => {
    const dispatch = useDispatch();

    /*const variantTextArea = useSelector(state => state.edQuestRed.variantItem.variantTextArea);
    const variantTitle = useSelector(state => state.edQuestRed.variantItem.variantTitle);*/
    const typeAnswerFlag = useSelector(state => state.edQuestRed.questionAndAnswer.typeAnswerFlag);

    const addVariantOneTitle = (variantTitle) => {
        dispatch(addVariantOneCreator(variantTitle))
    };

    const toggleChekBox = (e) => {
        dispatch(toggleChekBoxCreator(e))
    };
    const addVariantText = (variantTextArea) => {
        dispatch(addVariantTextCreator(variantTextArea))
    };


    return (
        <div key={key}>
            {typeAnswerFlag &&
            <Paper elevation={3} sx={{mt: 2}}>
                <Typography
                    variant="h5" sx={{p: 2}}
                    style={{display: 'inline'}}
                >Variant#1</Typography>
                <Button sx={{ml: 28}} type="submit" variant="contained" color="error" size="small"
                        component="span">
                    x Remove
                </Button>
                <Typography variant="h7" sx={{p: 2}}>Name</Typography>
                <br/>
                <TextField size="small" fullWidth value={variantTitle}
                           onChange={e => addVariantOneTitle(e.target.value)} sx={{mt: 1}} type='input'
                           id="outlined-basic" label="Some variant"
                           variant="outlined"/>
                <Typography variant="body2" sx={{ml: 2}} fontWeight='light'> Variant name </Typography>
                <FormControlLabel sx={{pb: 2, pt: 1, pl: 1}}
                                  control={<Checkbox onChange={e => toggleChekBox(e.target.value)}
                                                     defaultChecked size="small"/>} label="Right answer"/>
            </Paper>
            }
            {!typeAnswerFlag &&
            <TextareaAutosize
                value={variantTextArea} onChange={e => addVariantText(e.target.value)}
                aria-label="minimum height"
                minRows={10}
                placeholder="Question message"
                style={{width: '100%'}}
            />

            }
        </div>
    );
};

export default Variant;