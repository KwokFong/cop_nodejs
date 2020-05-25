// https://www.youtube.com/watch?v=zz3YflJ2Ypo&list=PLmpc3xvYSk4x_U853ulNXm8UzcXrYl9i4&index=10
'use strict';

let celsius = process.argv[2];

console.log(celsius);

let fahrenheit = celsius * 9 / 5 + 32;

console.log('Celsium:', celsius, '=', 'Fahrenheit:', fahrenheit);