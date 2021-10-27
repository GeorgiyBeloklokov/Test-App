import {userAPI} from "../api/api";


const ADD_TITLE_QUESTION = 'ADD_TITLE_QUESTION';
const ADD_DESCRIPTION_QUESTION = 'ADD_DESCRIPTION_QUESTION';
const ADD_IMAGE_QUESTION = 'ADD_IMAGE_QUESTION';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

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
        }

};

const editQuestionReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_TITLE_QUESTION:
        return {
            ...state, title: action.titleText
        };
        case ADD_IMAGE_QUESTION:
            return {...state, questionAndAnswer: [...state.questionAndAnswer.image, action.image  ] };


        case SAVE_PHOTO_SUCCESS:
            return{
                ...state, image: action.photos

            };


       /* case ADD_DESCRIPTION_QUESTION:
            return {
                ...state, description: action.descriptionText
            }*/


        default:
            return state;


    }

};



export const addTitleQuestionCreator = (titleText) => ({type:ADD_TITLE_QUESTION, titleText});
export const addDescriptionQuestionCreator = (descriptionText) => ({type:ADD_DESCRIPTION_QUESTION, descriptionText});
export const addImageQuestionCreator = (image) => ({type:ADD_IMAGE_QUESTION, image});
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});

export const savePhoto = (file) => async () => {
    let response = await userAPI.savePhotos(file);
    if (response.data) {
        (savePhotoSuccess(response));
    }
};

export default editQuestionReducer;