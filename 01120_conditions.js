// https://www.youtube.com/watch?v=ZvI_3v8CRP0
'use strict';

let temperature = process.argv[2];
// console.log(temperature);

if( temperature < 20.0 ){
    console.log("Activating Heating...");
}
else if( temperature > 35.0 ){
    console.log("Room is overheating! Danger!!!");
}
else if( temperature > 21.0 ){
    console.log("De-activating Heating...");
}
else{
    console.log("Temparture is normal.");
}
