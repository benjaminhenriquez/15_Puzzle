export const SET_BOARD = "SET_BOARD";

export function movePieces(array,id){

function switchPiece(array, id){
id = parseInt(id);
  if (id%4 === 0 && (array[id-2]=== "" || array[id+3]=== ""||array[id-5]=== "")) {

    array[array.indexOf("")] = array[id-1];
    array[id-1] = "";
    return array;
  }
  else if (id%4 === 1 && (array[id]=== "" || array[id-5]=== ""||array[id+3]=== "")){

      array[array.indexOf("")] = array[id-1];
      array[id-1] = "";
      return array;
  }
  else if (array[id-1]!== "" && (array[id]=== "" || array[id-2]==="" || array[id-5]=== ""||array[id+3]=== "")){

      array[array.indexOf("")] = array[id-1];
      array[id-1] = "";
      return array;
  }
};



let board = switchPiece(array, id);
console.log(board)
return {
  type: SET_BOARD,
  payload: board
};

  //i will need only the id of the piece moved;
  //logic will live here;
  //i will have access to value not here but in the component if they have access to state
}

export function scrambleBoard(){

  function shuffle() {

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
}


  let array = shuffle();
  //get this to work
console.log(array);
  return {
    type: SET_BOARD,
    payload: array
  };

}
