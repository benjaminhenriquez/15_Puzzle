export function piecesReducer(state = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,""], action){

  switch (action.type){
    case "SET_BOARD":
      return state;
  }
  return state;
}
