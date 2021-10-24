import {Box, Button, Input, Paper, TextareaAutosize, TextField, Typography,Checkbox,FormControlLabel} from "@mui/material";
import ControllableInputStates from "./ControllableInputStates";
const CreateQuestion = () => {
    return (
        <div>
            <Box
                sx={{
                    display: 'flex',
                   flexWrap: 'wrap',
                    flexDirection: 'column',
                    width: 150,
                    height: 30,
                    /*justifyContent: "space-around",*/
                    /*flexWrap: 'wrap',*/
                    /*'& > :not(style)': {
                        mt: 4,
                        width: 450,
                        height: 500,
                        px: 3,
                    },*/
                }}
            >
            <Typography variant="h5"  sx={{width: 300 , mr:68}}>
                Edit question
            </Typography>
            <Button size = 'small' variant="contained"  >Save question</Button>
            <Button  size = 'small'  color ="error" variant="contained">Remove question</Button>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: "space-around",
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        mt: 4,
                        width: 450,
                        height: 500,
                        px: 3,
                    },
                }}
            >
                <Paper elevation="3">
                    <Box
                        sx={{
                            '& > :not(style)': {
                                mt: 1,
                                mb:1
                                /*width: 450,
                                height: 500,*/
                                /*px: 2,*/
                            },
                        }}
                    >
                    <Typography variant="h5" sx={{pt:2}}>
                        General information
                    </Typography>
                    <Typography variant="h7" >
                        Title
                    </Typography>
                    <TextField fullWidth size="small"  type='input' id="outlined-basic" label="Question title"
                               variant="outlined"/>
                    <Typography variant="h7">
                        Description
                    </Typography>
                        <TextareaAutosize
                            aria-label="minimum height"
                            minRows={10}
                            placeholder="Question message"
                            style={{ width: 443 }}
                        />
                        <Typography variant="body2" fontWeight='light'  >
                            Question message
                        </Typography>
                        <Typography variant="h7" component={"div"}>
                            Image
                        </Typography>

                        <label htmlFor="contained-button-file">
                            <Input accept="image/*" id="contained-button-file" multiple type="file" />
                            <Button type = "submit" variant="contained" size="small" component="span">
                                Upload
                            </Button>
                        </label>
                    </Box>
                </Paper>
                <Paper elevation="3">
                 <Typography variant="h5" sx={{pt:2}}>
                        Answer
                    </Typography>
                    <Typography variant="h7">
                        Question type
                    </Typography>
                    <ControllableInputStates  />
                    <Typography
                    variant="body2"
                    fontWeight='light' > Question message </Typography>
                    <Paper elevation="2" sx={{mt:2}}>
                    <Typography
                    variant="h5"
                    sx={{p:2}} >Variant#1</Typography>
                   <Typography variant="h7" sx={{p:2}}>Name</Typography>
                   <br />
                   <TextField  size="small" fullWidth  sx={{mt:1 }} type='input' id="outlined-basic" label="Some variant"
                                                                       variant="outlined"/>
                    <Typography variant="body2" sx={{pl:2}} fontWeight='light' > Variant name </Typography>
                   <FormControlLabel sx={{pb:2,pt:1,pl:1}} control={<Checkbox defaultChecked size="small"/>}  label="Right answer" />

                    </Paper>
                </Paper>
            </Box>
        </div>
    )
}
export default CreateQuestion;