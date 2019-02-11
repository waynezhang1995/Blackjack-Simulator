import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import CheckIcon from '@material-ui/icons/Check';
import StopIcon from '@material-ui/icons/Stop';
import "./ControlPanel.css"

const css = {
    dockBottom: 'dock-bottom',
    controlPanel: 'control-panel',
    buttonColor: 'button-color',
    labelFont: 'label-font',
    buttonPlay: 'button-play',
    buttonHit: 'button-hit',
    buttonStand: 'button-stand',
    buttonReload: 'button-reload',
    buttonDisabled: 'button-disabled'
};

class ControlPanel extends Component {

    componentDidMount() {
        this.props.loadCards();
    }

    render() {
        const { loadCardsClick, startGameClick, playerHitClick, playerStandClick, roundEnd } = this.props;

        return (
            <Grid item xs={12} className={css.dockBottom + ' ' + css.controlPanel}>
                <BottomNavigation showLabels>
                    <BottomNavigationAction className={roundEnd ? '' : css.buttonDisabled} onClick={startGameClick} label="Start" classes={{ label: css.labelFont }} icon={<PlayArrowIcon className={css.buttonPlay} />} />
                    <BottomNavigationAction className={roundEnd ? css.buttonDisabled : ''} onClick={playerHitClick} label="Hit" classes={{ label: css.labelFont }} icon={<CheckIcon className={css.buttonHit} />} />
                    <BottomNavigationAction className={roundEnd ? css.buttonDisabled : ''} onClick={playerStandClick} label="Stand" classes={{ label: css.labelFont }} icon={<StopIcon className={css.buttonStand} />} />
                    <BottomNavigationAction onClick={loadCardsClick} label="Reload" classes={{ label: css.labelFont }} icon={<RestoreIcon className={css.buttonReload} />} />
                </BottomNavigation>
            </Grid>
        );
    }
}

export default ControlPanel;