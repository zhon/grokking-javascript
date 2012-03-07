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

// seperate out hoisting and functional hoisting
// scope
(function() {
  var x,
      fn = function() {
    print(x);
  };
  x = 1;
  return fn;
}())();


(function() {
  var x = 1;
  return function() {
    print(x);
    print(y);
  };
  var y = 2;
}())();


// talk about arguments?


// uses jslint or jshint











