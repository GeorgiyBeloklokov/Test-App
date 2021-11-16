import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useDispatch, useSelector} from "react-redux";
import {toggleTypeAnswer} from "../toolkitRedux/questionReducerSlice";

export default function BasicSelect(data, varId) {



    const [age, setAge] = React.useState(null);
    const dispatch = useDispatch();
    /*const data = useSelector(state => state.questReducer.questions);*/

    const handleChange = (event) => {
        setAge(event.target.value);
        let typeAnswer = event.target.value;
        /*let varId = item.item.id;
        let questId = dat.id;*/
        dispatch(toggleTypeAnswer( {typeAnswer, data}))
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Choice of one answer</InputLabel>
                <Select
                    size={'small'}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
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