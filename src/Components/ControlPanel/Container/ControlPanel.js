import { connect } from 'react-redux';
import ControlPanel from '../Presentational/ControlPanel.js';
import { loadCards, resetCards, drawDealerCard } from '../../../Actions/ActionCreator.js';

const mapStateToProps = (state, ownProps) => {
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        loadCards: () => dispatch(loadCards()),
        startGame: () => {
            dispatch(resetCards());
            dispatch(drawDealerCard());
        }
    }
}

const ControlPanelContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ControlPanel)

export default ControlPanelContainer;

