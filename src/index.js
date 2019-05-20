import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {createStore, applyMiddleware,compose} from 'redux';
import rootReducer from './store/reducers/index';
import thunk from 'redux-thunk';
import { Provider as ReduxProvider } from "react-redux";

import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer,
    compose(
        applyMiddleware(thunk)
    ))


ReactDOM.render(
    <ReduxProvider store = {store}>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
    </ReduxProvider>,
     document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
