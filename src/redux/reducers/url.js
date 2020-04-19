import { SHOW_URL, CLEAR_SHOWN_URL, UPDATE_URL } from "../actionTypes";

export default function uiFeedback(state = "", action) {
    switch (action.type) {
        case SHOW_URL:
            return action.url.data.shortUrl
        case UPDATE_URL:
            return action.url.data;
        case CLEAR_SHOWN_URL:
            return ""
        default:
            return state;
    }
}