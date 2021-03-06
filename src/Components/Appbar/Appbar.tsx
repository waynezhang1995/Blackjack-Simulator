import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CodeIcon from '@material-ui/icons/Code';
import Button from '@material-ui/core/Button';
import './Appbar.css';

const css = {
    headerCls: 'app-header',
    headerFont: 'header-font',
    viewSouceCode: 'view-source-code'
};

class Appbar extends Component {

    openGithubPage(): void {
        const homeUrl = 'https://github.com/waynezhang1995/Blackjack-Simulator';
        window.open(homeUrl, '_blank');
    }

    render() {
        return (
            <AppBar className={css.headerCls} position='static' color='primary' elevation={3}>
                <Toolbar>
                    <Typography variant='title' className={css.headerFont} color='inherit'>
                        <span role='img' aria-label='poker'>♠️</span> Blackjack Simulator <span role='img' aria-label='poker'>♥️</span>
                    </Typography>
                    <Button onClick={this.openGithubPage} variant='contained' color='primary' className={css.viewSouceCode}>
                        View Source Code
                        <CodeIcon />
                    </Button>
                </Toolbar>
            </AppBar>
        );
    }
}

export default Appbar;

