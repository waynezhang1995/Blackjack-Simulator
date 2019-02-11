import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import "./StatisticPanel.css"

const css = {
    statisticPanelBody: 'statistic-panel-body',
    statisticPanelTitle: 'statistic-panel-title'
};

class StatisticPanel extends Component {
    render() {
        const { dealerWinCount, playerWinCount, tieCount, remainingCards } = this.props;
        return (
            <div>
                <Paper className={css.statisticPanelBody} elevation={1}>
                    <div>
                        <Typography className={css.statisticPanelTitle} variant="title" color="inherit">
                            Game Statistic:
                        </Typography>
                        <Typography className={css.statisticPanelTitle} variant="caption" color="inherit">
                        (Data will be updated at the end of each round)
                        </Typography>
                        <p>Dealer win count: {dealerWinCount}</p>
                        <p>Player win count: {playerWinCount}</p>
                        <p>Tie count: {tieCount}</p>
                        <p>Remaining cards: {remainingCards}</p>
                    </div>
                </Paper>
            </div>
        );
    }
}

export default StatisticPanel;