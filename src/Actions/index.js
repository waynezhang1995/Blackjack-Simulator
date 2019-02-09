import { Shuffle } from "../Util/Utils.js"

const actionType = {
    gameStart = 'GAME_START'
}

const setDeck = (cards) => {
    return {
        type: actionType.gameStart,
        payload: cards
    }
}

const loadCards = () => {
    const decks = 6; //TODO: make this configurable
    const cardsPerDeck = 52;
    // Shuffle([]);
}

export {setDeck, loadCards}

