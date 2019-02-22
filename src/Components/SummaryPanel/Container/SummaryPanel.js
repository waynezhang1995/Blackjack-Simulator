import { connect } from 'react-redux';
import { GetCardsSum } from '../../../Util/Utils.js';
import SummaryPanel from '../Presentational/SummaryPanel.js';

const mapStateToProps = (state, ownProps) => {
    const playerSum = GetCardsSum(state.playerCards);
    const dealerSum = GetCardsSum(state.dealerCards).sum;
    const roundResult = state.roundResult;
    const playSumResult = playerSum.containAce && playerSum.sum !== 21 ? playerSum.sum - 10 + '/' + playerSum.sum : playerSum.sum;

    return {
        ...ownProps,
        display: state.dealerCards.length === 0 ? 'none' : 'block',
        playerTotal: playSumResult,
        dealerTotal: dealerSum,
        roundResult: roundResult
    }
}

const SummaryPanelContainer = connect(
    mapStateToProps,
    null
)(SummaryPanel)

export default SummaryPanelContainer;

