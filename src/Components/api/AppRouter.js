import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Container} from "@mui/material";
import Login from "../Login/Login";
import QuestionList from "../Question/QuestionList";
import CreateQuestion from "../CreateQuestion/CreateQuestion";
import BaseQuestion from "../BaseQuestion/BaseQuestion";
import SignUp from "../Login/SignUp";
import {useAuth} from "../Firebase/firebase";


const AppRouter = () => {

    const currentUser = useAuth();



    return currentUser ?
        //PrivateRoutes
        (
            <Container sx={{mt: '3rem', maxWidth: '95%', minHeight: 640}} maxWidth={false}>
                <Routes>
                    <Route path='/questionlist' element={<QuestionList/>} />
                    <Route path='/newquestion/:id' element={<CreateQuestion/>}/>
                    <Route path='/newquestion' element={<CreateQuestion/>}/>
                    <Route path='/basequestion/:id' element={<BaseQuestion/>}/>

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
                    <Route path='/newquestion/:id' element={<CreateQuestion/>}/>
                    {/*<Route path='/newquestion' element={<CreateQuestion/>}/>*/}
                    <Route path='/basequestion/:id' element={<BaseQuestion/>}/>
                    <Route path='/signup' element={<SignUp/>}/>
                    <Route
                        path="*"
                        element={<Login to='/login' />}
                    />
                </Routes>
            </Container>
        )

};

export default AppRouter;


