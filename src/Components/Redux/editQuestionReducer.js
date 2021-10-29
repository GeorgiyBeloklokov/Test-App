const ADD_TITLE_QUESTION = 'ADD_TITLE_QUESTION';
const ADD_DESCRIPTION_QUESTION = 'ADD_DESCRIPTION_QUESTION';
const TYPE_ANSWER_FLAG = 'TYPE_ANSWER_FLAG';
const VARIANT_TITLE = 'VARIANT_TITLE';
const TOGGLE_CHECKBOX = 'TOGGLE_CHECKBOX';
const ADD_VARIANT_TEXT = 'ADD_VARIANT_TEXT';
const ADD_VARIANT = 'ADD_VARIANT';

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
            variantTitle: null,
            chekBoxFlag: true,
            variantTextArea: null,
        },
    variantItem:
        {
            id: Date.now(),
            chekBoxFlag: true,
            variantTitle: null,
            variantTextArea: null,

        }
};

const editQuestionReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_TITLE_QUESTION:
            return {
                ...state, questionAndAnswer: {...state.questionAndAnswer, title: action.titleText}
            };
        case ADD_DESCRIPTION_QUESTION:
            return {
                ...state, questionAndAnswer: {...state.questionAndAnswer, description: action.descriptionText}
            };
        case ADD_VARIANT_TEXT:
            return {
                ...state, variantItem: {...state.variantItem, variantTextArea: action.variantTextArea}
            };
        case TYPE_ANSWER_FLAG:
            return {
                ...state,
                questionAndAnswer: {...state.questionAndAnswer, typeAnswerFlag: !state.questionAndAnswer.typeAnswerFlag}
            };
        case VARIANT_TITLE:
            return {
                ...state, variantItem: {...state.variantItem, variantTitle: action.variantTitle}
            };
        case TOGGLE_CHECKBOX:
            return {
                ...state,
                variantItem: {...state.variantItem, chekBoxFlag: !state.variantItem.chekBoxFlag}
            };
        case ADD_VARIANT:
            let stateCopy = {...state};
            stateCopy.questionAndAnswer = {...stateCopy.questionAndAnswer};
            stateCopy.questionAndAnswer.variants.push({...state.variantItem});
            return stateCopy;

        default:
            return state;


    }
};

export const addTitleQuestionCreator = (titleText) => ({type: ADD_TITLE_QUESTION, titleText});
export const addDescriptionQuestionCreator = (descriptionText) => ({type: ADD_DESCRIPTION_QUESTION, descriptionText});
export const typeAnswerFlagCreator = (flag) => ({type: TYPE_ANSWER_FLAG, flag});
export const addVariantOneCreator = (variantTitle) => ({type: VARIANT_TITLE, variantTitle});
export const addVariantTextCreator = (variantTextArea) => ({type: ADD_VARIANT_TEXT, variantTextArea});
export const toggleChekBoxCreator = (flag) => ({type: TOGGLE_CHECKBOX, flag});
export const addVariantCreator = () => ({type: ADD_VARIANT});


export default editQuestionReducer;