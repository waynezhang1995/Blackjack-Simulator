import { connect } from 'react-redux';
import ControlPanel from '../Presentational/ControlPanel.js';
import { loadCards, resetCards, drawDealerCard, drawPlayerCard, dealerDrawToSeventeen, resetSummary } from '../../../Actions/ActionCreator.js';

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    cards: state.cards,
    dealerCards: state.dealerCards,
    playerCards: state.playerCards,
    roundEnd: state.roundResult.roundEnd
})

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        loadCards: () => dispatch(loadCards()),
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
        dispatchProps.loadCards();
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

