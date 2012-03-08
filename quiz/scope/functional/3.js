"use strict";
var print = console.log;

(function() {
  print(x);
  var x = 1;
}());
// Error, undefined, 1, null

