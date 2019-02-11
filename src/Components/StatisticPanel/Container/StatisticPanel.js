import { connect } from 'react-redux';
import StatisticPanel from '../Presentational/StatisticPanel.js';

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    dealerWinCount: state.statistic.dealerWinCount,
    playerWinCount: state.statistic.playerWinCount,
    tieCount: state.statistic.tieCount,
    remainingCards: state.statistic.remainingCards
})

const mapDispatchToProps = (dispatch, ownProps) => ({
})

const StatisticPanelContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(StatisticPanel)

export default StatisticPanelContainer;

