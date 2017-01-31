import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Board from '../components/board.js'
import { scrambleBoard } from '../actions/index'

class App extends Component {

  render() {
    //this container has access to redux state and renders the board component
    return (
      <div>
        <h1>Puzzle 15</h1>
        < Board />
        <input type="button" value="Shuffle Board!" onClick={this.renderScrambledBoard.bind(this)}/>
      </div>
    );
  }

  renderScrambledBoard(event){
    //this class method allows for onClick event to signal the randomizing of board
    event.preventDefault();
    this.props.scrambleBoard();
  }

}

function mapStateToProps({ board }){
  return { board };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ scrambleBoard }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
