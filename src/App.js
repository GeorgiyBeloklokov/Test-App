import './App.css';
import SearchAppBar from "./Components/Header/SearchAppBar";
import QuestionList from "./Components/QuestionList";
import {Container} from "@mui/material";
import CreateQuestion from "./Components/CreateQuestion/CreateQuestion";
import BaseQuestion from "./Components/BaseQuestion/BaseQuestion";
import {Route, Switch} from "react-router-dom";
import Question from "./Components/Question/Question";

function App() {
    return (
        <div>
            <SearchAppBar/>
            <Switch>
                <Container sx={{ mt: '1rem'  }} >
                    <Route path='/questionlist' render ={() =>  <QuestionList/> }/>
                    <Route path='/newquestion' render ={() =>  <CreateQuestion/> }/>
                    {/*<Route path='/' render ={() =>  <BaseQuestion/> }/>*/}
                </Container>
            </Switch>

        </div>
    );
}

export default App;
