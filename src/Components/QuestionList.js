import React from 'react';
import {useSelector} from "react-redux";
import QuestionCard from "./Question/QuestionCard";
import {Container, Grid} from "@mui/material";


const QuestionList = () => {



    const questions = useSelector(state => state.edQuestRed.questions);

    return (
        <div >
            <Grid container spacing={3} >
                {questions.map((item) => (
<>
                    <QuestionCard key={item.id} /*{...item} *//>
                    <QuestionCard key={item.id} /*{...item} *//>
                    <QuestionCard key={item.id} /*{...item} *//>
                    <QuestionCard key={item.id} /*{...item} *//>
                    <QuestionCard key={item.id} /*{...item} *//>
                    <QuestionCard key={item.id} /*{...item} *//>
</>
                ))}
            </Grid>
        </div>
    );
};

export default QuestionList;