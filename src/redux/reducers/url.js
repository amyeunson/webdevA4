import { SHOW_URL, SHOW_UPDATED_URL, CLEAR_SHOWN_URL } from "../actionTypes";

export default function uiFeedback(state = "", action) {
    switch (action.type) {
        case SHOW_URL:
            return action.url.data.shortUrl
        case SHOW_UPDATED_URL:
            return action.url
        case CLEAR_SHOWN_URL:
            return ""
        default:
            return state;
    }
}