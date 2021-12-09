import {createSlice, nanoid} from "@reduxjs/toolkit";


const questionReducerSlice = createSlice({

    name: "questReducer",

    initialState: {
        confettiTogle:false,
        userAnswer:[
            {
                questId: '',
                variantsAnswer: [
                    {
                        varId: '',
                        answerCheckBox: ''
                    }],
            }
        ],
        passedQuest:[],
        failedQuest:[],
        questions: [
            {
                id: nanoid(),
                mulVarQuest:'',
                title: 'Base question ',
                description: 'First question',
                images:[{
                    image: 'https://adrive.by/WebFiles/About/AboutImg4.jpg'
                }],
                variants: [
                    {
                        id: nanoid(),
                        rightAnswer: false,
                        variantTitle: '',
                        variantTextArea: '',
                        typeAnswerFlag: true,

                    },
                ],
            },
            {
                id: nanoid(),
                mulVarQuest:'',
                title: 'Base question ',
                description: 'First question',
                images:[{
                    image: 'https://adrive.by/WebFiles/About/AboutImg4.jpg'
                }],
                variants: [
                    {
                        id: nanoid(),
                        rightAnswer: false,
                        variantTitle: '',
                        variantTextArea: '',
                        typeAnswerFlag: true,

                    },
                ],
            },
            {
                id: nanoid(),
                mulVarQuest:'',
                title: 'Base question ',
                description: 'First question',
                images:[{
                    image: 'https://adrive.by/WebFiles/About/AboutImg4.jpg'
                }],
                variants: [
                    {
                        id: nanoid(),
                        rightAnswer: false,
                        variantTitle: '',
                        variantTextArea: '',
                        typeAnswerFlag: true,

                    },
                ],
            },
            {
                id: nanoid(),
                mulVarQuest:'',
                title: 'Base question ',
                description: 'First question',
                images:[{
                    image: 'https://adrive.by/WebFiles/About/AboutImg4.jpg'
                }],
                variants: [
                    {
                        id: nanoid(),
                        rightAnswer: false,
                        variantTitle: '',
                        variantTextArea: '',
                        typeAnswerFlag: true,

                    },
                ],
            },
            {
                id: nanoid(),
                mulVarQuest:'',
                title: 'Base question ',
                description: 'First question',
                images:[{
                    image: 'https://adrive.by/WebFiles/About/AboutImg4.jpg'
                }],
                variants: [
                    {
                        id: nanoid(),
                        rightAnswer: false,
                        variantTitle: '',
                        variantTextArea: '',
                        typeAnswerFlag: true,

                    },
                ],
            },
            {
                id: nanoid(),
                mulVarQuest:'',
                title: 'Base question ',
                description: 'First question',
                images:[{
                    image: 'https://adrive.by/WebFiles/About/AboutImg4.jpg'
                }],
                variants: [
                    {
                        id: nanoid(),
                        rightAnswer: false,
                        variantTitle: '',
                        variantTextArea: '',
                        typeAnswerFlag: true,

                    },
                ],
            },


        ]
    },


    reducers: {

        /*addUserAnswer(state, action) {
            Object.keys(action.payload.data).map((k) => {
                return {
                    varId: (k),
                    answerCheckBox: action.payload.data[k]
                }),
            state.userAnswer = [
                ...state.userAnswer, {
                    questId: action.payload.questId,
                    variantsAnswer: [
                        {


                            }
                            }

                    ],
                }]
        },*/

        confettiToggle(state,action) {
          state.confettiTogle = action.payload.open
        },

        addImage(state, action) {
            state.questions = state.questions.map((q) => {
                if (q.id === action.payload.questId) {
                    return {
                        ...q,
                        images:[{
                           image: action.payload.img
                        }]
                    };
                }
                return q;
            })
        },


        addQuestion(state) {
            state.questions = [
                ...state.questions, {
                    id: nanoid(),
                    mulVarQuest:'',
                    title: '',
                    description: '',
                    images:[{
                        image: 'https://adrive.by/WebFiles/About/AboutImg4.jpg'
                    }],
                    variants: [
                        {
                            id: nanoid(),
                            rightAnswer: false,
                            variantTitle: null,
                            variantTextArea: null,
                            typeAnswerFlag: true,

                        }
                    ],
                },
            ]
        },

        removeQuestion(state, action) {
            state.questions = state.questions.filter(item => item.id !== action.payload.id)
        },


        addTitleDescriptionQuestion(state, action) {
            state.questions =
                state.questions.map(item => {
                    if (item.id === action.payload.item) {
                        return {
                            ...item,
                                title:   action.payload.questTitle || action.payload.questTitle === ""  ? action.payload.questTitle : item.title ,
                                description:  action.payload.questDesc || action.payload.questDesc === "" ? action.payload.questDesc : item.questDesc
                            /*description:  action.payload.questDesc ?? item.description*/
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
                            ...q.variants, {
                                id: nanoid(),
                                rightAnswer: false,
                                variantTitle: '',
                                variantTextArea: '',
                                typeAnswerFlag: true,

                            }
                        ]
                    }
                }
                return q;
            })
        },

        removeVariant(state, action) {
            state.questions = state.questions.map((q) => {
                return {
                    ...q,
                    variants: q.variants.filter(item => item.id !== action.payload.varId)
                };
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
                                    rightAnswer: action.payload.chek,

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
});

export default questionReducerSlice.reducer

export const {
    addVariant, removeVariant, confettiToggle, addImage, addUserAnswer,
    addTitleDescriptionQuestion,addVariantTitle, addVariantText, toggleTypeAnswer, toggleVarCheckBox, addQuestion,
    removeQuestion,
} = questionReducerSlice.actions

