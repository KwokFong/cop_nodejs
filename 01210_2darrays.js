// https://www.youtube.com/watch?v=qq2XGeUr1bs&list=PLmpc3xvYSk4x_U853ulNXm8UzcXrYl9i4&index=21
'use strict'

let animalTable = [
    ['dog', 'cat'],
    ['giraffe', 'elephant', 'rhino'],
];

console.log(animalTable[1][2]);

animalTable[1][2] = 'capybara';

let animal = animalTable[1][2];

console.log(animal);
