import React, { Component } from 'react';
// import ReactBoard from 'react-board';

class BoardPiece extends Component {
  render(){
    return(
      <div>this.props.pieces[`${id}`]</div>
    );
  }
};

function mapStateToProps({ pieces }){
  return { pieces };
}

export default connect(mapStateToProps)(BoardPiece);
