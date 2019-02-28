import React, { Component, MouseEventHandler } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Fab from '@material-ui/core/Fab';
import StatisticPanelContainer from '../StatisticPanel/Container/StatisticPanel.js';
import './GameEndDialog.css';

interface GameEndDialogProps {
    open: boolean;
    onReloadCardsClick: MouseEventHandler<HTMLButtonElement>;
}

const css = {
    dialog: 'dialog',
    title: 'title',
    content: 'content',
    subheader: 'sub-header',
    howToPlaySection: 'how-to-play-section',
    startButton: 'start-button'
};

class GameEndDialog extends Component<GameEndDialogProps, {}> {

    render() {
        const {open, onReloadCardsClick} = this.props;

        return (
            <div>
                <Dialog
                    onClose={onReloadCardsClick}
                    aria-labelledby='customized-dialog-title'
                    open={open}
                    className={css.dialog}
                    >
                    <DialogTitle className={css.title}>
                        No more cards
                    </DialogTitle>
                    <DialogContent className={css.content}>
                        <StatisticPanelContainer endShoeSummary={true}></StatisticPanelContainer>
                    </DialogContent>
                    <DialogActions className={css.startButton}>
                    <Fab variant='extended' onClick={onReloadCardsClick} color='primary' aria-label='Add'>
                    Start a new shoe
                    </Fab>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default GameEndDialog;