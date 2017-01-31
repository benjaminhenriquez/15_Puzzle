import React, { Component } from 'react';

import BoardPiece from '../containers/board_piece';
import '../../style/index.css'

export default class Board extends Component {

  render() {

    return (
      <table>
        <tbody>{this.createBoard()}</tbody>
      </table>
    )
  }

  createBoard(){
    //this class method creates the table with each of the BoardPiece containers
    let table = [];

    for(let id = 1; id<= 16; id+=4){
      let row = []

      for(let j = 0; j<= 3; j++){
        row.push(<td><BoardPiece id={id+j} /></td>)
      }
      table.push(<tr>{row}</tr>)
    }

    return table;
  }

}
