import React, { Component } from 'react';
import BoardBody from './Components/Board/Container/Board.js';
import Store from './Store/Store.js';
import { Provider } from 'react-redux';
import Appbar from './Components/Appbar/Appbar.js';
import ControlPanelContainer from './Components/ControlPanel/Container/ControlPanel.js';
import SummaryPanelBody from './Components/SummaryPanel/Container/SummaryPanel.js'
import WelcomeDialog from './Components/WelcomeDialog/WelcomeDialog.js';
import StatisticPanelContainer from './Components/StatisticPanel/Container/StatisticPanel.js';
import './App.css';

const css = {
    centerPanel: 'center-panel',
    centerPanelContent: 'center-panel-content'
}

class App extends Component {

    constructor(props) {
        super(props);
        this.state = { init: true };
    }

    startGame = () => {
        this.setState((state, props) => {
            return { init: false };
        });
    }

    render() {
        const { init } = this.state;

        const blackJackSimulator = (
            <div className={css.centerPanel}>
                <div className={css.centerPanelContent}>
                    <BoardBody></BoardBody>
                    <SummaryPanelBody></SummaryPanelBody>
                    <ControlPanelContainer></ControlPanelContainer>
                </div>
                <StatisticPanelContainer></StatisticPanelContainer>
            </div>
        );

        return (
            <Provider store={Store}>
                <div className='App'>
                    <Appbar></Appbar>
                    {init ? <WelcomeDialog onStartGameClick={this.startGame} open={init} /> : blackJackSimulator}
                </div>
            </Provider>
        );
    }
}

export default App;
