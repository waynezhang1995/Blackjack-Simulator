import { connect } from 'react-redux';
import Board from '../Presentational/Board.js';

const mapStateToProps = (state, ownProps) => {
    console.log(state);
    return {
        ...ownProps,
        dealerCards: state.dealerCards
    }

}

const mapDispatchToProps = (dispatch, ownProps) => ({
    // loadCards: () => dispatch(loadCards())
})

const BoardBody = connect(
    mapStateToProps,
    mapDispatchToProps
)(Board)

export default BoardBody;

