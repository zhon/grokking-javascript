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


(function() {
  print(x);
}());
// Error, undefined, 1, null

(function() {
  print(x);
  var x = 1;
}());
// Error, undefined, 1, null


(function() {
  return function() {
    print(x);
  };
  var x = 1;
}())();
// Error, undefined, 1, null


(function() {
  var x = 1;
  return function() {
    print(x);
    print(y);
  };
  var y = 2;
}())();
// Error, undefined, 1, null

