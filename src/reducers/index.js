import { combineReducers } from 'redux';
import PiecesReducer from './reducer_pieces';

const rootReducer = combineReducers({
  pieces: PiecesReducer
});

export default rootReducer;
