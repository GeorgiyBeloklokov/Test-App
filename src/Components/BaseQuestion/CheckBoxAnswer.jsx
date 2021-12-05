import React, {useState} from 'react';
import {Checkbox, FormControlLabel, Grid} from "@mui/material";
import {useFormContext} from "react-hook-form";


const CheckBoxAnswer = (data) => {
    const {questId, variant} = {...data};


    const { register } = useFormContext();
    const [checked, setChecked] = useState(false);



    return (
        <div>
            <Grid item sx={{display:"flex" }}>
                <FormControlLabel control={<Checkbox
                    {...register(variant.id)}
                    checked={checked}
                    onChange={ (event) => setChecked(event.target.checked)  }
                    inputProps={{'aria-label': 'Checkbox'}}
                />} label={variant.variantTitle}
                />
            </Grid>
        </div>
    );
};

export default CheckBoxAnswer;