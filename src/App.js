import React, { Component } from 'react';
import BoardBody from './Components/Board/Container/Board.js';
import Store from './Store/Store.js';
import { Provider } from 'react-redux';
import Appbar from './Components/Appbar/Appbar.js';
import ControlPanelContainer from './Components/ControlPanel/Container/ControlPanel.js';
import SummaryPanelBody from './Components/SummaryPanel/Container/SummaryPanel.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <div className='App'>
          <Appbar></Appbar>
          <BoardBody></BoardBody>
          <SummaryPanelBody></SummaryPanelBody>
          <ControlPanelContainer></ControlPanelContainer>
        </div>
      </Provider>
    );
  }
}

export default App;
