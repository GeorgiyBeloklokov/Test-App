import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useDispatch, useSelector} from "react-redux";
import {toggleTypeAnswer} from "../toolkitRedux/questionReducerSlice";

export default function BasicSelect({setToggleType}) {



    const [type, setType] = React.useState(null);
    /*const dispatch = useDispatch();*/
    /*const data = useSelector(state => state.questReducer.questions);*/

    const handleChange = (event) => {
        setType(event.target.value);
        setToggleType(event.target.value);
       /* let typeAnswer = event.target.value;
        dispatch(toggleTypeAnswer( {typeAnswer, data}))*/
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
                    <MenuItem value={true}>Variants with some answers</MenuItem>
                    <MenuItem value={false}>Text area for answer</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}