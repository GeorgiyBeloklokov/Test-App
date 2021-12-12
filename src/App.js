
import React, {useEffect, useRef, useState} from "react";
import './App.css';
import SearchAppBar from "./Components/Header/SearchAppBar";
import QuestionList from "./Components/Question/QuestionList";
import {Container} from "@mui/material";
import CreateQuestion from "./Components/CreateQuestion/CreateQuestion";
import BaseQuestion from "./Components/BaseQuestion/BaseQuestion";

import {useSelector} from "react-redux";
import { Route, Routes} from "react-router-dom";



const App = () => {
  /*const confettiSwitch = useSelector(state => state.questReducer.confettiTogle);
  console.log(`from App, testing confetti`, confettiSwitch);

  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);
  const confettiRef = useRef(null);


  useEffect(() => {
    setHeight(confettiRef.current.clientHeight);
    setWidth(confettiRef.current.clientWidth);

  }, []);*/



    useEffect(()=>{
        console.log('mount app')


    },[]);




  return (
      <div>
        <SearchAppBar/>
        <Container sx={{mt: '3rem', maxWidth: '95%', minHeight: 640}} maxWidth={false}>
          <Routes>
            <Route path='/questionlist' element={<QuestionList/>} />
            <Route path='/newquestion/:index' element={<CreateQuestion/>}/>
            <Route path='/newquestion' element={<CreateQuestion/>}/>
            <Route path='/basequestion/:index' element={<BaseQuestion/>}/>
            <Route path="/" element={<QuestionList />} />
          </Routes>
        </Container>
      </div>
  );
};

export default App;
