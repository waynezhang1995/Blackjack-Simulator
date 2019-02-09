import React, { Component } from 'react';
import Board from "./Components/Board/Board.js";
import { createStore } from "redux";
import { Provider } from 'react-redux'
import Reducers from "./Reducers/index.js"
import Appbar from "./Components/Appbar/Appbar.js"
import ControlPanel from "./Components/ControlPanel/Presentational/ControlPanel.js";
import './App.css';

const store = createStore(
    Reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Appbar></Appbar>
          <Board></Board>
          <ControlPanel></ControlPanel>
        </div>
      </Provider>
    );
  }
}

export default App;
