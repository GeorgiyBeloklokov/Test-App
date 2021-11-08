import React from 'react';
import {Button, Checkbox, FormControlLabel, Paper, TextareaAutosize, TextField, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {addVariantContentCreator, removeVarCreator} from "../Redux/editQuestionReducer";
import ControllableInputStates from "./ControllableInputStates";
import BasicSelect from "./ControllableInputStates";


const Variant = () => {
    const dispatch = useDispatch();
    /*const variants = useSelector(state => state.edQuestRed.questions[0].variants);*/
    const questions = useSelector(state => state.edQuestRed.questions);

        const addVariantTitle = (e, item) => {
            dispatch(addVariantContentCreator(item[0].variants[0].chekBoxFlag, e.target.value, item[0].variants[0].variantTextArea,item[0].variants[0].typeAnswerFlag, item))
        };
        const toggleChekBox = (e, item) => {
            dispatch(addVariantContentCreator(e.target.checked, item[0].variants[0].variantTitle, item[0].variants[0].variantTextArea, item[0].variants[0].typeAnswerFlag, item))
        };
        const addVariantText = (e, item) => {
            dispatch(addVariantContentCreator(item[0].variants[0].chekBoxFlag, item[0].variants[0].variantTitle, e.target.value,item[0].variants[0].typeAnswerFlag, item))
        };
        const removeVar = (item) => {
            dispatch(removeVarCreator(item))
        };

        const variant = questions[0].variants.map((variants) => {
            return (

                <div key={variants.id}>

                    {variants.typeAnswerFlag &&

                    <Paper elevation={0} sx={{mt: 2}}>

                        <BasicSelect item={questions}/>
                        <Typography
                            variant="h5" sx={{ p: 2}}
                            style={{display: 'inline'}}
                        >Variant#1</Typography>
                        <Button sx={{ml: 28}} onClick={() => removeVar(questions)} type="submit" variant="contained"
                                color="error" size="small"
                                component="span">
                            x Remove
                        </Button>
                        <Typography variant="h7" sx={{p: 2}}>Name</Typography>
                        <br/>
                        <TextField size="small" fullWidth value={variants.variantTitle}
                                   onChange={e => addVariantTitle(e, questions)} sx={{mt: 1}} type='input'
                                   id="outlined-basic" label="Some variant"
                                   variant="outlined"/>
                        <Typography variant="body2" sx={{ml: 2}} fontWeight='light'> Variant name </Typography>
                        <FormControlLabel sx={{pb: 2, pt: 1, pl: 1}}
                                          control={<Checkbox onChange={(e) => toggleChekBox(e, questions)}
                                                             inputProps={{'aria-label': 'controlled'}}
                                                             defaultChecked size="small"/>} label="Right answer"/>
                    </Paper>
                    }
                    {!variants.typeAnswerFlag &&
                    <Paper elevation={0} sx={{mt: 2}}>
                        <ControllableInputStates item={questions} />
                        <Typography
                            variant="h5" sx={{ p: 2}}
                            style={{display: 'inline'}}
                        >Variant#1</Typography>
                        <Button sx={{ml: 28}} onClick={() => removeVar(questions)} type="submit" variant="contained"
                                color="error" size="small"
                                component="span">
                            x Remove
                        </Button>
                        <Typography variant="h7" sx={{p: 2}}>Name</Typography>
                        <br/>
                        <TextareaAutosize
                            value={variants.variantTextArea} onChange={e => addVariantText(e, questions)}
                            /*aria-label="minimum height"*/
                        minRows={10}
                        placeholder="Question message"
                        style={{width: '99%'}}
                    />
                    <Typography variant="body2" sx={{ml: 2}} fontWeight='light'> Variant name </Typography>
                    <FormControlLabel sx={{pb: 2, pt: 1, pl: 1}}
                                      control={<Checkbox onChange={(e) => toggleChekBox(e, questions)}
                                                         inputProps={{'aria-label': 'controlled'}}
                                                         defaultChecked size="small"/>} label="Right answer"/>
                </Paper>

                }
            </div>
        );
    });
    return <div>{variant}</div>

}

export default Variant;