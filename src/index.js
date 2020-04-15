import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux"
import App from "./views/App";
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