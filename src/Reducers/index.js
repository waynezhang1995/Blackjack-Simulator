import { combineReducers } from "redux";
import { actionType as ActionType } from '../Actions/ActionTypes';

const cards = (state = [], action) => {
    switch (action.type) {
        case ActionType.loadCards:
            return action.payload
        case ActionType.addDealerCard:
        case ActionType.addPlayerCard:
        case ActionType.dealerDrawToSeventeen:
            return state;
        default:
            return state;
    }
}

const dealerCards = (state = [], action) => {
    switch (action.type) {
        case ActionType.addDealerCard:
            return state.concat(action.payload.card)
        case ActionType.resetCards:
            return action.payload
        case ActionType.loadCards:
            return []
        case ActionType.dealerDrawToSeventeen:
            return action.payload.cards
        default:
            return state
    }
}

const playerCards = (state = [], action) => {
    switch (action.type) {
        case ActionType.addPlayerCard:
            return state.concat(action.payload.card)
        case ActionType.resetCards:
            return action.payload
        case ActionType.loadCards:
            return []
        default:
            return state
    }
}

const roundResult = (state = { roundEnd: false, result: '' }, action) => {
    switch (action.type) {
        case ActionType.calculateRoundResult:
            return Object.assign({}, action.payload)
        case ActionType.resetRoundResult:
            return Object.assign({}, action.payload)
        default:
            return state
    }
}

const statistic = (state = { dealerWinCount: 0, playerWinCount: 0, tieCount: 0, remainingCards: 0 }, action) => {
    switch (action.type) {
        case ActionType.updateStatistic:
            var { roundResult, remainingCards } = action.payload;
            return {
                dealerWinCount: roundResult === 'Dealer Wins' ? ++state.dealerWinCount : state.dealerWinCount,
                playerWinCount: roundResult === 'Player Wins' ? ++state.playerWinCount : state.playerWinCount,
                tieCount: roundResult === 'Tie' ? ++state.tieCount : state.tieCount,
                remainingCards: remainingCards
            };
        case ActionType.resetStatistic:
            return {
                dealerWinCount: 0,
                playerWinCount: 0,
                tieCount: 0,
                remainingCards: action.payload.remainingCards
            }
        default:
            return state
    }
}

const Reducers = combineReducers({
    cards,
    dealerCards,
    playerCards,
    roundResult,
    statistic
});

export default Reducers;
