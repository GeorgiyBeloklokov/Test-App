import React from 'react';
import {Button, Checkbox, FormControlLabel, Paper, TextareaAutosize, TextField, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {addVariantContentCreator, removeVarCreator} from "../Redux/editQuestionReducer";
import ControllableInputStates from "./ControllableInputStates";
import BasicSelect from "./ControllableInputStates";


const Variant = () => {
    const dispatch = useDispatch();
    const variants = useSelector(state => state.edQuestRed.questionAndAnswer.variants);
   /* const typeAnswerFlag = useSelector(state => state.edQuestRed.questionAndAnswer.variants.typeAnswerFlag);*/

    const addVariantOneTitle = (e, item) => {
        dispatch(addVariantContentCreator(item.chekBoxFlag, e.target.value, item.variantTextArea,item.typeAnswerFlag, item))
    };
    const toggleChekBox = (e, item) => {
        dispatch(addVariantContentCreator(e.target.checked, item.variantTitle, item.variantTextArea, item.typeAnswerFlag, item))
    };
    const addVariantText = (e, item) => {
        dispatch(addVariantContentCreator(item.chekBoxFlag, item.variantTitle, e.target.value,item.typeAnswerFlag, item))
    };
    const removeVar = (item) => {
        dispatch(removeVarCreator(item))
    };

    const variant = variants.map((item) => {
        return (

            <div key={item.id}>

                {item.typeAnswerFlag &&
                <Paper elevation={0} sx={{mt: 2}}>
                    <BasicSelect item={item}/>
                    <Typography
                        variant="h5" sx={{ p: 2}}
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
                               onChange={e => addVariantOneTitle(e, item)} sx={{mt: 1}} type='input'
                               id="outlined-basic" label="Some variant"
                               variant="outlined"/>
                    <Typography variant="body2" sx={{ml: 2}} fontWeight='light'> Variant name </Typography>
                    <FormControlLabel sx={{pb: 2, pt: 1, pl: 1}}
                                      control={<Checkbox onChange={(e) => toggleChekBox(e, item)}
                                                         inputProps={{'aria-label': 'controlled'}}
                                                         defaultChecked size="small"/>} label="Right answer"/>
                </Paper>
                }
                {!item.typeAnswerFlag &&
                <Paper elevation={0} sx={{mt: 2}}>
                    <ControllableInputStates item={item} />
                    <Typography
                        variant="h5" sx={{ p: 2}}
                        style={{display: 'inline'}}
                    >Variant#1</Typography>
                    <Button sx={{ml: 28}} onClick={() => removeVar(item)} type="submit" variant="contained"
                            color="error" size="small"
                            component="span">
                        x Remove
                    </Button>
                    <Typography variant="h7" sx={{p: 2}}>Name</Typography>
                    <br/>
                    <TextareaAutosize
                        value={item.variantTextArea} onChange={e => addVariantText(e, item)}
                        /*aria-label="minimum height"*/
                        minRows={10}
                        placeholder="Question message"
                        style={{width: '99%'}}
                    />
                    <Typography variant="body2" sx={{ml: 2}} fontWeight='light'> Variant name </Typography>
                    <FormControlLabel sx={{pb: 2, pt: 1, pl: 1}}
                                      control={<Checkbox onChange={(e) => toggleChekBox(e, item)}
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