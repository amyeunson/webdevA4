import { ERROR, CLEAR_ERROR, SUCCESS, CLEAR_SUCCESS } from "../actionTypes";
import { initialFeedbackState } from "../../constants";

export default function uiFeedback(state = initialFeedbackState, action) {
    switch (action.type) {
        case ERROR:
            return { ...state, error: action.message }
        case SUCCESS:
            return { ...state, success: action.message }
        case CLEAR_ERROR:
            return { ...state, error: "" }
        case CLEAR_SUCCESS:
            return { ...state, success: "" }
        default:
            return state;
    }
}