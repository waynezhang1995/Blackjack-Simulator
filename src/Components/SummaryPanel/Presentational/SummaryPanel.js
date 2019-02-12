import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import "./SummaryPanel.css"

const css = {
    SummaryPanelBody: 'summary-panel-body',
    summarySection: 'summary-section'
};

class SummaryPanel extends Component {
    render() {
        const { display, playerTotal, dealerTotal, roundResult } = this.props;
        const { roundEnd, result } = roundResult;

        return (
            <div>
                <Paper style={{ display: display }} className={css.SummaryPanelBody} elevation={3}>
                    <div className={css.summarySection}>
                        <p>Dealer has: {dealerTotal}</p>
                        <p>Player has: {playerTotal}</p>
                        <p>Winner: <b>{roundEnd ? result : ''}</b></p>
                    </div>
                </Paper>
            </div>
        );
    }
}

export default SummaryPanel;