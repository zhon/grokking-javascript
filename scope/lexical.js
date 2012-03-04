"use strict";
if (typeof print != 'function') var print = console.log;

var f = function () {
  var x = 1;
  return function() {
    print(x);
  }
};
f();

// Error, undefined, 1, null

(function() {
  var x = 1;
  var fn = function() {
    print(x);
  };
  var y = 2;
  return fn;
})()();


(function() {
  var x = 1;
  return function() {
    print(x);
    print(y);
  };
  var y = 2;
})

('_')('#')











