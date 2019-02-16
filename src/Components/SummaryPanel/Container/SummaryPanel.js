import { connect } from 'react-redux';
import { GetCardsSum } from '../../../Util/Utils.js';
import SummaryPanel from '../Presentational/SummaryPanel.js';

const mapStateToProps = (state, ownProps) => {
    const playerSum = GetCardsSum(state.playerCards);
    const dealerSum = GetCardsSum(state.dealerCards).sum;
    const roundResult = state.roundResult;
    const playSumResult = playerSum.containAce ? playerSum.sum - 11 + '/' + playerSum.sum : playerSum.sum;

    return {
        ...ownProps,
        display: state.dealerCards.length === 0 ? 'none' : 'block',
        playerTotal: playSumResult,
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

