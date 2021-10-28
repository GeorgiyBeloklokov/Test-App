import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {typeAnswerFlagCreator} from "../Redux/editQuestionReducer";
import {useDispatch} from "react-redux";

const options = ['Variants with some answers', 'Text area for answer'];

export default function ControllableInputStates() {
  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState('');
  const dispatch = useDispatch();


  return (
    <div>
      {/* <div>{`value: ${value !== null ? `'${value}'` : 'null'}`}</div>
      <div>{`inputValue: '${inputValue}'`}</div> */}
      <br />
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          dispatch(typeAnswerFlagCreator());
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);


        }}
        id="controllable-states-demo"
        options={options}
        fullWidth
         size="small"
        /* sx={{ width: 400 }} */
        renderInput={(params) => <TextField {...params} label="Choice of one answer" />}
      />
    </div>
  );
}
