import React, { Component } from 'react';
import { connect } from 'react-redux';

// import ReactBoard from 'react-board';

import BoardPiece from './board_piece';
import '../../style/index.css'

class Board extends Component {



  render() {

    return (
      <table className="table">
      <tbody>
        <tr>
          <td><BoardPiece id="1" /></td>
          <td><BoardPiece id="2" /></td>
          <td><BoardPiece id="3" /></td>
          <td><BoardPiece id="4" /></td>
        </tr>
        <tr>
          <td><BoardPiece id="5" /></td>
          <td><BoardPiece id="6" /></td>
          <td><BoardPiece id="7" /></td>
          <td><BoardPiece id="8" /></td>
        </tr>
        <tr>
          <td><BoardPiece id="9" /></td>
          <td><BoardPiece id="10" /></td>
          <td><BoardPiece id="11" /></td>
          <td><BoardPiece id="12" /></td>
        </tr>
        <tr>
          <td><BoardPiece id="13" /></td>
          <td><BoardPiece id="14" /></td>
          <td><BoardPiece id="15" /></td>
          <td><BoardPiece id="16" /></td>
        </tr>
        </tbody>

      </table>
    )
  }
}

function mapStateToProps( {pieces} ){
  return {pieces};
}

export default connect(mapStateToProps)(Board);
