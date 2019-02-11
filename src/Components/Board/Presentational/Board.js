import React, { Component } from 'react';
import Card from '../../Card/Presentational/Card.js';
import { GetCardsSum } from '../../../Util/Utils.js';
import './Board.css';

const css = {
    dealerPanel: 'dealer-panel',
    playerPanel: 'player-panel',
    boardWrapper: 'board-wrapper'
}

class Board extends Component {

    componentDidUpdate() {
        const { dealerCards, playerCards, onCalculateRoundResult, onUpdateStatistic, cards } = this.props;
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

    render() {
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
