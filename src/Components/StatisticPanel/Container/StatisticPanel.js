import { connect } from 'react-redux';
import StatisticPanel from '../Presentational/StatisticPanel';

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    ...state.statistic
})

const mapDispatchToProps = (dispatch, ownProps) => ({
})

const StatisticPanelContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(StatisticPanel)

export default StatisticPanelContainer;

