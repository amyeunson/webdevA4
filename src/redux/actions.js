import Axios from 'axios'
import { ERROR, CLEAR_ERROR, SHOW_URL, SHOW_UPDATED_URL, CLEAR_SHOWN_URL, CLEAR_SUCCESS, SUCCESS } from './actionTypes';
const validUrl = require('valid-url');

export const UIError = (msg) => {
    return {
        type: ERROR,
        message: msg
    }
}

export const UISuccess = () => {
    return {
        type: SUCCESS,
        message: "Success!"
    }
}

export const clearSuccess = () => {
    return {
        type: CLEAR_SUCCESS
    }
}

export const clearError = () => {
    return {
        type: CLEAR_ERROR
    }
}

export const displayURL = (url) => {
    return {
        type: SHOW_URL,
        url: url
    }
}

export const displayUpdatedURL = (url) => {
    return {
        type: SHOW_UPDATED_URL,
        url: url
    }
}


export const clearURL = () => {
    return {
        type: CLEAR_SHOWN_URL
    }
}

export function retrieveLongURL(id) {
    return function (dispatch) {
        return Axios.get('/url/' + id)
            .then(() => dispatch(UISuccess()),
                () => dispatch(UIError("No URL found")));
    }
}

export function createNewURL(url) {
    if (!isValidURI(url.longUrl)) {
        return UIError("Not a valid URL");
    } else {
        return function (dispatch) {
            return Axios.post('/api/' + url.urlID, url)
                .then(response => dispatch(displayURL(response)),
                    () => dispatch(UIError("This URL alias is already in use")));
        }
    }
}

export function updateURL(path, url) {
    if (!isValidURI(url.longUrl)) {
        return UIError("Not a valid URL");
    } else {
        return function (dispatch) {
            return Axios.put('/api/' + path, url)
                .then(response => dispatch(displayUpdatedURL("http://localhost:3000/url/" + response.data)),
                    () => dispatch(UIError("You can only edit or delete custom shortened URLs")));
        }
    }
}

export function deleteURL(path) {
    return function (dispatch) {
        return Axios.delete('/api/' + path)
            .then(() => dispatch(UISuccess()),
                () => dispatch(UIError("You can only edit or delete custom shortened URLs")));
    }
}

function isValidURI(url) {
    if (!validUrl.isUri(url)) {
        return false;
    }
    return true;
}