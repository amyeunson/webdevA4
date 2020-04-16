import { combineReducers } from "redux";
import uiFeedback from './uiFeedback';
import url from './url';

export default combineReducers({
    feedback: uiFeedback,
    url: url,
});