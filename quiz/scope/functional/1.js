"use strict";
var print = console.log;

var f = function () {
  var x = 1;
  return function() {
    print(x);
  };
};
f()();
// Error, undefined, 1, null
