import React from 'react';
import {useSelector} from "react-redux";
import QuestionCard from "./Question/QuestionCard";
import {Grid} from "@mui/material";







const QuestionList = () => {


    const questions = useSelector(state => state.questReducer.questions);

    return (
        <div>

            <Grid container spacing={3}  >
                {questions.map((question) => (
                    <>

                        <QuestionCard question={question} />

                    </>
                ))}
            </Grid>

        </div>
    );
};

export default QuestionList;