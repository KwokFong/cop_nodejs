//https://www.youtube.com/watch?v=1YhnohYWzdg&list=PLmpc3xvYSk4x_U853ulNXm8UzcXrYl9i4&index=20
'use strict';

let days = ['Sunday', 'Monday', 'Tuesday'];

console.log(days[0]);

let day = days[1];
console.log(day);

console.log(days[2]);

let heights = [1.7, 1.65, 1.5, 1.9, 'hello'];
console.log(heights[2]);

console.log("Items in heights array", heights.length);


for(let i = 0; i < heights.length; i++) {
    console.log("Item ", i, " in heights array: " , heights[i]);
}