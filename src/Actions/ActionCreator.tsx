import { Action, actionType as ActionType } from './ActionTypes';
import { GetCardsSum, GetRoundResult, PrepareCards } from '../Util/Utils';


const loadCards = (): Action => {
    const decks = 6; // TODO: make this configurable

    return {
        type: ActionType.loadCards,
        payload: PrepareCards(decks)
    };
};

const resetCards = (): Action => {
    return {
        type: ActionType.resetCards,
        payload: []
    };
};

const drawDealerCard = (cards: number[]): Action => {
    const index = Math.floor(Math.random() * cards.length);
    const dealerCard = cards[index];

    return {
        type: ActionType.addDealerCard,
        payload: {
            card: [dealerCard],
            position: index
        }
    };
};

const drawPlayerCard = (cards: number[]): Action => {
    const index = Math.floor(Math.random() * cards.length);
    const playCard = cards[index];
    return {
        type: ActionType.addPlayerCard,
        payload: {
            card: [playCard],
            position: index
        }
    };
};

const dealerDrawToSeventeen = (cards: number[], dealerCards: number[]): Action => {
    const indexes = [];
    let total = 0;

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
    };
};

const calculateRoundResult = (dealerSum: number, playerSum: number): Action => {
    return {
        type: ActionType.calculateRoundResult,
        payload: {
            roundEnd: true,
            result: dealerSum === 0 ? '' : GetRoundResult(dealerSum, playerSum)
        }
    };
};

const resetRoundEnd = (): Action => {
    return {
        type: ActionType.resetRoundEnd,
        payload: {
            roundEnd: false,
            result: ''
        }
    };
};

const updateStatistic = (dealerSum: number, playerSum: number, cards: number[]): Action => {
    return {
        type: ActionType.updateStatistic,
        payload: {
            roundResult: dealerSum === 0 ? '' : GetRoundResult(dealerSum, playerSum),
            remainingCards: cards.length
        }
    };
};

const resetStatistic = (cards: number[]): Action => {
    return {
        type: ActionType.resetStatistic,
        payload: {
            remainingCards: cards.length
        }
    };
};

const resetSummary = (): Action => {
    return {
        type: ActionType.resetRoundResult,
        payload: {
            roundEnd: false,
            result: ''
        }
    };
};

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
};
