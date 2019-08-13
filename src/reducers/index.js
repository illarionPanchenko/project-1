import { combineReducers } from "redux";
import { counterReducer, termReducer, categoryReducer, onChangeReducer } from "./reducer";

const allReducers = combineReducers({
    counter: counterReducer,
    term: termReducer,
    category: categoryReducer,
    onChange: onChangeReducer,
});

export default allReducers;