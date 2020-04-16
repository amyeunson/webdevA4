import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './styles/styles.css';
import App from "./views/App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux"
import indexReducer from "./redux/reducers/index"
import thunkMiddleware from 'redux-thunk';

const store = createStore(indexReducer, applyMiddleware(thunkMiddleware));


const rootElement = document.getElementById("root");
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);