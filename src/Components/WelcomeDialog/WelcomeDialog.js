import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Fab from '@material-ui/core/Fab';
import './WelcomeDialog.css';

const blackJackHelper = 'https://www.bicyclecards.com/how-to-play/blackjack/';

const css = {
    dialog: 'dialog',
    title: 'title',
    content: 'content',
    subheader: 'sub-header',
    howToPlaySection: 'how-to-play-section',
    startButton: 'start-button'
};

class WelcomeDialog extends Component {

    render() {
        const {open, onStartGameClick} = this.props;

        return (
            <div>
                <Dialog
                    onClose={onStartGameClick}
                    aria-labelledby="customized-dialog-title"
                    open={open}
                    className={css.dialog}
                    >
                    <DialogTitle className={css.title}>
                        Welcome to the Blackjack Simulator ♠️
                    </DialogTitle>
                    <DialogContent className={css.content}>
                        <Typography variant='subheading' className={css.subheader} gutterBottom>
                            How to play:
                        </Typography>
                        <Typography gutterBottom>
                            1: Click "Next game" to start a new game.
                        </Typography>
                        <Typography gutterBottom>
                            2: Click "Hit" if you ask for another card.
                        </Typography>
                        <Typography gutterBottom>
                            3: Click "Stand" if do not want another card.
                        </Typography>
                        <Typography gutterBottom>
                            4: Click "Reload" to start a new deck.
                        </Typography>
                        <Typography variant='subheading' className={css.howToPlaySection} gutterBottom>
                            For more information: <Link variant='subheading' inline="true" href={blackJackHelper}>How to play BlackJack</Link>
                        </Typography>
                    </DialogContent>
                    <DialogActions className={css.startButton}>
                    <Fab variant="extended" onClick={onStartGameClick} color="primary" aria-label="Add">
                    Start Blackjack! 🃏
                    </Fab>

                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default WelcomeDialog;