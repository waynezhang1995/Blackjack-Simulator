import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import "./SummaryPanel.css"

const css = {
    SummaryPanelBody: 'summary-panel-body',
    summarySection: 'summary-section'
};

class SummaryPanel extends Component {

    render() {
        const { display, playerTotal, dealerTotal, roundWinner } = this.props;

        return (
            <div>
                <Paper style={{ display: display }} className={css.SummaryPanelBody} elevation={1}>
                    <div className={css.summarySection}>
                        <p>Dealer has: {dealerTotal}</p>
                        <p>Player has: {playerTotal}</p>
                        <p>Winner: <b>{roundWinner}</b> 🎉</p>
                    </div>
                </Paper>
            </div>
        );
    }
}

export default SummaryPanel;