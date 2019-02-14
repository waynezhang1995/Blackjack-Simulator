import React, { Component } from 'react';
import Card from '../../Card/Presentational/Card.js';
import { GetCardsSum } from '../../../Util/Utils.js';
import GameEndDialog from '../../GameEndDialog/GameEndDialog.js';
import './Board.css';

const css = {
    dealerPanel: 'dealer-panel',
    playerPanel: 'player-panel',
    boardWrapper: 'board-wrapper'
}

class Board extends Component {

    // TODO: startGame should be called in componentDidMount
    //       Need to figure out how to delay this call once cards finish loading
    componentDidUpdate() {
        const { dealerCards, playerCards, onCalculateRoundResult, onUpdateStatistic, cards, startGame } = this.props;

        if (dealerCards.length === 0 && playerCards.length === 0) {
            return startGame(cards);
        }

        const playerSum = GetCardsSum(playerCards);
        const dealerSum = GetCardsSum(dealerCards);

        if (dealerCards.length !== 1 || playerSum > 21 || (playerSum === 21 && playerCards.length === 2)) {
            onCalculateRoundResult(dealerSum, playerSum);
            onUpdateStatistic(dealerSum, playerSum, cards)
        }
    }

    CreateDealerCards() {
        const { dealerCards } = this.props;
        return dealerCards.map((card) => <Card key={card + Math.random()} number={card}></Card>)
    }

    CreatePlayerCards() {
        const { playerCards } = this.props;
        return playerCards.map((card) => <Card key={card + Math.random()} number={card}></Card>)
    }

    ReloadShoe() {
        const { ReloadCards, cards} = this.props;
        ReloadCards(cards);
    }

    render() {
        const {shoeEnd} = this.props;
        if (shoeEnd) {
            return <GameEndDialog open={true} onReloadCardsClick={this.ReloadShoe.bind(this)}></GameEndDialog>;
        }
        return (
            <div className={css.boardWrapper}>
                <div className={css.dealerPanel}>
                    {this.CreateDealerCards()}
                </div>
                <div className={css.playerPanel}>
                    {this.CreatePlayerCards()}
                </div>
            </div>
        );
    }
}

export default Board;
