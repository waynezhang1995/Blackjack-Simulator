import { PrepareCards } from '../Util/Utils.js';
import ActionType from './ActionTypes.js';
import { GetCardsSum, GetRoundResult } from '../Util/Utils.js';

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

const drawDealerCard = (cards) => {
    const index = Math.floor(Math.random() * cards.length);
    const dealerCard = cards[index];
    return {
        type: ActionType.addDealerCard,
        payload: {
            card: [dealerCard],
            position: index
        }
    }
}

const drawPlayerCard = (cards) => {
    const index = Math.floor(Math.random() * cards.length);
    const playCard = cards[index];
    return {
        type: ActionType.addPlayerCard,
        payload: {
            card: [playCard],
            position: index
        }
    }
}

const dealerDrawToSeventeen = (cards, dealerCards) => {
    var total = 0;
    var indexes = [];

    while (total < 17) {
        const index = Math.floor(Math.random() * cards.length);
        const nextDealerCard = cards[index];
        indexes.push(index);
        dealerCards = dealerCards.concat([nextDealerCard]);
        total = GetCardsSum(dealerCards).sum;
    }

    return {
        type: ActionType.dealerDrawToSeventeen,
        payload: {
            cards: dealerCards,
            position: indexes
        }
    }
}

const calculateRoundResult = (dealerSum, playerSum) => {
    return {
        type: ActionType.calculateRoundResult,
        payload: {
            roundEnd: true,
            result: dealerSum === 0 ? '' : GetRoundResult(dealerSum, playerSum)
        }
    }
}

const resetRoundEnd = () => {
    return {
        type: ActionType.resetRoundEnd,
        payload: {
            roundEnd: false,
            result: ''
        }
    }
}

const updateStatistic = (dealerSum, playerSum, cards) => {
    return {
        type: ActionType.updateStatistic,
        payload: {
            roundResult: dealerSum === 0 ? '' : GetRoundResult(dealerSum, playerSum),
            remainingCards: cards.length
        }
    }
}

const resetStatistic = (cards) => {
    return {
        type: ActionType.resetStatistic,
        payload: {
            remainingCards: cards.length
        }
    }
}

const resetSummary = () => {
    return {
        type: ActionType.resetRoundResult,
        payload: {
            roundEnd: false,
            result: ''
        }
    }
}

export {
    loadCards,
    resetCards,
    drawDealerCard,
    drawPlayerCard,
    dealerDrawToSeventeen,
    calculateRoundResult,
    resetSummary,
    updateStatistic,
    resetStatistic,
    resetRoundEnd
}
