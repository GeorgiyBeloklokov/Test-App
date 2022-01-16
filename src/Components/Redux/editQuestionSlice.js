import {createAsyncThunk, createSlice, nanoid} from "@reduxjs/toolkit";
import {ref,update,child,push} from "firebase/database";
import {auth, database} from "../Firebase/firebase";


export const setQuest = createAsyncThunk(
    'editQuest/setQuest',
    async (data, {rejectWithValue,getState , dispatch}) => {
        const userId = auth.currentUser.uid;
        const newPostKey = push(child(ref(database), 'questions')).key;
        const key = (child(ref(database), 'questions')).key;
        const state = getState();
        let isQuestionInList = state.editQuest.questions.some(item => item.id === data.id);
        try {
            if ( !isQuestionInList ) {
                await update(ref(database, `users/userId: ${userId}/questId: ${newPostKey}`), {
                    question:data
                })
                dispatch(saveQuestion({...data}));
            }else{
                await update(ref(database, `users/userId: ${userId}/questId: ${key}`), {
                    question:data
                })
                dispatch(saveQuestion({...data}));
            }

        } catch (error) {
            const data = error.message;
            let errorMessage = data.match(/(?<=\/).+(?=\))/g);
            return rejectWithValue(errorMessage);
        }
    })


const editQuestionSlice = createSlice({

    name: "editQuest",

    initialState: {
        confettiToggle: false,
        userAnswer: [],
        passedQuest: [],
        failedQuest: [],

        questions: [
            {
                id: nanoid(),
                title: 'Base question ',
                description: 'Some our text',
                image: 'https://adrive.by/WebFiles/About/AboutImg4.jpg',
                variants: [{variantTitle: "Some text", checkbox: false}
                ]
            },
            {
                id: nanoid(),
                title: 'Base question ',
                description: 'Some our text',
                image: 'https://adrive.by/WebFiles/About/AboutImg4.jpg',
                variants: [
                    {variantTitle: "Some text", checkbox: false}
                ]
            },
            {
                id: nanoid(),
                title: 'Base question ',
                description: 'Some our text',
                image: 'https://adrive.by/WebFiles/About/AboutImg4.jpg',
                variants: [{variantTitle: "Some text", checkbox: false}]
            },
            {
                id: nanoid(),
                title: 'Base question ',
                description: 'Some our text',
                image: 'https://adrive.by/WebFiles/About/AboutImg4.jpg',
                variants: [{variantTitle: "Some text", checkbox: false}]
            },
            {
                id: nanoid(),
                title: 'Base question ',
                description: 'Some our text',
                image: 'https://adrive.by/WebFiles/About/AboutImg4.jpg',
                variants: [{variantTitle: "Some text", checkbox: false}]
            },
            {
                id: nanoid(),
                title: 'Base question ',
                description: 'Some our text',
                image: 'https://adrive.by/WebFiles/About/AboutImg4.jpg',
                variants: [{variantTitle: "Some text", checkbox: false}]
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

        confettiToggle(state, action) {
            state.confettiTogle = action.payload.open
        },

        addImage(state, action) {
            state.questions = state.questions.map((q) => {
                if (q.id === action.payload.questId) {
                    return {
                        ...q,
                        images: [{
                            image: action.payload.img
                        }]
                    };
                }
                return q;
            })
        },


        saveQuestion(state, action) {
            let quest = state.questions.findIndex(item => item.id === action.payload.id)
            if (quest !== -1){
                let parsPayload = JSON.parse(JSON.stringify(action.payload))
                state.questions.splice(quest, 1, parsPayload)
            }else{
                state.questions.push(
                    {
                        id: action.payload.id,
                        title: action.payload.title,
                        description: action.payload.description,
                        image: action.payload.image,
                        variants: [...JSON.parse(JSON.stringify(action.payload.variants))]

                    }
                )
            }

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
                            /*title:   action.payload.questTitle || action.payload.questTitle === ""  ? action.payload.questTitle : item.title ,
                            description:  action.payload.questDesc || action.payload.questDesc === "" ? action.payload.questDesc : item.questDesc*/
                            description: action.payload.questDesc ?? item.description,
                            title: action.payload.questTitle ?? item.title

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

export default editQuestionSlice.reducer;

export const {
    addVariant, removeVariant, confettiToggle, addImage, addUserAnswer,
    addTitleDescriptionQuestion, addVariantTitle, addVariantText, toggleTypeAnswer, toggleVarCheckBox, saveQuestion,
    removeQuestion,
} = editQuestionSlice.actions;


