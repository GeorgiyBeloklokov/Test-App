import {createSlice, nanoid} from "@reduxjs/toolkit";


const questionReducerSlice = createSlice({

    name: "questReducer",

    initialState: {
        passedQuest:[],
        failedQuest:[],
        questions: [
            {
                id: nanoid(),
                mulVarQuest:null,
                title: 'Base question',
                description: 'First question',
                images:[{
                    image: 'https://adrive.by/WebFiles/About/AboutImg4.jpg'
                }],
                variants: [
                    {
                        id: nanoid(),
                        chekBoxFlag: true,
                        variantTitle: null,
                        variantTextArea: null,
                        typeAnswerFlag: true,
                        rightAnswer: false,
                    }
                ],
            },
            {
                id: nanoid(),
                mulVarQuest:null,
                title: 'Multiple var. question',
                description: 'This question has several correct answers',
                images:[{
                    image: 'https://adrive.by/WebFiles/About/AboutImg4.jpg'
                }],
                variants: [
                    {
                        id: nanoid(),
                        chekBoxFlag: true,
                        variantTitle: null,
                        variantTextArea: null,
                        typeAnswerFlag: true,
                        rightAnswer: false,
                    }
                ],
            },
            {
                id: nanoid(),
                mulVarQuest:null,
                title: 'Multiple var. question',
                description: 'This question has several correct answers',
                images:[{
                    image: 'https://adrive.by/WebFiles/About/AboutImg4.jpg'
                }],
                variants: [
                    {
                        id: nanoid(),
                        chekBoxFlag: true,
                        variantTitle: null,
                        variantTextArea: null,
                        typeAnswerFlag: true,
                        rightAnswer: false,
                    }
                ],
            },
            {
                id: nanoid(),
                mulVarQuest:null,
                title: 'Multiple var. question',
                description: 'This question has several correct answers',
                images:[{
                    image: 'https://adrive.by/WebFiles/About/AboutImg4.jpg'
                }],
                variants: [
                    {
                        id: nanoid(),
                        chekBoxFlag: true,
                        variantTitle: null,
                        variantTextArea: null,
                        typeAnswerFlag: true,
                        rightAnswer: false,
                    }
                ],
            },
            {
                id: nanoid(),
                mulVarQuest:null,
                title: 'Passed question',
                description: 'Passed question example',
                images:[{
                    image: 'https://adrive.by/WebFiles/About/AboutImg4.jpg'
                }],
                variants: [
                    {
                        id: nanoid(),
                        chekBoxFlag: true,
                        variantTitle: null,
                        variantTextArea: null,
                        typeAnswerFlag: true,
                        rightAnswer: false,
                    }
                ],
            },
            {
                id: nanoid(),
                mulVarQuest:null,
                title: 'Failed question',
                description: 'Failed question example',
                images:[{
                    image: 'https://adrive.by/WebFiles/About/AboutImg4.jpg'
                }],
                variants: [
                    {
                        id: nanoid(),
                        chekBoxFlag: true,
                        variantTitle: null,
                        variantTextArea: null,
                        typeAnswerFlag: true,
                        rightAnswer: false,
                    }
                ],
            },
        ]
    },


    reducers: {


        addQuestion(state, action) {
            state.questions = [
                ...state.questions, {
                    id: nanoid(),
                    title: action.payload.title,
                    description: action.payload.textarea,
                   images:[{
                        ...state.questions.images,

                       image:action.payload.image

                   }],
                    variants: [
                        {
                            id: nanoid(),
                            chekBoxFlag: true,
                            variantTitle: null,
                            variantTextArea: null,
                            typeAnswerFlag: true,
                            rightAnswer: false,
                        }
                    ],
                },
            ]
        },

        removeQuestion(state, action) {
            state.questions = state.questions.filter(item => item.id !== action.payload.id)
        },


        addTitleQuestion(state, action) {
            state.questions =
                state.questions.map(item => {
                    if (item.id === action.payload.id) {
                        return {
                            ...item,
                            title: action.payload.data,
                        }
                    }
                    return item;
                })
        },

        addDescriptionQuestion(state, action) {
            state.questions =
                state.questions.map(item => {
                    if (item.id === action.payload.id) {
                        return {
                            ...item,
                            description: action.payload.data
                        }
                    }
                    return item;
                })
        },

        addVariant(state, action) {
            state.questions = state.questions.map((q) => {
                if (q.id === action.payload.id) {
                    return {
                        ...q,
                        variants: [
                            ...state.questions[0].variants, {
                                id: nanoid(),
                                chekBoxFlag: true,
                                variantTitle: null,
                                variantTextArea: null,
                                typeAnswerFlag: true,
                                rightAnswer: false,
                            }]
                    };
                }
                return q;
            })
        },

        removeVariant(state, action) {
            state.questions = state.questions.map((q) => {
                return {
                    ...q,
                    variants: q.variants.filter(item => item.id !== action.payload)
                }
            })
        },

        addVariantTitle(state, action) {
            state.questions = state.questions.map((q) => {
                if (q.id === action.payload.questId) {
                    return {
                        ...q,
                        variants: q.variants.map((v) => {
                            if (v.id === action.payload.varId) {
                                return {
                                    ...v,
                                    variantTitle: action.payload.title

                                };
                            }
                            return v;
                        })
                    };
                }
                return q;
            })
        },

        toggleVarCheckBox(state, action) {
            state.questions = state.questions.map((q) => {
                if (q.id === action.payload.questId) {
                    return {
                        ...q,
                        variants: q.variants.map((v) => {
                            if (v.id === action.payload.varId) {
                                return {
                                    ...v,
                                    chekBoxFlag: action.payload.chek,

                                };
                            }
                            return v;
                        })
                    };
                }
                return q;
            })
        },

        addVariantText(state, action) {
            state.questions = state.questions.map((q) => {
                if (q.id === action.payload.questId) {
                    return {
                        ...q,
                        variants: q.variants.map((v) => {
                            if (v.id === action.payload.varId) {
                                return {
                                    ...v,
                                    variantTextArea: action.payload.varTextArea,

                                };
                            }
                            return v;
                        })
                    };
                }
                return q;
            })
        },

        toggleTypeAnswer(state, action) {
            state.questions = state.questions.map((q) => {
                if (q.id === action.payload.data.questId) {
                    return {
                        ...q,
                        variants: q.variants.map((v) => {
                            if (v.id === action.payload.data.varId) {
                                return {
                                    ...v,
                                    typeAnswerFlag: action.payload.typeAnswer,

                                };
                            }
                            return v;
                        })
                    };
                }
                return q;
            })
        },


    }
})

export default questionReducerSlice.reducer

export const {
    addVariant, removeVariant, addVariantTitle, addVariantText, toggleTypeAnswer, toggleVarCheckBox, addQuestion,
    removeQuestion, addTitleQuestion, addDescriptionQuestion
} = questionReducerSlice.actions

