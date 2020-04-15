import Axios from 'axios'
import { ERROR } from './actionTypes';

export const UIError = () => {
    return {
        type: ERROR
    }
}

export function retrieveLongURL(id) {
    return function (dispatch) {
        return Axios.get('/url/' + id)
            .then(response => console.log("Successfully retrieved URL"),
                (error) => dispatch(UIError()));
    }
}

export function createNewURL(url) {
    let id = url.urlID;
    return function (dispatch) {
        return Axios.post('/api/' + id, url)
            .then(response => console.log("Successfully created URL")),
            (error) => dispatch(UIError());
    }
}

export function updateURL(id, url) {
    return function (dispatch) {
        return Axios.put('/api/url/' + id + '/edit', url)
            .then(response => console.log("Successfully updated new URL"),
                (error) => dispatch(UIError()));
    }
}

export function deleteURL(id) {
    return function (dispatch) {
        return Axios.delete('/api/url/' + id + '/edit')
            .then(response => console.log("Successfully deleted new URL"),
                (error) => dispatch(UIError()));
    }
}