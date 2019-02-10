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
    buttonColor: 'button-color'
};

class ControlPanel extends Component {

    componentDidMount() {
        this.props.loadCards();
    }

    render() {
        const { loadCards, startGame, playerHit } = this.props;

        return (
            <Grid item xs={12} className={css.dockBottom}>
                <BottomNavigation showLabels>
                    <BottomNavigationAction onClick={startGame} label="Start" icon={<PlayArrowIcon style={{ fontSize: 30 }} />} />
                    <BottomNavigationAction onClick={playerHit} label="Hit" icon={<CheckIcon style={{ fontSize: 30 }} />} />
                    <BottomNavigationAction onClick={loadCards} label="Stand" icon={<StopIcon style={{ fontSize: 30 }} />} />
                    <BottomNavigationAction onClick={loadCards} label="Reload" icon={<RestoreIcon style={{ fontSize: 30 }} />} />
                </BottomNavigation>
            </Grid>
        );
    }
}

export default ControlPanel;