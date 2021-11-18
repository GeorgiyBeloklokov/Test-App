import React from 'react';
import {Button, Checkbox, FormControlLabel, Grid, Paper, TextareaAutosize, TextField, Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import BasicSelect from "./BasicSelect";
import {addVariantText, addVariantTitle, removeVariant, toggleVarCheckBox} from "../toolkitRedux/questionReducerSlice";


const Variant = (data) => {
    let dates = {...data.data};

    const dispatch = useDispatch();
    const [toggleType, setToggleType] = React.useState(true);

    const addVariantTit = (title, questId, varId) => {
        dispatch(addVariantTitle({title, questId, varId}))
    };
    const toggleChekBox = (chek, questId, varId) => {
        dispatch(toggleVarCheckBox({chek, questId, varId}))
    };
    const addVarText = (varTextArea, questId, varId) => {
        dispatch(addVariantText({varTextArea, questId, varId}))
    };
    const removeVar = (varId) => {
        dispatch(removeVariant(varId))
    };




    let variant = dates.variants.map((item) => {
            return (
                <div key={item.id}>
                    <Grid xs={3} sm={10} md={12} lg={12} item>
                        {toggleType &&

                        <Paper elevation={2} sx={{mt: 2, p: 1}}>

                            <BasicSelect setToggleType = {setToggleType}/>
                            <Typography
                                sx={{mt: 2}}
                                variant="body2"
                                fontWeight='light'>
                                Answer type
                            </Typography>

                            <Grid sx={{display: 'flex', alignItems:'center', justifyContent: 'space-between'}}>
                                <Typography
                                    variant="h5" sx={{mt: 2,}}
                                    /*style={{display: 'inline'}}*/
                                >Variant#1</Typography>
                                <Button onClick={() => removeVar(item.id)} type="submit" variant="contained"
                                        color="error" size="small"
                                        component="span">
                                    x Remove
                                </Button>
                            </Grid>
                            <Typography variant="h7" sx={{p: 2}}>Name</Typography>
                            <br/>
                            <TextField size="small" fullWidth value={item.variantTitle}
                                       onChange={e => addVariantTit(e.target.value, dates.id, item.id)} sx={{mt: 1}}
                                       type='input'
                                       id="outlined-basic" label="Some variant"
                                       variant="outlined"/>
                            <Typography variant="body2" sx={{ml: 2}} fontWeight='light'> Variant name </Typography>
                            <FormControlLabel sx={{pb: 2, pt: 1, pl: 1}}
                                              control={<Checkbox
                                                  onChange={(e) => toggleChekBox(e.target.checked, dates.id, item.id)}
                                                  inputProps={{'aria-label': 'controlled'}}
                                                  defaultChecked size="small"/>} label="Right answer"/>
                        </Paper>
                        }
                        {!toggleType &&
                        <Paper elevation={0} sx={{mt: 2}}>
                            <BasicSelect item={item}/>
                            <Typography
                                variant="h5" sx={{p: 2}}
                                style={{display: 'inline'}}
                            >Variant#1</Typography>
                            <Button sx={{ml: 28}} onClick={() => removeVar(item.id)} type="submit" variant="contained"
                                    color="error" size="small"
                                    component="span">
                                x Remove
                            </Button>
                            <Typography variant="h7" sx={{p: 2}}>Name</Typography>
                            <br/>
                            <TextareaAutosize
                                value={item.variantTextArea} onChange={e => addVarText(e.target.value, dates.id, item.id)}
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
                    </Grid>
                </div>
            );
        }
    );
    return <div>{variant}</div>

}

export default Variant;