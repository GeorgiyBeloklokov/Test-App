import React from 'react';
import {useSelector} from "react-redux";
import QuestionCard from "./Question/QuestionCard";
import {Grid} from "@mui/material";







const QuestionList = () => {


    const questions = useSelector(state => state.questReducer.questions);

    return (
        <div >

            <Grid container spacing={3}  >
                {questions.map((question) => (
                    <Grid  key={question.id} sx={{display: "flex", justifyContent: "space-between"}} xs={12} sm={6}
                           md={4} lg={2} item>

                        <QuestionCard  question={question} />

                    </Grid>
                ))}
            </Grid>

        </div>
    );
};

export default QuestionList;