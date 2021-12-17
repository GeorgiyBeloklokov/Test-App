import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Container} from "@mui/material";
import Login from "../Login/Login";
import QuestionList from "../Question/QuestionList";
import CreateQuestion from "../CreateQuestion/CreateQuestion";
import BaseQuestion from "../BaseQuestion/BaseQuestion";

const AppRouter = () => {
    const user = true;

    return user ?
        //PrivateRoutes
        (
            <Container sx={{mt: '3rem', maxWidth: '95%', minHeight: 640}} maxWidth={false}>
                <Routes>
                    <Route path='/questionlist' element={<QuestionList/>} />
                    <Route path='/newquestion/:index' element={<CreateQuestion/>}/>
                    <Route path='/newquestion' element={<CreateQuestion/>}/>
                    <Route path='/basequestion/:index' element={<BaseQuestion/>}/>
                    <Route
                        path="*"
                        element={<QuestionList to="/questionlist" />}
                    />
                </Routes>
            </Container>
        )
        :
        (
            //PublicRoutes
            <Container sx={{mt: '3rem', maxWidth: '95%', minHeight: 640}} maxWidth={false}>
                <Routes>
                    <Route path='/questionlist' element={<QuestionList/>} />
                    <Route path='/newquestion/:index' element={<CreateQuestion/>}/>
                    {/*<Route path='/newquestion' element={<CreateQuestion/>}/>*/}
                    <Route path='/basequestion/:index' element={<BaseQuestion/>}/>
                    <Route
                        path="*"
                        element={<Login to='/login' />}
                    />
                </Routes>
            </Container>
        )

};

export default AppRouter;

/*
<Route path='/questionlist' element={<QuestionList/>} />
<Route path='/newquestion/:index' element={<CreateQuestion/>}/>
<Route path='/newquestion' element={<CreateQuestion/>}/>
<Route path='/basequestion/:index' element={<BaseQuestion/>}/>
<Route path="/" element={<QuestionList />} />*/
