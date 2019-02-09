import React, { Component } from 'react';
import CardBody from "../Card/Presentational/Card.js"
import "./Board.css";

const css = {
  BoardSeperator: 'board-seperator'
};

class Board extends Component {

  render() {
    return (
      <div>
        <CardBody></CardBody>
      </div>
    );
  }
}

export default Board;
