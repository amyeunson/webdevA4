import { ERROR } from "../actionTypes";
const initialState = { error: "initial error state" }

export default function uiFeedback(state = initialState, action) {
    switch (action.type) {
        case ERROR:
            return { ...state, error: "an error occured" }
        default:
            return state;
    }
}