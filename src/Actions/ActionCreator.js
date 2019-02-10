import { PrepareCards } from '../Util/Utils.js';
import ActionType from './ActionTypes.js';
import Store from '../Store/Store.js';

const loadCards = () => {
    const decks = 6; //TODO: make this configurable

    return {
        type: ActionType.loadCards,
        payload: PrepareCards(decks)
    }
}

const resetCards = () => {
    return {
        type: ActionType.resetCards,
        payload: []
    }
}

const drawDealerCard = () => {
    const cards = Store.getState().cards;
    const dealerCard = cards[Math.floor(Math.random() * cards.length)];
    return {
        type: ActionType.addDealerCard,
        payload: [dealerCard]
    }
}

const drawPlayerCard = () => {
    const cards = Store.getState().cards;
    const playCard = cards[Math.floor(Math.random() * cards.length)];
    return {
        type: ActionType.addPlayerCard,
        payload: [playCard]
    }
}

export { loadCards, resetCards, drawDealerCard, drawPlayerCard}

