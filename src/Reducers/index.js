import { combineReducers } from "redux";
import ActionType from '../Actions/ActionTypes.js';

const cards = (state = [], action) => {
    switch (action.type) {
        case ActionType.loadCards:
            return action.payload
        case ActionType.addDealerCard:
        case ActionType.addPlayerCard:
            const index = state.indexOf(action.payload[0]);
            if (index > -1) {
                state.splice(index, 1);
            }
            return state
        default:
            return state
    }
}

const dealerCards = (state = [], action) => {
    switch (action.type) {
        case ActionType.addDealerCard:
            return state.concat(action.payload)
        case ActionType.resetCards:
            return action.payload
        case ActionType.loadCards:
            return []
        default:
            return state
    }
}

const playerCards = (state = [], action) => {
    switch (action.type) {
        case ActionType.addPlayerCard:
            return state.concat(action.payload)
        case ActionType.resetCards:
            return action.payload
        case ActionType.loadCards:
            return []
        default:
            return state
    }
}

const Reducers = combineReducers({
    cards,
    dealerCards,
    playerCards
});

export default Reducers;
