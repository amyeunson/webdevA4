import Axios from 'axios'
import { ERROR, CLEAR_ERROR, SHOW_URL, CLEAR_SHOWN_URL, CLEAR_SUCCESS, SUCCESS } from './actionTypes';

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

export const clearURL = () => {
    return {
        type: CLEAR_SHOWN_URL
    }
}

export function retrieveLongURL(id) {
    return function (dispatch) {
        return Axios.get('/url/' + id)
            .then(response => dispatch(UISuccess()),
                (error) => dispatch(UIError("No URL found")));
    }
}

export function createNewURL(url) {
    let id = url.urlID;
    return function (dispatch) {
        return Axios.post('/api/' + id, url)
            .then(response => dispatch(displayURL(response)),
                (error) => dispatch(UIError("This URL alias is already in use")))
            .catch(err => dispatch(UIError("Error creating the shortened URL")));
    }
}

export function updateURL(id, url) {
    return function (dispatch) {
        return Axios.put('/api/url/' + id + '/edit', url)
            .then(response => dispatch(displayURL(response)),
                (error) => dispatch(UIError("Error updating the shortened URL")));
    }
}

export function deleteURL(id) {
    return function (dispatch) {
        return Axios.delete('/api/url/' + id + '/edit')
            .then(response => dispatch(UISuccess()),
                (error) => dispatch(UIError("Error deleting URL")));
    }
}