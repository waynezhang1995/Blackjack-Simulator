import { connect } from 'react-redux';
import Board from '../Presentational/Board.js';
import { calculateRoundResult, updateStatistic, drawDealerCard, drawPlayerCard } from '../../../Actions/ActionCreator.js';

const mapStateToProps = (state, ownProps) => {
    console.log(state);
    return {
        ...ownProps,
        dealerCards: state.dealerCards,
        playerCards: state.playerCards,
        cards: state.cards
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
    }
})

const BoardBody = connect(
    mapStateToProps,
    mapDispatchToProps
)(Board)

export default BoardBody;

