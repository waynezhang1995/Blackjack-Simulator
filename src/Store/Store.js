import Reducers from '../Reducers/index.js';
import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Store = createStore(
    Reducers,
    composeEnhancer(applyMiddleware(thunk))
);

export default Store;