import './App.css';
import SearchAppBar from "./Components/Header/SearchAppBar";
import QuestionList from "./Components/QuestionList";
import {Container} from "@mui/material";
import CreateQuestion from "./Components/CreateQuestion/CreateQuestion";

function App() {
    return (
        <div>
        <SearchAppBar/>
        <Container sx={{ mt: '1rem'  }} >

            {/*<QuestionList/>*/}
            <CreateQuestion/>
        </Container>
        </div>

    );
}

export default App;
