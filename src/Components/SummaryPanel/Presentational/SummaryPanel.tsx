import React, { Component, CSSProperties } from 'react';
import Paper from '@material-ui/core/Paper';
import './SummaryPanel.css';

export interface SummaryPanelProps {
    displayStyle: CSSProperties;
    playerTotal: String;
    dealerTotal: Number;
    roundResult: {
        roundEnd: Boolean,
        result: String
    };
}

const css = {
    SummaryPanelBody: 'summary-panel-body',
    summarySection: 'summary-section'
};

class SummaryPanel extends Component<SummaryPanelProps, {}> {
    render() {
        const { displayStyle, playerTotal, dealerTotal, roundResult } = this.props;
        const { roundEnd, result } = roundResult;

        return (
            <div>
                <Paper style={displayStyle} className={css.SummaryPanelBody} elevation={3}>
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