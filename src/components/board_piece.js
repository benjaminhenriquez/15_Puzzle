import React, { Component } from 'react';
import { connect } from 'react-redux';

// import ReactBoard from 'react-board';

class BoardPiece extends Component {

  render(){
    return(
      <div>{this.props.pieces[this.props.id-1]}</div>
    );
  }
};

function mapStateToProps({ pieces }){
  return { pieces };
}

export default connect(mapStateToProps)(BoardPiece);
