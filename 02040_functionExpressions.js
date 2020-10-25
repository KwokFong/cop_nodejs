// https://www.youtube.com/watch?v=KNppjrD9Io8&list=PLmpc3xvYSk4x_U853ulNXm8UzcXrYl9i4&index=27
'use strict';

greet1();

// Function Definition
function greet1(){
    console.log("Hello 1");
}

// Function Expression
let greet2 = function() {
    console.log("Hello 2");
} 
greet2();

//  
let greet3 = () => {
    console.log("Hello 3");
}
greet3();