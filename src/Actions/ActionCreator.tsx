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

const drawDealerCard = (cards: object[]): Action => {
    return {
        type: ActionType.addDealerCard,
        payload: {
            card: [cards.shift()],
        }
    };
};

const drawPlayerCard = (cards: object[]): Action => {
    return {
        type: ActionType.addPlayerCard,
        payload: {
            card: [cards.shift()],
        }
    };
};

const dealerDrawToSeventeen = (cards: object[], dealerCards: object[]): Action => {
    let total = 0;

    while (total < 17 && cards.length > 0) {
        const nextDealerCard = cards.shift();
        dealerCards = dealerCards.concat([nextDealerCard]);
        total = GetCardsSum(dealerCards).sum;
    }

    return {
        type: ActionType.dealerDrawToSeventeen,
        payload: {
            cards: dealerCards,
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
