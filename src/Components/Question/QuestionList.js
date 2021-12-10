import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import QuestionCard from "./QuestionCard";
import {Grid} from "@mui/material";
import TestAppPagination from "../Pagination/Pagination";




const QuestionList = () => {

    const question = useSelector(state => state.questReducer.questions);

    const [questions, SetQuestions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = React.useState(1);
    const [questionsPerPage] = useState(6);

    const handleChange = (event, value) => {
        setPage(value);
    };

    /*console.log(`test questions from Pagination:`, questions);*/

    useEffect(() => {
        const getQuestions = async () => {
            setLoading(true);
            const res = await question;
            SetQuestions(res);
            setLoading(false);
            /*console.log(`test res from Pagination:`, res);*/
        }
        getQuestions();
    },[]);


const lastQuestionsIndex = page * questionsPerPage;
const firstQuestionsIndex = lastQuestionsIndex - questionsPerPage;
const currentQuestion = questions.slice(firstQuestionsIndex,lastQuestionsIndex);


    return (
        <div>
            <Grid container spacing={3} >
                {currentQuestion.map((question,index) => (
                    <Grid  key={question.id} sx={{display: "flex", justifyContent: "space-between"}} xs={12} sm={6}
                           md={4} lg={2} item >

                        <QuestionCard  question={question} index={index} loading={loading} />

                    </Grid>
                ))}
                <Grid sx={{marginY:15, marginX:'auto' }}>
                    <TestAppPagination handleChange={handleChange} page={page} questionsPerPage={questionsPerPage} questions={questions.length} />
                </Grid>
            </Grid>
        </div>
    );
};

export default QuestionList;