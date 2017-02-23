export default function (array, id){
id = parseInt(id);

function common(array, id){

  if(array[id-5]=== "" || array[id+3]=== ""){
     array[array.indexOf("")] = array[id-1];
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

  if (id%4 === 0){
    if(array[id-2]=== ""){
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
    else if (array[id-4]===""){
      array[id-4] = array[id-3];
      array[id-3] = array[id-2]
      array[id-2] = array[id-1]
      array[id-1] = "";
      return array;
    }
    else{
        return common(array,id);
    }
  }

  else if (id%4 === 1 || id === 1){
    if(array[id]=== ""){
      array[array.indexOf("")] = array[id-1];
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
    else if (array[id+1]=== ""){
      array[id+1] = array[id];
      array[id] = array[id-1];
      array[id-1] = "";
      return array;
    }
    else{
      return common(array,id);
    }
  }

  else if (id%4 === 2 || id === 2){
    if(array[id]=== "" || array[id-2]=== ""){
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
    else{
      return common(array,id);
    }
  }

  else if (id%4 === 3  || id === 3){
    if(array[id]=== "" || array[id-2]=== ""){
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
    else{
      return common(array,id);
    }
  }

}
