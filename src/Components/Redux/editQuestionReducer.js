/*
const ADD_TITLE_DESCRIPTION_QUESTION = 'ADD_TITLE_DESCRIPTION_QUESTION';
const TYPE_ANSWER_FLAG = 'TYPE_ANSWER_FLAG';
const VARIANT_TITLE = 'VARIANT_TITLE';
const TOGGLE_CHECKBOX = 'TOGGLE_CHECKBOX';
const ADD_VARIANT_TEXT = 'ADD_VARIANT_TEXT';
const ADD_VARIANT = 'ADD_VARIANT';
const REMOVE_VARIANT = 'REMOVE_VARIANT';
const ADD_QUESTION = 'ADD_QUESTION';
const REMOVE_QUESTION = 'REMOVE_QUESTION';

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
                                if (v.id === action.itemIdFlag) {
                                    return {
                                        ...v,
                                        variantTitle: action.variantTitle,
                                        chekBoxFlag: action.chekBoxFlag,
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
            return {
                ...state,
                questions: state.questions.map((q) => {
                    if (q.id === action.id) {
                        return {
                            ...q,
                            variants:[
                                ...state.questions[0].variants, {
                                    id: Date.now(),
                                    chekBoxFlag: true,
                                    variantTitle: null,
                                    variantTextArea: null,
                                    typeAnswerFlag: true,
                                    rightAnswer: false,
                                }
                            ]

                        };
                    }
                    return q;
                })
                };


        case REMOVE_VARIANT:

            return {
                ...state,
                questions: state.questions.map((q) => {
                        return {
                            ...q,
                            variants: q.variants.filter(item => item.id !== action.id)
                        }
                })
            };




        case ADD_QUESTION:
            return ({
                ...state,
                questions: [
                    ...state.questions, {
                        id: Date.now(),
                        title: null,
                        description: null,
                        image: [],
                        variants: [
                            {
                                id: Math.floor(Math.random() * 16356214947001),
                                chekBoxFlag: true,
                                variantTitle: null,
                                variantTextArea: null,
                                typeAnswerFlag: true,
                                rightAnswer: false,
                            }
                        ],
                    },
                ]
            });

        case REMOVE_QUESTION:
            return {
                ...state,
                questions: state.questions.filter(item => item.id !== action.id)

            };

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

export const addVariantContentCreator = (chekBoxFlag, variantTitle, variantTextArea, typeAnswerFlag, item,itemIdFlag) => ({
    type: VARIANT_TITLE,
    chekBoxFlag, variantTitle, variantTextArea, typeAnswerFlag, ...item, itemIdFlag
});

export const addVariantCreator = (item) => ({type: ADD_VARIANT, ...item});
export const removeVarCreator = (item) => ({type: REMOVE_VARIANT, ...item});
export const addQuestionCreator = (item) => ({type: ADD_QUESTION, ...item});
export const removeQuestionCreator = (item) => ({type: REMOVE_QUESTION, ...item});

export default editQuestionReducer;
*/
