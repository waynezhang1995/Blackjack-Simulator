import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import "./StatisticPanel.css"

const css = {
    statisticPanelBody: 'statistic-panel-body',
    endShoeStatisticPanelBody: 'end-shoe-statistic-panel-body',
    statisticPanelTitle: 'statistic-panel-title'
};

class StatisticPanel extends Component {
    render() {
        const { dealerWinCount, playerWinCount, tieCount, remainingCards, endShoeSummary } = this.props;
        const panelContent = (
            <div>
                <Typography className={css.statisticPanelTitle} variant="title" color="inherit">
                    Game Statistic:
                </Typography>
                <Typography className={css.statisticPanelTitle} variant="caption" color="inherit">
                    (Data will be updated at the end of each round)
                </Typography>
            </div>
        );
        const endGamePanelContent = (
            <div>
                <Typography className={css.statisticPanelTitle} variant="title" color="inherit">
                    End Shoe Statistic:
                </Typography>
            </div>
        );
        return (
            <div>
                <Paper className={endShoeSummary ? css.endShoeStatisticPanelBody : css.statisticPanelBody} elevation={3}>
                    <div>
                        {endShoeSummary ? endGamePanelContent : panelContent}
                        <p>Dealer win count: {dealerWinCount}</p>
                        <p>Player win count: {playerWinCount}</p>
                        <p>Tie count: {tieCount}</p>
                        {endShoeSummary ? '' : (<p>Remaining cards: {remainingCards}</p>)}

                    </div>
                </Paper>
            </div>
        );
    }
}

export default StatisticPanel;