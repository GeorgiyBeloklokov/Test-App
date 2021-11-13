import React from 'react';
import {Button, Checkbox, FormControlLabel, Paper, TextareaAutosize, TextField, Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import {addVariantContentCreator, removeVarCreator} from "../Redux/editQuestionReducer";
import BasicSelect from "./BasicSelect";


const Variant = (data) => {

    const dispatch = useDispatch();


    const addVariantTitle = (e, data, item) => {
        dispatch(addVariantContentCreator(data.data.variants[0].chekBoxFlag, e.target.value, data.data.variants[0].variantTextArea, data.data.variants[0].typeAnswerFlag, data.data, item.id))
    };
    const toggleChekBox = (e, data, item) => {
        dispatch(addVariantContentCreator(e.target.checked, data.data.variants[0].variantTitle, data.data.variants[0].variantTextArea, data.data.variants[0].typeAnswerFlag, data.data, item.id))
    };
    const addVariantText = (e, data, item) => {
        dispatch(addVariantContentCreator(data.data.variants[0].chekBoxFlag, data.data.variants[0].variantTitle, e.target.value, data.data.variants[0].typeAnswerFlag, data.data, item.id))
    };
    const removeVar = (item) => {  dispatch(removeVarCreator(item))
    };

    let variant = data.data.variants.map((item) => {

            return (
                <div key={item.id}>

                    {item.typeAnswerFlag &&

                    <Paper elevation={0} sx={{mt: 2}}>

                        <BasicSelect item={item}/>
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
                                   onChange={e => addVariantTitle(e, data, item)} sx={{mt: 1}} type='input'
                                   id="outlined-basic" label="Some variant"
                                   variant="outlined"/>
                        <Typography variant="body2" sx={{ml: 2}} fontWeight='light'> Variant name </Typography>
                        <FormControlLabel sx={{pb: 2, pt: 1, pl: 1}}
                                          control={<Checkbox onChange={(e) => toggleChekBox(e, data, item)}
                                                             inputProps={{'aria-label': 'controlled'}}
                                                             defaultChecked size="small"/>} label="Right answer"/>
                    </Paper>
                    }
                    {!item.typeAnswerFlag &&
                    <Paper elevation={0} sx={{mt: 2}}>
                        <BasicSelect item={item}/>
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
                        <TextareaAutosize
                            value={item.variantTextArea} onChange={e => addVariantText(e, data, item)}
                            /*aria-label="minimum height"*/
                            minRows={10}
                            placeholder="Question message"
                            style={{width: '99%'}}
                        />
                        <Typography variant="body2" sx={{ml: 2}} fontWeight='light'> Variant name </Typography>
                        <FormControlLabel sx={{pb: 2, pt: 1, pl: 1}}
                                          control={<Checkbox onChange={(e) => toggleChekBox(e, data, item)}
                                                             inputProps={{'aria-label': 'controlled'}}
                                                             defaultChecked size="small"/>} label="Right answer"/>
                    </Paper>

                    }
                </div>
            );
        }
    );
    return <div>{variant}</div>

}

export default Variant;