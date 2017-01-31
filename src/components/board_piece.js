import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { movePieces } from '../actions/index'
import '../../style/index.css'

// import ReactBoard from 'react-board';

class BoardPiece extends Component {

  renderMovedPieces(event){

    this.props.movePieces(this.props.pieces, this.props.id);
    //figure out how you will get access to id
  }

  render(){
    if(this.props.pieces[this.props.id-1] === ""){
      var box = "empty"
    }
    else{
      var box = "number"
    }
    return(
      <div className={box} onClick={this.renderMovedPieces.bind(this)}>{this.props.pieces[this.props.id-1]}</div>
    );
  }
};

function mapStateToProps({ pieces }){
  return { pieces };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ movePieces }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardPiece);
