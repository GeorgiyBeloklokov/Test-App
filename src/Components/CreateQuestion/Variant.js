import React from 'react';
import {Button, Checkbox, FormControlLabel, Grid, Paper, TextField, Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import {addVariantText, addVariantTitle, toggleVarCheckBox} from "../Redux/editQuestionSlice";
import {useFieldArray, useFormContext,Controller} from "react-hook-form";



const Variant = (data) => {
    const {questId, variants} = {...data};

    const dispatch = useDispatch();

    const addVariantTit = (title, questId, varId) => {
        dispatch(addVariantTitle({title, questId, varId}))
    };
    const toggleChekBox = (chek, questId, varId) => {
        dispatch(toggleVarCheckBox({chek, questId, varId}))
    };
    const addVarText = (varTextArea, questId, varId) => {
        dispatch(addVariantText({varTextArea, questId, varId}))
    };

    const methods = useFormContext();


    const { fields, append,remove, } = useFieldArray({
        ...methods.control,
        name: "variants"
    });


    return (
        <div>
            {fields.map((item, index) => (
                    <Grid key={item.id} xs={12} sm={12} md={12} lg={12} item>
                        <Paper elevation={2} sx={{mt: 2, p: 1}}>

                            <Typography
                                sx={{mt: 2}}
                                variant="body2"
                                fontWeight='light'>
                                Answer type
                            </Typography>

                            <Grid sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                                <Typography
                                    variant="h5"
                                    sx={{mt: 2,}}
                                >Variant#{index + 1}</Typography>
                                <Button
                                    sx={{mt: 2}}
                                    type="submit"
                                    /* onClick={() => addVar(id)}*/
                                    onClick={() => {
                                        append({ variantTitle: "Some text", checkbox: false });
                                    }}
                                    variant="contained"
                                    size="small"
                                    component="span">
                                    + Add new variant
                                </Button>
                                <Button
                                    /*onClick={() => data.removeVar( item.id)}*/
                                    onClick={() => remove(index)}

                                    type="submit"
                                    variant="contained"
                                    color="error"
                                    size="small"
                                    component="span">
                                    x Remove
                                </Button>
                            </Grid>
                            <Typography variant="h7" sx={{p: 2}}>Name</Typography>
                            <br/>
                            <TextField size="small"
                                       fullWidth
                                      /* value={item.variantTitle}
                                       onChange={e => addVariantTit(e.target.value, questId, item.id)}*/
                                       {...methods.register(`variants.${index}.variantTitle`)}
                                       sx={{mt: 1}}
                                       type="input"
                                       id="outlined-basic"
                                       label="Some variant"
                                       variant="outlined"/>

                            <Typography variant="body2"
                                        sx={{ml: 2}}
                                        fontWeight='light'>
                                Variant name
                            </Typography>
                            <Controller
                                name={`variants.${index}.checkbox`}
                                control={methods.control}
                                render={({ field:{ onChange, value },formState
                                              }) => <FormControlLabel   control={ <Checkbox checked={value} onChange={onChange}  size="small"  />} label="Right answer" />}
                            />
                        </Paper>
                    </Grid>
                )
            )}
        </div>
    );
};

export default Variant;

/*
<Checkbox
    sx={{pb: 2, pt: 1, pl: 1}}
    onChange={(event) => toggleChekBox(event.target.checked, questId, item.id)}
    label="Right answer"
    inputProps={{'aria-label': 'controlled'}}
    size="small"/>*/
