import { combineReducers } from 'redux';

import { SET_BOARD } from '../actions/index'


function boardReducer(state =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,""], action){
  switch (action.type){
    case SET_BOARD:
      return [...action.payload];
  }
  return state;
}



const rootReducer = combineReducers({
  board: boardReducer
});

export default rootReducer;
