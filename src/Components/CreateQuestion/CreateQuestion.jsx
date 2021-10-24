import {Box, Button, Input, Paper, TextareaAutosize, TextField, Typography} from "@mui/material";

const CreateQuestion = () => {
    return (
        <div>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: "space-around",
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        mt: 12,
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
                    <Typography variant="h5" paddingTop={2}>
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
                            <Button variant="contained" component="span">
                                Upload
                            </Button>
                        </label>

                </Box>
                </Paper>
                <Paper elevation="3">
                    <Typography variant="h4">
                        This is test mdf
                    </Typography>
                </Paper>
            </Box>
        </div>


    )
}
export default CreateQuestion;