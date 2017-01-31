import logic from './logic'

export const SET_BOARD = "SET_BOARD";


//this function randomizes the board and returns a payload of a board
export function scrambleBoard(){

//anonymous self executing function that randomizes the board
  let board = (function() {

    let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,""];
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  })();

  return {
    type: SET_BOARD,
    payload: board
  };

}

//this function returns payload of board
export function movePieces(array,id){

  let board = logic(array, id);

  return {
    type: SET_BOARD,
    payload: board
  };
}
