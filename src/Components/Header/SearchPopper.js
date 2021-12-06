import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import {Divider, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";

export default function SearchPopper(props) {

    return (
        <div>

            <Popper id={props.id} open={props.open} transition>
                {({TransitionProps}) => (
                    <Fade {...TransitionProps} timeout={350}>
                        <Box sx={{mt: 5, border:1,   p: 1, bgcolor: 'background.paper'}}>
                            <Grid sx={{display:"flex",  }} >
                                <Grid  >
                                    <Grid item>
                                        <Typography sx={{backgroundColor: "lightgrey"}} id="modal-modal-title"
                                                    variant="h6"
                                                    component="h2">
                                            Search result
                                        </Typography>
                                    </Grid>
                                    <Grid sx={{display: "flex", justifyContent: "space-around"}} item>
                                        <Typography id="modal-modal-description" sx={{p: 0.5, mt: 2}}>
                                            Active
                                        </Typography>
                                        <Typography id="modal-modal-description" sx={{p: 0.5, mt: 2}}>
                                            Passed
                                        </Typography>
                                        <Typography id="modal-modal-description"
                                                    sx={{mt: 2, p: 0.5, color: "white", backgroundColor: "gray"}}>
                                            Failed
                                        </Typography>

                                    </Grid>
                                    <Divider sx={{mt: 1, mb: 1}}/>
                                    <Grid sx={{display: "flex", justifyContent: "space-around"}} item>
                                        <Typography noWrap variant="caption" id="modal-modal-description"
                                                    sx={{p: 0.5, mt: 2, backgroundColor: "lightgray"}}>
                                            Failed question
                                        </Typography>
                                        <Typography noWrap id="modal-modal-description" variant="caption"
                                                    sx={{p: 0.5, mt: 2}}>
                                            Failed question example
                                        </Typography>
                                    </Grid>
                                    <Grid sx={{display: "flex", justifyContent: "space-around"}} item>
                                        <Typography noWrap variant="caption" id="modal-modal-description"
                                                    sx={{p: 0.5, mt: 2, backgroundColor: "lightgray"}}>
                                            Failed question
                                        </Typography>
                                        <Typography noWrap id="modal-modal-description" variant="caption"
                                                    sx={{p: 0.5, mt: 2}}>
                                            Failed question example
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid sx={{ml:2}} >
                                    <Grid item>
                                        <Typography sx={{backgroundColor: "lightgrey"}} id="modal-modal-title"
                                                    variant="h6"
                                                    component="h2">
                                            Search result
                                        </Typography>
                                    </Grid>
                                    <Grid sx={{display: "flex", justifyContent: "space-around"}} item>
                                        <Typography id="modal-modal-description" sx={{p: 0.5, mt: 2}}>
                                            Active
                                        </Typography>
                                        <Typography id="modal-modal-description" sx={{mt: 2, p: 0.5, color: "white", backgroundColor: "gray"}} >
                                            Passed
                                        </Typography>
                                        <Typography id="modal-modal-description" sx={{p: 0.5, mt: 2}}
                                                    >
                                            Failed
                                        </Typography>
                                    </Grid>
                                    <Divider sx={{mt: 1, mb: 1}}/>
                                    <Grid sx={{display: "flex", justifyContent: "space-around"}} item>
                                        <Typography noWrap variant="caption" id="modal-modal-description"
                                                    sx={{p: 0.5, mt: 2, backgroundColor: "lightgray"}}>
                                            Failed question
                                        </Typography>
                                        <Typography noWrap id="modal-modal-description" variant="caption"
                                                    sx={{p: 0.5, mt: 2}}>
                                            Failed question example
                                        </Typography>
                                    </Grid>
                                    <Grid sx={{display: "flex", justifyContent: "space-around"}} item>
                                        <Typography noWrap variant="caption" id="modal-modal-description"
                                                    sx={{p: 0.5, mt: 2, backgroundColor: "lightgray"}}>
                                            Failed question
                                        </Typography>
                                        <Typography noWrap id="modal-modal-description" variant="caption"
                                                    sx={{p: 0.5, mt: 2}}>
                                            Failed question example
                                        </Typography>
                                    </Grid>
                                    <Grid sx={{display: "flex", justifyContent: "space-around"}} item>
                                        <Typography noWrap variant="caption" id="modal-modal-description"
                                                    sx={{p: 0.5, mt: 2, backgroundColor: "lightgray"}}>
                                            Failed question
                                        </Typography>
                                        <Typography noWrap id="modal-modal-description" variant="caption"
                                                    sx={{p: 0.5, mt: 2}}>
                                            Failed question example
                                        </Typography>
                                    </Grid>
                                    <Grid sx={{display: "flex", justifyContent: "space-around"}} item>
                                        <Typography noWrap variant="caption" id="modal-modal-description"
                                                    sx={{p: 0.5, mt: 2, backgroundColor: "lightgray"}}>
                                            Failed question
                                        </Typography>
                                        <Typography noWrap id="modal-modal-description" variant="caption"
                                                    sx={{p: 0.5, mt: 2}}>
                                            Failed question example
                                        </Typography>
                                    </Grid>
                                    <Grid sx={{display:"flex", justifyContent: "space-between" }} item>
                                        <Typography  id="modal-modal-title"
                                                    variant="caption"
                                                    >
                                            Show more...
                                        </Typography>
                                        <Typography sx={{backgroundColor: "lightgray"}} id="modal-modal-title"
                                                    variant="body2"
                                                    >
                                            ~ 200 results
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid sx={{ml:2}} >
                                    <Grid item>
                                        <Typography sx={{backgroundColor: "lightgrey"}} id="modal-modal-title"
                                                    variant="h6"
                                                    component="h2">
                                            Search result
                                        </Typography>
                                    </Grid>
                                    <Grid sx={{display: "flex", justifyContent: "space-around"}} item>
                                        <Typography id="modal-modal-description" sx={{mt: 2, p: 0.5, color: "white", backgroundColor: "gray"}} >
                                            Active
                                        </Typography>
                                        <Typography id="modal-modal-description" sx={{p: 0.5, mt: 2}}>
                                            Passed
                                        </Typography>
                                        <Typography id="modal-modal-description" sx={{p: 0.5, mt: 2}}
                                                    >
                                            Failed
                                        </Typography>

                                    </Grid>
                                    <Divider sx={{mt: 1, mb: 1}}/>
                                    <Grid sx={{display: "flex", justifyContent: "space-around"}} item>
                                        <Typography noWrap variant="caption" id="modal-modal-description"
                                                    sx={{p: 0.5, mt: 2, backgroundColor: "lightgray"}}>
                                            Base question
                                        </Typography>
                                        <Typography noWrap id="modal-modal-description" variant="caption"
                                                    sx={{p: 0.5, mt: 2}}>
                                            First question example
                                        </Typography>
                                    </Grid>
                                    <Grid sx={{display: "flex", justifyContent: "space-around"}} item>
                                        <Typography noWrap variant="caption" id="modal-modal-description"
                                                    sx={{p: 0.5, mt: 2, backgroundColor: "lightgray"}}>
                                            Multiple var. question
                                        </Typography>
                                        <Typography noWrap id="modal-modal-description" variant="caption"
                                                    sx={{p: 0.5, mt: 2}}>
                                            This question...
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                    </Fade>
                )}
            </Popper>
        </div>
    );
}
