import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter} from 'react-router-dom';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import reducers from './redux/reducers/reducer';

//How to setup redux;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers())

ReactDOM.render(
    <Provider store={store}>
    <HashRouter>
        <App />
        </HashRouter>
    </Provider>, 
    document.getElementById('root'));