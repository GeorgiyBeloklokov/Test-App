import React, {useState} from 'react';
import {alpha, styled} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import {Button, Grid, Stack} from "@mui/material";
import {Link} from "react-router-dom";
import SearchPopper from "./SearchPopper";
import {logout, useAuth} from "../Firebase/firebase";
import Avatar from "@mui/material/Avatar";


const Search = styled('div')(({theme}) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({theme}) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));


const SearchAppBar = () => {

    //Search filter
    let base = [];
    const searchHandler = (e) => {
        base.push(e.target.value);
        let examples = ["Some question", "some question", "somequestion", "question", "Question", "Somequestion"];
        let openPopper = examples.some(el => base.includes(el));
        if (openPopper) {
            setOpen(true);
            setAnchorEl(e.currentTarget);
        }

    };


//SearchPopper control

    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClose = () => setOpen(false); // be in Search > onBlur


    const canBeOpen = open && Boolean(anchorEl);
    const id = canBeOpen ? 'transition-popper' : undefined;


    const currentUser = useAuth();

    async function handleLogout() {
        await logout();
    }

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar sx={{ justifyContent: "space-between"}} variant={"dense"}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{mr: 2}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography
                        variant="h4"
                        noWrap
                        component="div"
                    >
                        Test Application
                    </Typography>
                    <Stack direction="row" spacing={2}>
                        <Button color="inherit"
                                size={'small'}
                                component={Link}
                                to={'/questionlist'}>Question list</Button>
                        <Button color="inherit"
                                size={'small'}
                                component={Link}
                                to={'/newquestion'}>Create new question</Button>
                        <Typography variant="h6"
                                    noWrap
                                    component="div"
                                    sx={{display: {xs: 'none', sm: 'block'}}}  >
                             {currentUser?.email}
                        </Typography>
                        <Avatar
                            sx={{display: {xs: 'none', sm: 'block'}}}
                            alt="Your avatar"
                            src="https://citaty.info/files/posters/150855.jpg" />
                        {/*<Button disabled color="inherit"
                                size={'small'}
                                component={Link}
                                to={'/disabledbutton'}>Some disabled button</Button>*/}

                        { currentUser ?


                            <Button color="inherit"
                                    size={'small'}
                                    onClick={handleLogout }
                                    >LogOut</Button>


                            :
                            <Button color="inherit"
                                    size={'small'}
                                    component={Link}
                                    to={'/login'}>Login</Button>


                        }
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon/>
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                onChange={searchHandler}
                                onBlur={handleClose}
                                inputProps={{'aria-label': 'search'}}
                            />
                        </Search>
                </Stack>
                        <Grid item>
                            <SearchPopper anchorEl={anchorEl} id={id} open={open}/>
                        </Grid>

                </Toolbar>
            </AppBar>
        </Box>
    )
};
export default SearchAppBar;
