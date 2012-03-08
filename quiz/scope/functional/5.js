"use strict";

var x = "Javascript is cool";
var f = (function() {
  var x = 1;
  return function() {
    console.log(x);
    x += 1;
  };
}());
f();
console.log(x);
f();

