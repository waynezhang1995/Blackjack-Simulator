import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import "./ControlPanel.css"

const css = {
    dockBottom: 'dock-bottom',
    controlPanel: 'control-panel'
};

class ControlPanel extends Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { value } = this.state;
        return (
            <Grid item xs={12} className={css.dockBottom}>
                <BottomNavigation
                    value={value}
                    onChange={this.handleChange}
                    showLabels
                // className={classes.root}
                >
                    <BottomNavigationAction label="Reload" icon={<RestoreIcon />} />
                    <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                    <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
                </BottomNavigation>
            </Grid>
        );
    }
}

export default ControlPanel;