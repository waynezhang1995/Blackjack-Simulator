import { connect } from 'react-redux';
import ControlPanel from '../Presentational/ControlPanel.js';
import {
    loadCards,
    resetCards,
    drawDealerCard,
    drawPlayerCard,
    dealerDrawToSeventeen,
    resetSummary,
    resetStatistic,
    resetRoundEnd
} from '../../../Actions/ActionCreator';

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    ...state
})

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        loadCards: (cards) => {
            dispatch(loadCards());
            dispatch(resetStatistic(cards));
            dispatch(resetRoundEnd())
        },
        startGame: (cards) => {
            dispatch(resetCards());

            // Dealer draws 1 card
            dispatch(drawDealerCard(cards));

            // Player draws 2 cards
            dispatch(drawPlayerCard(cards))
            dispatch(drawPlayerCard(cards))

            // Reset summary
            dispatch(resetSummary())
        },
        playerHit: (cards) => dispatch(drawPlayerCard(cards)),
        playerStand: (cards, dealerCards) => {
            dispatch(dealerDrawToSeventeen(cards, dealerCards));
        }
    }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    const startGameClick = () => {
        dispatchProps.startGame(stateProps.cards);
    }

    const playerHitClick = () => {
        dispatchProps.playerHit(stateProps.cards);
    }

    const loadCardsClick = () => {
        dispatchProps.loadCards(stateProps.cards);
    }

    const playerStandClick = () => {
        dispatchProps.playerStand(stateProps.cards, stateProps.dealerCards);
    }

    return ({
        ...stateProps,
        ...dispatchProps,
        startGameClick,
        playerHitClick,
        loadCardsClick,
        playerStandClick
    })
}

const ControlPanelContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(ControlPanel)

export default ControlPanelContainer;

