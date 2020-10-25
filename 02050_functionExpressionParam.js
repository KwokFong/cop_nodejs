// https://www.youtube.com/watch?v=giME5YMhh5w&list=PLmpc3xvYSk4x_U853ulNXm8UzcXrYl9i4&index=31
'use strict';

// 3! 'Three Factorial' = 3 * 2 * 1
// 5! = 5 * 4 *3 * 2 * 1
// 0! = 1

function factorial1(value) {
    let factorial = 1;

    for (let n = 2; n <= value; n++){
        factorial = factorial * n;
    }
    return factorial;
}
let result1 = factorial1(0);
console.log(result1);

// Functional Expression
let factorial2 = function(value){
    let factorial = 1;

    for (let n = 2; n <= value; n++){
        factorial = factorial * n;
    }
    return factorial;
}
let result2 = factorial2(4);
console.log(result2);
console.log(factorial2(4));

// Functional Expression2
let factorial3 = (value) => {
    let factorial = 1;

    for (let n = 2; n <= value; n++){
        factorial = factorial * n;
    }
    return factorial;
}
console.log(factorial3(5));
