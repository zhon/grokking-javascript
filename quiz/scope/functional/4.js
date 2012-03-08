"use strict";
var print = console.log;

(function() {
  return function() {
    print(x);
  };
  var x = 1;
}())();
// Error, undefined, 1, null
