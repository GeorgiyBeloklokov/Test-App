import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useDispatch} from "react-redux";
import {toggleTypeAnswer} from "../toolkitRedux/questionReducerSlice";

const  BasicSelect =() => {



    const [type, setType] = React.useState('');
    const dispatch = useDispatch();



    const handleChange = (event) => {
        setType(event.target.value);
        let typeAnswer = event.target.value;

        dispatch(toggleTypeAnswer( {typeAnswer}))
    };

    return (
        <Box >
            <FormControl fullWidth>
                <InputLabel id="select-label">Choice of one answer</InputLabel>
                <Select
                    size={'small'}
                    labelId="select-label"
                    id="simple-select"
                    value={type}
                    label="Choice of one answer"
                    onChange={handleChange}
                >
                    <MenuItem value={true}>Answer with some variants</MenuItem>
                    <MenuItem value={false}>Answer with one variant</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
};

export default BasicSelect ;
