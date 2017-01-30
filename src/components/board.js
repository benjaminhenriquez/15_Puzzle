import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import ReactBoard from 'react-board';

import BoardPiece from './board_piece';
import { setBoard } from '../actions/index'

class Board extends Component {

  constructor(props){
    super(props);
    this.state = { pieces: ["a",2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]};
  }


    render() {

    return (
      <table>
      <tbody>
        <tr>
          <td><BoardPiece id="1"/></td>
          <td><BoardPiece id="2"/></td>
          <td><BoardPiece id="3"/></td>
          <td><BoardPiece id="4"/></td>
        </tr>
        <tr>
          <td><BoardPiece id="5"/></td>
          <td><BoardPiece id="6"/></td>
          <td><BoardPiece id="7"/></td>
          <td><BoardPiece id="8"/></td>
        </tr>
        <tr>
          <td><BoardPiece id="9"/></td>
          <td><BoardPiece id="10"/></td>
          <td><BoardPiece id="11"/></td>
          <td><BoardPiece id="12"/></td>
        </tr>
        <tr>
          <td><BoardPiece id="13"/></td>
          <td><BoardPiece id="14"/></td>
          <td><BoardPiece id="15"/></td>
          <td><BoardPiece id="16"/></td>
        </tr>
        </tbody>

      </table>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ setBoard }, dispatch);
}

export default connect(null, mapDispatchToProps)(Board);
