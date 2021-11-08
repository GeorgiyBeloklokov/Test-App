/*



const ADD_QUESTION = 'ADD_QUESTION';


let inicialState = {
    questions: []
};


const questionsListReducer = (state = inicialState, action) => {
    switch (action.type) {
        case ADD_QUESTION:
            return ({
                ...state,
                questions: [{
                    ...state.questionAndAnswer,
                    variants: [...state.questionAndAnswer.variants,],
                    id: Date.now()
                }]

            });
        default:
            return state;
    }
};
export const addQuestionCreator = () => ({type: ADD_QUESTION});


export default questionsListReducer;
*/
