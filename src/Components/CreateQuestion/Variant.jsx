import React from 'react';
import {Button, Checkbox, FormControlLabel, Paper, TextareaAutosize, TextField, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {
    addVariantCreator,
    addVariantOneCreator,
    addVariantTextCreator,
    removeVarCreator,
    toggleChekBoxCreator
} from "../Redux/editQuestionReducer";


const Variant = () => {
    const dispatch = useDispatch();
    const variants = useSelector(state => state.edQuestRed.questionAndAnswer.variants);

    const variantTextArea = useSelector(state => state.edQuestRed.variantItem.variantTextArea);
   /* const variantTitle = useSelector(state => state.edQuestRed.variantItem.variantTitle);*/
    const typeAnswerFlag = useSelector(state => state.edQuestRed.questionAndAnswer.typeAnswerFlag);

    const addVariantOneTitle = (variantTitle,item) => {

        dispatch(addVariantOneCreator(variantTitle,item))
    };

    const toggleChekBox = (e,item) => {
        dispatch(toggleChekBoxCreator(e.target.checked,item))
    };
    const addVariantText = (TextArea) => {
        dispatch(addVariantTextCreator(TextArea))
    };
    const removeVar = (item) => {
        dispatch(removeVarCreator(item))
    };

    const variant = variants.map((item) => {
                return (
                    <div key={item.id}>
                        {typeAnswerFlag &&
                        <Paper elevation={3} sx={{mt: 2}}>
                            <Typography
                                variant="h5" sx={{p: 2}}
                                style={{display: 'inline'}}
                            >Variant#1</Typography>
                            <Button sx={{ml: 28}} onClick={() => removeVar(item)} type="submit" variant="contained"
                                    color="error" size="small"
                                    component="span">
                                x Remove
                            </Button>
                            <Typography variant="h7" sx={{p: 2}}>Name</Typography>
                            <br/>
                            <TextField size="small" fullWidth value={item.variantTitle}
                                       onChange={e => addVariantOneTitle(e.target.value, item)} sx={{mt: 1}} type='input'
                                       id="outlined-basic" label="Some variant"
                                       variant="outlined"/>
                            <Typography variant="body2" sx={{ml: 2}} fontWeight='light'> Variant name </Typography>
                            <FormControlLabel sx={{pb: 2, pt: 1, pl: 1}}
                                              control={<Checkbox onChange={(e)=> toggleChekBox(e,item)} inputProps={{ 'aria-label': 'controlled' }}
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
            });
    return <div>{variant}</div>

        }

export default Variant;