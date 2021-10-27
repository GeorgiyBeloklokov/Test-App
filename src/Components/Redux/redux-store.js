import {combineReducers, createStore} from "redux";
import editQuestionReducer from "./editQuestionReducer";
import {composeWithDevTools} from "redux-devtools-extension";


const rootReducer = combineReducers({
edQuestRed:editQuestionReducer,
});

export const store = createStore(rootReducer,composeWithDevTools());
export default store;
