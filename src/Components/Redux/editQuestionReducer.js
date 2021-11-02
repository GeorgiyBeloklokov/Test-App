const ADD_TITLE_QUESTION = 'ADD_TITLE_QUESTION';
const ADD_DESCRIPTION_QUESTION = 'ADD_DESCRIPTION_QUESTION';
const TYPE_ANSWER_FLAG = 'TYPE_ANSWER_FLAG';
const VARIANT_TITLE = 'VARIANT_TITLE';
const TOGGLE_CHECKBOX = 'TOGGLE_CHECKBOX';
const ADD_VARIANT_TEXT = 'ADD_VARIANT_TEXT';
const ADD_VARIANT = 'ADD_VARIANT';
const REMOVE_VARIANT = 'REMOVE_VARIANT';

let defaultState = {
    questionAndAnswer:
        {
            title: null,
            description: null,
            image: [],
            typeofQuestion: false,
            answer: '',
            rightAnswer: false,
            textAnswer: '',
            variants: [
                {
                    id: 1635621494706,
                    chekBoxFlag: true,
                    variantTitle: null,
                    variantTextArea: null,
                    typeAnswerFlag: true
                }
            ],
        },

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

        /*case TYPE_ANSWER_FLAG:
            return {
                ...state,
                questionAndAnswer: {...state.questionAndAnswer, typeAnswerFlag: !state.questionAndAnswer.typeAnswerFlag}
            };*/

        case VARIANT_TITLE:
        case TOGGLE_CHECKBOX:
        case ADD_VARIANT_TEXT:
        case TYPE_ANSWER_FLAG:
            return {
                ...state, questionAndAnswer: {
                    ...state.questionAndAnswer, variants: [...state.questionAndAnswer.variants.map(item => {
                        if (item.id === action.item.id) {
                            return {
                                ...item,
                                variantTitle: action.variantTitle,
                                chekBoxFlag: action.flag,
                                variantTextArea: action.variantTextArea,
                                typeAnswerFlag: action.typeAnswerFlag
                            }
                        }
                        return item;
                    })]
                }

            };

        case ADD_VARIANT:
            return ({
                ...state,
                questionAndAnswer: {
                    ...state.questionAndAnswer,
                    variants: [...state.questionAndAnswer.variants, {...state.questionAndAnswer, id: Date.now()}]
                }
            });
        case REMOVE_VARIANT:
            return ({
                ...state,
                questionAndAnswer: {
                    ...state.questionAndAnswer,
                    variants: state.questionAndAnswer.variants.filter(item => item.id !== action.item.id)
                }
            });

        default:
            return state;


    }
};

export const addTitleQuestionCreator = (titleText) => ({type: ADD_TITLE_QUESTION, titleText});
export const addDescriptionQuestionCreator = (descriptionText) => ({type: ADD_DESCRIPTION_QUESTION, descriptionText});
/*export const typeAnswerFlagCreator = (flag) => ({type: TYPE_ANSWER_FLAG, flag});*/
export const addVariantContentCreator = (flag, variantTitle, variantTextArea, typeAnswerFlag, item) => ({
    type: VARIANT_TITLE,
    flag,
    variantTitle,
    variantTextArea,
     typeAnswerFlag,
     item
});
export const addVariantCreator = () => ({type: ADD_VARIANT});
export const removeVarCreator = (item) => ({type: REMOVE_VARIANT, item});


export default editQuestionReducer;