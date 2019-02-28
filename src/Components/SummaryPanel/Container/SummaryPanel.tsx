import { connect } from 'react-redux';
import { GetCardsSum } from '../../../Util/Utils';
import SummaryPanel, { SummaryPanelProps } from '../Presentational/SummaryPanel';
import AppState from '../../../Interface/State';

const mapStateToProps = (state: AppState, ownProps: Object): SummaryPanelProps => {
    const playerSum = GetCardsSum(state.playerCards);
    const dealerSum = GetCardsSum(state.dealerCards).sum;
    const playSumResult = playerSum.containAce && playerSum.sum !== 21 ? playerSum.sum - 10 + '/' + playerSum.sum : playerSum.sum;

    return {
        ...ownProps,
        displayStyle: state.dealerCards.length === 0 ? { display: 'none' } : { display: 'block' },
        playerTotal: playSumResult,
        dealerTotal: dealerSum,
        roundResult: state.roundResult
    };
};

const summaryPanelContainer = connect(
    mapStateToProps,
    undefined
)(SummaryPanel);

export default summaryPanelContainer;

