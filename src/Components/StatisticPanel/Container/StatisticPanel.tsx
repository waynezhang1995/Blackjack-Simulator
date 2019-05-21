import { connect } from 'react-redux';
import StatisticPanel from '../Presentational/StatisticPanel';
import AppState from '../../../Interface/State';

const mapStateToProps = (state: AppState, ownProps: any) => ({
    ...ownProps,
    ...state.statistic
});

const statisticPanelContainer = connect(
    mapStateToProps
)(StatisticPanel);

export default statisticPanelContainer;

