import React, { Component } from 'react';
import BoardBody from './Components/Board/Container/Board';
import Store from './Store/Store';
import { Provider } from 'react-redux';
import Appbar from './Components/Appbar/Appbar';
import ControlPanelContainer from './Components/ControlPanel/Container/ControlPanel';
import SummaryPanelBody from './Components/SummaryPanel/Container/SummaryPanel';
import WelcomeDialog from './Components/WelcomeDialog/WelcomeDialog';
import StatisticPanelContainer from './Components/StatisticPanel/Container/StatisticPanel';
import './App.css';

interface AppState {
    init: boolean;
}

const css = {
    centerPanel: 'center-panel',
    centerPanelContent: 'center-panel-content'
};

class App extends Component<{}, AppState> {
    state: AppState;

    constructor(props: any) {
        super(props);
        this.state = { init: true };
    }

    startGame = (): void => {
        this.setState((): AppState => {
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
