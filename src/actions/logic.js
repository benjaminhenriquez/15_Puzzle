//logic behind click events and movement of pieces on board
//recursive function required? 

export default function (array, id){
id = parseInt(id);
  if (id%4 === 0){

    if(array[id-2]=== "" || array[id+3]=== ""||array[id-5]=== "") {
      array[array.indexOf("")] = array[id-1];
      array[id-1] = "";
      return array;
    }
    else if (array[id-3]=== ""){
      array[id-3] = array[id-2];
      array[id-2] = array[id-1];
      array[id-1] = "";
      return array;
    }
    else if (array[id+7]===""){
      array[id+7] = array[id+3];
      array[id+3] = array[id-1];
      array[id-1] = "";
      return array;
    }
    else if (array[id-9]===""){
      array[id-9] = array[id-5];
      array[id-5] = array[id-1]
      array[id-1] = "";
      return array;
    }
    else if (array[id-4]===""){
      array[id-4] = array[id-3];
      array[id-3] = array[id-2]
      array[id-2] = array[id-1]
      array[id-1] = "";
      return array;
    }
    else if (array[id-13]===""){
      array[id-13] = array[id-9];
      array[id-9] = array[id-5]
      array[id-5] = array[id-1]
      array[id-1] = "";
      return array;
    }
    else if (array[id+11]===""){
      array[id+11] = array[id+7];
      array[id+7] = array[id+3];
      array[id+3] = array[id-1]
      array[id-1] = "";
      return array;
    }
  }
  else if (id%4 === 1 ){
    if (array[id]=== "" || array[id-5]=== ""||array[id+3]=== ""){

          array[array.indexOf("")] = array[id-1];
          array[id-1] = "";
          return array;
      }
      else if (array[id+1]=== ""){
        array[id+1] = array[id];
        array[id] = array[id-1];
        array[id-1] = "";
        return array;
      }
      else if (array[id+7]===""){
        array[id+7] = array[id+3];
        array[id+3] = array[id-1];
        array[id-1] = "";
        return array;
      }
      else if (array[id-9]===""){
        array[id-9] = array[id-5];
        array[id-5] = array[id-1]
        array[id-1] = "";
        return array;
      }
      else if (array[id+2]=== ""){
        array[id+2] = array[id+1]
        array[id+1] = array[id];
        array[id] = array[id-1];
        array[id-1] = "";
        return array;
      }
      else if (array[id-13]===""){
        array[id-13] = array[id-9];
        array[id-9] = array[id-5]
        array[id-5] = array[id-1]
        array[id-1] = "";
        return array;
      }
      else if (array[id+11]===""){
        array[id+11] = array[id+7];
        array[id+7] = array[id+3];
        array[id+3] = array[id-1]
        array[id-1] = "";
        return array;
      }
  }
  else if (id%4 === 2 ){
    if (array[id]=== "" || array[id-2]==="" || array[id-5]=== ""||array[id+3]=== ""){
        array[array.indexOf("")] = array[id-1];
        array[id-1] = "";
        return array;
      }
      else if (array[id+1]=== ""){
        array[id+1] = array[id];
        array[id] = array[id-1];
        array[id-1] = "";
        return array;
      }
      else if (array[id+7]===""){
        array[id+7] = array[id+3];
        array[id+3] = array[id-1];
        array[id-1] = "";
        return array;
      }
      else if (array[id-9]===""){
        array[id-9] = array[id-5];
        array[id-5] = array[id-1]
        array[id-1] = "";
        return array;
      }
      else if (array[id-13]===""){
        array[id-13] = array[id-9];
        array[id-9] = array[id-5]
        array[id-5] = array[id-1]
        array[id-1] = "";
        return array;
      }
      else if (array[id+11]===""){
        array[id+11] = array[id+7];
        array[id+7] = array[id+3];
        array[id+3] = array[id-1]
        array[id-1] = "";
        return array;
      }
    }
  else if (id%4 === 3 ){
    if (array[id]=== "" || array[id-2]==="" || array[id-5]=== ""||array[id+3]=== ""){
        array[array.indexOf("")] = array[id-1];
        array[id-1] = "";
        return array;
      }
      else if (array[id-3]=== ""){
        array[id-3] = array[id-2];
        array[id-2] = array[id-1];
        array[id-1] = "";
        return array;
      }
      else if (array[id+7]===""){
        array[id+7] = array[id+3];
        array[id+3] = array[id-1];
        array[id-1] = "";
        return array;
      }
      else if (array[id-9]===""){
        array[id-9] = array[id-5];
        array[id-5] = array[id-1]
        array[id-1] = "";
        return array;
      }
      else if (array[id-13]===""){
        array[id-13] = array[id-9];
        array[id-9] = array[id-5]
        array[id-5] = array[id-1]
        array[id-1] = "";
        return array;
      }
      else if (array[id+11]===""){
        array[id+11] = array[id+7];
        array[id+7] = array[id+3];
        array[id+3] = array[id-1]
        array[id-1] = "";
        return array;
      }
    }
};
