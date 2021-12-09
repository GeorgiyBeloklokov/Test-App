
import React, {useEffect, useRef, useState} from "react";
import './App.css';
import SearchAppBar from "./Components/Header/SearchAppBar";
import QuestionList from "./Components/QuestionList";
import {Container} from "@mui/material";
import CreateQuestion from "./Components/CreateQuestion/CreateQuestion";
import BaseQuestion from "./Components/BaseQuestion/BaseQuestion";
import {Redirect, Route, Switch} from "react-router-dom";
import {useSelector} from "react-redux";
import ReactConfetti from "react-confetti";


const App = () => {
    const confettiSwitch = useSelector(state => state.questReducer.confettiTogle);
    console.log(`from App, testing confetti`, confettiSwitch);

    const [height, setHeight] = useState(null);
    const [width, setWidth] = useState(null);
    const confettiRef = useRef(null);

    useEffect(() => {
        setHeight(confettiRef.current.clientHeight);
        setWidth(confettiRef.current.clientWidth);

    }, []);


    return (
        <div>
            <SearchAppBar/>
            <Container sx={{mt: '3rem', maxWidth: '95%', minHeight: 640}} maxWidth={false}>
                <Switch>
                    <Route path='/questionlist' render={() => <QuestionList/>}/>
                    <Route path='/newquestion/:index' render={() => <CreateQuestion/>}/>
                    <Route path='/basequestion/:index' render={() => <BaseQuestion/>}/>
                    <Redirect to='/questionlist'/>
                </Switch>
            </Container>
        </div>
    );
};

export default App;
