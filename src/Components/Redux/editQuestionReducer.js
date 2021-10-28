const ADD_TITLE_QUESTION = 'ADD_TITLE_QUESTION';
const ADD_DESCRIPTION_QUESTION = 'ADD_DESCRIPTION_QUESTION';
const TYPE_ANSWER_FLAG = 'TYPE_ANSWER_FLAG';
const VARIANT_TITLE = 'VARIANT_TITLE';
const TOGGLE_CHECKBOX = 'TOGGLE_CHECKBOX';

let defaultState = {
    questionAndAnswer:
        {
            /*id:Date.now(),*/
            title: null,
            description: null,
            image: [],
            typeofQuestion: false,
            variants: [],
            answer: '',
            rightAnswer: false,
            textAnswer: '',
            typeAnswerFlag: true,
            variant:null,
            chekBoxFlag:true,
        }
};

const editQuestionReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_TITLE_QUESTION:
            return {...state, questionAndAnswer: {...state.questionAndAnswer, title: action.titleText }
            };
        case ADD_DESCRIPTION_QUESTION:
            return {...state, questionAndAnswer: {...state.questionAndAnswer, description: action.descriptionText }
            };
        case TYPE_ANSWER_FLAG:
            return {...state, questionAndAnswer: {...state.questionAndAnswer, typeAnswerFlag: !state.questionAndAnswer.typeAnswerFlag }
            };
        case VARIANT_TITLE:
            return {...state, questionAndAnswer: {...state.questionAndAnswer, variant: action.variantText }
            };
            case TOGGLE_CHECKBOX:
            return {...state, questionAndAnswer: {...state.questionAndAnswer, chekBoxFlag: !state.questionAndAnswer.chekBoxFlag }
            };

        default:
            return state;


    }
};

export const addTitleQuestionCreator = (titleText) => ({type:ADD_TITLE_QUESTION, titleText});
export const addDescriptionQuestionCreator = (descriptionText) => ({type:ADD_DESCRIPTION_QUESTION, descriptionText});
export const typeAnswerFlagCreator = (flag) => ({type:TYPE_ANSWER_FLAG, flag});
export const addVariantOneCreator = (variantText) => ({type:VARIANT_TITLE, variantText});
export const toggleChekBoxCreator = (flag) => ({type:TOGGLE_CHECKBOX, flag});



export default editQuestionReducer;