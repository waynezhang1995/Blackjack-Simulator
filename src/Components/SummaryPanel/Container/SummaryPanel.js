import { connect } from 'react-redux';
import { GetCardsSum } from '../../../Util/Utils.js';
import SummaryPanel from '../Presentational/SummaryPanel.js';

const mapStateToProps = (state, ownProps) => {
    const playerSum = GetCardsSum(state.playerCards);
    const dealerSum = GetCardsSum(state.dealerCards);

    return {
        ...ownProps,
        display: state.dealerCards.length === 0 ? 'none' : 'block',
        playerTotal: playerSum,
        dealerTotal: dealerSum,
        roundWinner: 'TBD' // TODO. Calculate winner if roundEnd flag is true
    }
}



const mapDispatchToProps = (dispatch, ownProps) => ({
    // loadCards: () => dispatch(loadCards())
})

const SummaryPanelBody = connect(
    mapStateToProps,
    mapDispatchToProps
)(SummaryPanel)

export default SummaryPanelBody;

