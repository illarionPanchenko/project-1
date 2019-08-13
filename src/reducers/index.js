import { combineReducers } from "redux";
import counterReducer from "./reducer";

const allReducers = combineReducers({
    counter: counterReducer,
});

export default allReducers;