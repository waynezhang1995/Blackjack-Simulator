import { connect } from 'react-redux';
import Board from '../Presentational/Board.js';
import { calculateRoundResult, updateStatistic, drawDealerCard, drawPlayerCard, loadCards, resetStatistic, resetRoundEnd } from '../../../Actions/ActionCreator';
import AppState from '../../../Interface/State';

const mapStateToProps = (state: AppState, ownProps: Object) => {
    console.log(state);
    return {
        ...ownProps,
        dealerCards: state.dealerCards,
        playerCards: state.playerCards,
        cards: state.cards,
        shoeEnd: state.cards.length === 0 ? true : false
    };
};

const mapDispatchToProps = (dispatch: Function, ownProps: Object) => ({
    onCalculateRoundResult: (dealerCardsSum: number, playerCardsSum: number) => dispatch(calculateRoundResult(dealerCardsSum, playerCardsSum)),
    onUpdateStatistic: (dealerCardsSum: number, playerCardsSum: number, cards: number[]) => dispatch(updateStatistic(dealerCardsSum, playerCardsSum, cards)),
    startGame: (cards: any) => { // TODO: Fix type
        // Dealer draws 1 card
        dispatch(drawDealerCard(cards));

        // Player draws 2 cards
        dispatch(drawPlayerCard(cards));
        dispatch(drawPlayerCard(cards));
    },
    ReloadCards: (cards: any) => {
        dispatch(loadCards());
        dispatch(resetStatistic(cards));
        dispatch(resetRoundEnd());
    }
});

const boardBody = connect(
    mapStateToProps,
    mapDispatchToProps
)(Board);

export default boardBody;

