import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';

class WelcomeDialog extends Component {

    render() {
        const {open, onStartGameClick} = this.props;

        return (
            <div>
                <Dialog
                    onClose={onStartGameClick}
                    aria-labelledby="customized-dialog-title"
                    open={open}
                    >
                    <DialogTitle id="customized-dialog-title">
                        Welcome to the Blackjack Simulator ♠️
                    </DialogTitle>
                    <DialogContent>
                        <Typography variant='subheading' gutterBottom>
                            How to play:
                        </Typography>
                        <Typography gutterBottom>
                            1
                        </Typography>
                        <Typography gutterBottom>
                            2
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={onStartGameClick} variant="outlined" color="secondary">
                            Start Blackjack! 🃏
                        </Button >
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default WelcomeDialog;