var array1 = [1   2   3   4]
var array2 = [5   6   7   8]
var array3 = [9   10  11  12]
var array4 = [13  14  15  16]

columns 1-4

var r;
var c;

if      id > 0 && id < 5 r = 1
else if id > 4 && id < 9 r = 2
else if id > 8 && id < 13 r = 3
else if id > 12 && id < 17 r = 4

if      id%4 === 1 c = 0
else if id%4 === 2 c = 1
else if id%4 === 3 c = 2
else if id%4 === 0 c = 3

var value = array`#{r}`[`#{c}`]

this is to find state


if value === "" do nothing
if value type === number s


var array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

if id%4 === 0 && (array[id-2]=== "" || array[id-4]=== ""||array[id+4]=== "") {
  array[indexOf("")] = array[id-1]
  array[id-1] = ""
}

else if id%4 === 0 && (array[id]=== "" || array[id-4]=== ""||array[id+4]=== ""){
    array[indexOf("")] = array[id-1]
    array[id-1] = ""
}
else if array[id-1]!= "" && (array[id]=== "" || array[id-2] || array[id-4]=== ""||array[id+4]=== ""){
    array[indexOf("")] = array[id-1]
    array[id-1] = ""
}
