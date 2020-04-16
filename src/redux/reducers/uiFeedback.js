import { ERROR, CLEAR_ERROR } from "../actionTypes";
import { initialErrorState } from "../../constants";

export default function uiFeedback(state = { error: initialErrorState }, action) {
    switch (action.type) {
        case ERROR:
            return { ...state, error: "an error occured" }
        case CLEAR_ERROR:
            return { ...state, error: initialErrorState }
        default:
            return state;
    }
}