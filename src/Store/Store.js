import Reducers from '../Reducers/index.js';
import { createStore } from 'redux';

const Store = createStore(
    Reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default Store;