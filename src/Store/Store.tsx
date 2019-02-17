import Reducers from '../Reducers/index.js';
import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux';

declare global {
    interface Window { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any; }
}

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
    Reducers,
    composeEnhancer(applyMiddleware(thunk))
);
