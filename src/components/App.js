import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Board from './board.js'
import { scrambleBoard } from '../actions/index'

class App extends Component {
  render() {

    return (
      <div>
        <h1>Puzzle 15</h1>
        < Board />
        <input type="button" value="Shuffle Board!" onClick={this.renderScrambledBoard.bind(this)}/>
      </div>
    );
  }

  renderScrambledBoard(event){

    event.preventDefault();
    this.props.scrambleBoard();
  }
}

function mapStateToProps({ pieces }){
  return { pieces };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ scrambleBoard }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
