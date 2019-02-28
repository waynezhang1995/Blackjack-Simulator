export default interface AppState {
    cards: Object[],
    dealerCards: Number[],
    playerCards: Number[],
    roundResult: {
        roundEnd: Boolean,
        result: String
    },
    statistic: {
        dealerWinCount: Number,
        playerWinCount: Number,
        tieCount: Number,
        remainingCards: Number,
    }
}