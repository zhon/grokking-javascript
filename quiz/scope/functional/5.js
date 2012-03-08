"use strict";
var print = console.log;

var x = "Javascript is cool";
f = (function() {
  var x = 1;
  return function() {
    print(x);
    x += 1;
  };
}());
f();
print(x);
f();

