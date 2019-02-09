import { connect } from 'react-redux';
import ControlPanel from '../Presentational/ControlPanel.js';
import { setDeck, loadCards } from '../../../Actions/index.js';

// const mapStateToProps = (state, ownProps) => ({
//     // active: ownProps.filter === state.visibilityFilter
// })

const mapDispatchToProps = (dispatch, ownProps) => ({
    loadCards: () => dispatch(setVisibilityFilter(ownProps.filter))
})

const ControlPanel = connect(
    // mapStateToProps,
    mapDispatchToProps
)(ControlPanel)

export default ControlPanel;

