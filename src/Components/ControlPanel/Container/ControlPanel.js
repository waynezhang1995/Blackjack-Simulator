import { connect } from 'react-redux';
import ControlPanel from '../Presentational/ControlPanel.js';
import { loadCards, resetCards, drawDealerCard, drawPlayerCard } from '../../../Actions/ActionCreator.js';

const mapStateToProps = (state, ownProps) => {
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        loadCards: () => dispatch(loadCards()),
        startGame: () => {
            dispatch(resetCards());

            // Dealer draws 1 card
            dispatch(drawDealerCard());

            // Player draws 2 cards
            dispatch(drawPlayerCard())
            dispatch(drawPlayerCard())
        },
        playerHit: () => dispatch(drawPlayerCard())
    }
}

const ControlPanelContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ControlPanel)

export default ControlPanelContainer;

