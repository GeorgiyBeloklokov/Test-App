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
import {useDispatch, useSelector} from "react-redux";
import {getSignOut} from "../Redux/signoutSlice";
import {signOut} from "firebase/auth";
import {auth, logout, useAuth} from "../Firebase/firebase";


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
    const index = 0;
    const question = {
        id: Date.now(),
        mulVarQuest: '',
        title: 'Base question',
        description: 'First question',
        images: [{
            image: 'https://adrive.by/WebFiles/About/AboutImg4.jpg'
        }],
        variants: [
            {
                id: Date.now(),
                chekBoxFlag: true,
                variantTitle: '',
                variantTextArea: '',
                typeAnswerFlag: true,
                rightAnswer: false,
            }
        ],
    };


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
//

//SearchPopper control

    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClose = () => setOpen(false); // be in Search > onBlur


    const canBeOpen = open && Boolean(anchorEl);
    const id = canBeOpen ? 'transition-popper' : undefined;


    const currentUser = useAuth();


    const dispatch = useDispatch();


    /*const status = useSelector(state => state.signin.status );*/

    async function handleLogout() {
        await logout();
    }


    /*const user = false;*/
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar sx={{justifyContent: "space-between"}} variant={"dense"}>
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
                        sx={{mr: 2, flexGrow: 0, display: {xs: 'none', sm: 'block'}}}
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
                        <Typography variant="body2"
                                    noWrap
                                    component="div"
                                    sx={{  display: {xs: 'none', sm: 'block'}}}  >
                            Your email:{currentUser?.email}
                        </Typography>
                        {/*<Button disabled color="inherit"
                                size={'small'}
                                component={Link}
                                to={'/disabledbutton'}>Some disabled button</Button>*/}

                    </Stack>
                    <Grid item display={"flex"}>
                        { currentUser ?
                            <Grid item>

                            <Button color="inherit"
                                    size={'small'}
                                    onClick={handleLogout }
                                    >LogOut</Button>

                            </Grid>
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

                        <Grid item>
                            <SearchPopper anchorEl={anchorEl} id={id} open={open}/>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>
    )
};
export default SearchAppBar;
