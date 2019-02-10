import React, { Component } from 'react';
import Card from "../../Card/Presentational/Card.js"
import "./Board.css";

const css = {
    dealerPanel: 'dealer-panel',
    playerPanel: 'player-panel',
    boardWrapper: 'board-wrapper'
}

class Board extends Component {
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
