import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useDispatch} from "react-redux";
import {addVariantContentCreator} from "../Redux/editQuestionReducer";

export default function BasicSelect(item) {
    const [age, setAge] = React.useState(null);
    const dispatch = useDispatch();

    const handleChange = (event) => {
        setAge(event.target.value);
        dispatch(addVariantContentCreator(item.item[0].variants[0].chekBoxFlag, item.item[0].variants[0].variantTitle, item.item[0].variants[0].variantTextArea ,
            event.target.value, item.item))
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