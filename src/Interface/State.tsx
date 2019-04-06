export default interface AppState {
    cards: Object[];
    dealerCards: number[];
    playerCards: number[];
    roundResult: {
        roundEnd: Boolean,
        result: String
    };
    statistic: {
        dealerWinCount: number,
        playerWinCount: number,
        tieCount: number,
        remainingCards: number,
    };
}