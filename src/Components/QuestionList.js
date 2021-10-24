
import React from 'react';
import QuestionItem from "./QuestionItem";



const QuestionList = (props) => {
    const { questions} = props;

    return (
        <div className='goods-list col-md-8'>
            <div className='row'>
                {questions.map((item) => (
                    <QuestionItem key={item.id} {...item} />
                ))}
            </div>
        </div>
    );
};

export default QuestionList;