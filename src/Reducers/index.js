import { combineReducers } from "redux";

const gameController = (state = {}, action) => {
    switch (action.type) {
        case 'GAME_START':
            return Object.assign({}, state, {
                cards: action.payload
            })
        default:
            return state
    }
}

const Reducers = combineReducers({
    gameController
});

export default Reducers;
