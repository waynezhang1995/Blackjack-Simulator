import { connect } from 'react-redux';
import Board from '../Presentational/Board.js';
import { calculateRoundResult } from '../../../Actions/ActionCreator.js';

const mapStateToProps = (state, ownProps) => {
    console.log(state);
    return {
        ...ownProps,
        dealerCards: state.dealerCards,
        playerCards: state.playerCards
    }

}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onCalculateRoundResult: (dealerCards, playerCards) => dispatch(calculateRoundResult(dealerCards, playerCards))
})

const BoardBody = connect(
    mapStateToProps,
    mapDispatchToProps
)(Board)

export default BoardBody;

