"use strict";
var print = console.log;


var x = function () {
  return 1;
};
print(typeof x);

// number
// function
// undefined
// error


// question 2

"use strict";
var print = console.log;


function y() {
  return 1;
}
print(typeof y);

// number,
// function,
// undefined
// Error

// question

var x = (function () { return 1; }());
print(typeof x);



var x = (function(){}());
print(typeof x);

// number,
// function,
// undefined
// Error

