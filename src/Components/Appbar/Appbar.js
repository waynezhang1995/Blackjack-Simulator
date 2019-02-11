import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import "./Appbar.css"

const css = {
    headerCls: 'app-header',
    headerFont: 'header-font'
};

class Appbar extends Component {

    render() {
        return (
            <AppBar className={css.headerCls} position="static">
                <Toolbar>
                    <Typography variant="title" className={css.headerFont} color="inherit">
                        <span role="img" aria-label="poker">♠️</span> Blackjack Simulator <span role="img" aria-label="poker">♥️</span>
                    </Typography>
                </Toolbar>
            </AppBar>
        )
    }
}

export default Appbar;

