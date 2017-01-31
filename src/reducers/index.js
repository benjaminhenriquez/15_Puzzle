import { combineReducers } from 'redux';
import piecesReducer  from './reducer_pieces';

const rootReducer = combineReducers({
  pieces: piecesReducer
});

export default rootReducer;
