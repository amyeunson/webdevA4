import { combineReducers } from "redux";
import uiFeedback from './uiFeedback';

export default combineReducers({
    feedback: uiFeedback,
});