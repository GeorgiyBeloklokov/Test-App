import './App.css';
import SearchAppBar from "./Components/Header/SearchAppBar";
import QuestionList from "./Components/QuestionList";
import {Container} from "@mui/material";
import CreateQuestion from "./Components/CreateQuestion/CreateQuestion";
import BaseQuestion from "./Components/BaseQuestion/BaseQuestion";
import {Redirect, Route, Switch} from "react-router-dom";


function App() {
    return (
        <div>

            <SearchAppBar/>

            <Switch>

                <Container sx={{ mt: '3rem', maxWidth:'95%'  }} maxWidth={false}  >
                    <Route path='/questionlist' render ={() =>  <QuestionList/> }/>
                    <Route path='/newquestion' render ={() =>  <CreateQuestion/> }/>
                    <Route path='/basequestion' render ={() =>  <BaseQuestion/> }/>
                    <Redirect to = '/questionlist' />
                </Container>


            </Switch>

        </div>
    );
}

export default App;
