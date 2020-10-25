// https://www.youtube.com/watch?v=vEF5Yx7Acyg&list=PLmpc3xvYSk4x_U853ulNXm8UzcXrYl9i4&index=29
'use strict';

console.log(Math.pow(8, 2));

function square(number){
    let square = number * number;
    return square;
}

let value = square(7);
console.log(value);

function greet(name) {
    let greeting = 'Hello ' + name;
    return greeting;
}

let message = greet('Bob');
console.log(message);