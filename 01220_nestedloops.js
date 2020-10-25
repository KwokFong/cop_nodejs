// https://www.youtube.com/watch?v=RJHgM0DKYSo&list=PLmpc3xvYSk4x_U853ulNXm8UzcXrYl9i4&index=22
'use strict'

let animalTable = [
    ['dog', 'cat'],
    ['giraffe', 'elephant', 'rhino'],
];

for(let i = 0; i < animalTable.length; i++){
    let row = animalTable[i];
     
    for(let j = 0; j < row.length; j++){
        console.log(i, j, row[j]);
    }
}