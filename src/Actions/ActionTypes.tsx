export interface Action {
    type: string;
    payload: any;
}

export const actionType = {
    loadCards: 'LOAD_CARDS',
    addDealerCard: 'ADD_DEALER_CARD',
    resetCards: 'REST_CARDS',
    addPlayerCard: 'ADD_PLAYER_CARD',
    dealerDrawToSeventeen: 'DEALER_DRAW_TO_SEVENTEEN',
    calculateRoundResult: 'CALCULATE_ROUND_RESULT',
    resetRoundResult: 'RESET_ROUND_RESULT',
    updateStatistic: 'CALCULATE_STATISTIC',
    resetStatistic: 'RESET_STATISTIC',
    resetRoundEnd: 'RESET_ROUND_END'
};
