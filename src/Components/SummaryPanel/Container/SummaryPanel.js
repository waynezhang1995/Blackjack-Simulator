import { connect } from 'react-redux';
import { GetCardsSum } from '../../../Util/Utils.js';
import SummaryPanel from '../Presentational/SummaryPanel.js';

const mapStateToProps = (state, ownProps) => {
    const playerSum = GetCardsSum(state.playerCards);
    const dealerSum = GetCardsSum(state.dealerCards);
    const roundResult = state.roundResult;
    return {
        ...ownProps,
        display: state.dealerCards.length === 0 ? 'none' : 'block',
        playerTotal: playerSum,
        dealerTotal: dealerSum,
        roundResult: roundResult
    }
}



const mapDispatchToProps = (dispatch, ownProps) => ({
})

const SummaryPanelContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SummaryPanel)

export default SummaryPanelContainer;

