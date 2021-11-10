const ADD_TITLE_DESCRIPTION_QUESTION = 'ADD_TITLE_DESCRIPTION_QUESTION';
const TYPE_ANSWER_FLAG = 'TYPE_ANSWER_FLAG';
const VARIANT_TITLE = 'VARIANT_TITLE';
const TOGGLE_CHECKBOX = 'TOGGLE_CHECKBOX';
const ADD_VARIANT_TEXT = 'ADD_VARIANT_TEXT';
const ADD_VARIANT = 'ADD_VARIANT';
const REMOVE_VARIANT = 'REMOVE_VARIANT';
const ADD_QUESTION = 'ADD_QUESTION';

let defaultState = {

    questions: [
        {
            id: 1635621494500,
            title: null,
            description: null,
            image: [],
            variants: [
                {
                    id: 1635621494700,
                    chekBoxFlag: true,
                    variantTitle: null,
                    variantTextArea: null,
                    typeAnswerFlag: true,
                    rightAnswer: false,
                }
            ],
        },
    ]
};


const editQuestionReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_TITLE_DESCRIPTION_QUESTION:
            return {
                ...state, questions:
                    state.questions.map(item => {
                        if (item.id === action.item.id) {
                            return {
                                ...item,
                                title: action.titleText,
                                description: action.descriptionText
                            }
                        }
                        return item;
                    })

            };

        case VARIANT_TITLE:
        case TOGGLE_CHECKBOX:
        case ADD_VARIANT_TEXT:
        case TYPE_ANSWER_FLAG:

            return {
                ...state,
                questions: state.questions.map((q) => {
                    if (q.id === action.id) {
                        return {
                            ...q,
                            variants: q.variants.map((v) => {
                                if (v.id === action.variants[0].id) {
                                    return {
                                        ...v,
                                        variantTitle: action.variantTitle,
                                        chekBoxFlag: action.flag,
                                        variantTextArea: action.variantTextArea,
                                        typeAnswerFlag: action.typeAnswerFlag
                                    };
                                }
                                return v;
                            })
                        };
                    }
                    return q;
                })
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
        case ADD_QUESTION:
            return ({
                ...state,
                questions: [{
                    ...state.questionAndAnswer,
                    variants: [...state.questionAndAnswer.variants],
                    id: Date.now()
                }]
            });

        default:
            return state;
    }
};

export const addTitleAndDescriptionQuestionCreator = (titleText, descriptionText, item) => ({
    type: ADD_TITLE_DESCRIPTION_QUESTION,
    titleText,
    descriptionText,
    item
});
/*export const addDescriptionQuestionCreator = (,item) => ({type: ADD_DESCRIPTION_QUESTION, descriptionText,item});*/
export const addVariantContentCreator = (flag, variantTitle, variantTextArea, typeAnswerFlag, item) => ({
    type: VARIANT_TITLE,
    flag, variantTitle, variantTextArea, typeAnswerFlag, ...item
});

export const addVariantCreator = () => ({type: ADD_VARIANT});
export const removeVarCreator = (item) => ({type: REMOVE_VARIANT, item});
export const addQuestionCreator = () => ({type: ADD_QUESTION});

export default editQuestionReducer;