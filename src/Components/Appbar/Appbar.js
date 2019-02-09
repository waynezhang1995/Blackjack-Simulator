import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import "./Appbar.css"

const css = {
    headerCls: 'App-header'
};

class Appbar extends Component {

    render() {
        return (
            <AppBar className={css.headerCls} position="static">
                <Toolbar>
                    <Typography variant="h6" color="inherit">
                        Blackjack Simulator
                    </Typography>
                </Toolbar>
            </AppBar>
        )
    }
}

export default Appbar;

