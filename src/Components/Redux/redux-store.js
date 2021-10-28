import {combineReducers, createStore} from "redux";
import editQuestionReducer from "./editQuestionReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import variantAnswerReducer from "./VariantQuestionReducer";


const rootReducer = combineReducers({
    edQuestRed: editQuestionReducer,
    variantAnswer: variantAnswerReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
export default store;
