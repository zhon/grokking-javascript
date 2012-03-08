"use strict";
var print = console.log;

var f = (function() {
  var x = 1;
  return function() {
    var y = x;
    print(y);
  };
}());
f();
// Error, undefined, 1, null

var f = function(count) {
  var arr = [], i=1;
  for ( ; i <= count; ++i) {
    arr.push(function() {
      print(i);
    });
  }
  return arr;
}
f(3)[0]();
// 1, 2, 3, 4

var f = function(count) {
    var arr = [], i=1;
    var mk_fun = function(x) {
      return function() {
        print(x);
      }
    }
    for ( ; i <= count; ++i) {
      arr.push(mk_fun(i));
    }
    return arr;
}
f(3)[0]();
// 1, 2, 3, 4





