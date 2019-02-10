import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import "./ControlPanel.css"

const css = {
    dockBottom: 'dock-bottom',
    controlPanel: 'control-panel',
    buttonColor: 'button-color'
};

class ControlPanel extends Component {

    render() {
        const { loadCards, startGame } = this.props;

        return (
            <Grid item xs={12} className={css.dockBottom}>
                <BottomNavigation showLabels>
                    <BottomNavigationAction onClick={loadCards} label="Reload" icon={<RestoreIcon style={{ fontSize: 30 }} />} />
                    <BottomNavigationAction onClick={startGame} label="Start" icon={<PlayArrowIcon style={{ fontSize: 30 }} />} />
                    <BottomNavigationAction label="Nearby" icon={<LocationOnIcon style={{ fontSize: 30 }} />} />
                </BottomNavigation>
            </Grid>
        );
    }
}

export default ControlPanel;