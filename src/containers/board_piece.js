import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { movePieces } from '../actions/index'
import '../style/index.css'


class BoardPiece extends Component {

  render(){
    //each of the 16 boxes on grid are their own container
    var box;
    this.props.board[this.props.id-1] === "" ? box = "empty" : box = "number"

    return(
      <div className={box} onClick={this.renderMovedPieces.bind(this)}>{this.props.board[this.props.id-1]}</div>
    );
  }

  renderMovedPieces(event){
    //this class method allows for onClick event to signal the movement on the board
    event.preventDefault();
    this.props.movePieces(this.props.board, this.props.id);
  }

}

function mapStateToProps({ board }){
  return { board };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ movePieces }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardPiece);
