import Axios from 'axios'
import { ERROR } from './actionTypes';

export const UIError = () => {
    return {
        type: ERROR
    }
}

export function retrieveLongURL(url) {
    return function (dispatch) {
        return Axios.get('/', url)
            .then(response => console.log("Successfully retrieved URL"),
                (error) => dispatch(UIError()));
    }
}

export function createNewURL(url) {
    return function (dispatch) {
        return Axios.post('/api/', url)
            .then(response => console.log("Successfully created URL")),
            (error) => dispatch(UIError());
    }
}

export function updateURL(url) {
    return function (dispatch) {
        return Axios.put('/url/:ID/edit', url)
            .then(response => console.log("Successfully updated new URL"),
                (error) => dispatch(UIError()));
    }
}

export function deleteURL(url) {
    return function (dispatch) {
        return Axios.delete('/url/:ID', url)
            .then(response => console.log("Successfully deleted new URL"),
                (error) => dispatch(UIError()));
    }
}