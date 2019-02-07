import React, { Component } from 'react';
import logo from './logo.svg';
import Button from '@material-ui/core/Button';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Button variant="contained" color="primary">
            Hello World
          </Button>
        </header>
      </div>
    );
  }
}

export default App;
