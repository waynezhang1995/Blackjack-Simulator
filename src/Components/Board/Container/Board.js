import { connect } from 'react-redux';
import Board from '../Presentational/Board.js';
import { calculateRoundResult, updateStatistic, drawDealerCard, drawPlayerCard, loadCards, resetStatistic, resetRoundEnd } from '../../../Actions/ActionCreator';

const mapStateToProps = (state, ownProps) => {
    console.log(state);
    return {
        ...ownProps,
        dealerCards: state.dealerCards,
        playerCards: state.playerCards,
        cards: state.cards,
        shoeEnd: state.cards.length === 0 ? true : false
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onCalculateRoundResult: (dealerCards, playerCards) => dispatch(calculateRoundResult(dealerCards, playerCards)),
    onUpdateStatistic: (dealerCards, playerCards, cards) => dispatch(updateStatistic(dealerCards, playerCards, cards)),
    startGame: (cards) => {
        // Dealer draws 1 card
        dispatch(drawDealerCard(cards));

        // Player draws 2 cards
        dispatch(drawPlayerCard(cards))
        dispatch(drawPlayerCard(cards))
    },
    ReloadCards: (cards) => {
        dispatch(loadCards());
        dispatch(resetStatistic(cards));
        dispatch(resetRoundEnd())
    }
})

const BoardBody = connect(
    mapStateToProps,
    mapDispatchToProps
)(Board)

export default BoardBody;

