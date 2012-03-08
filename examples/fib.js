(function() {
  "use strict";
  var fib, y_mem,
      upto, print, print_fib;
  if (typeof print !== 'function') {
    print = console.log;
  }

  upto = function(f, count) {
    var i;
    for (i = 0; i <= count; i+=1) {
      f(i);
    }
  };

  print_fib = function(n) {
    print(n + ": " + fib(n));
  };

  fib = function(n) {
    if (n === 0) { return 0; }
    if (n === 1) { return 1; }
    return fib(n-1) + fib(n-2);
  };

  //upto(print_fib, 100);


  // See Y combinator and memoization
  y_mem = function(f, cache) {
    if (!cache) {
      cache = {};
    }
    return function(arg) {
      var answer;
      if (cache[arg]) {
        return cache[arg];
      }
      answer = (f(function(n) {
        return y_mem(f, cache)(n);
      }))(arg);
      cache[arg] = answer;
      return answer;
    };
  };

  fib = y_mem(function(g) {
    return function (n) {
      if (n === 0) { return 0; }
      if (n === 1) { return 1; }
      return g(n-1) + g(n-2);
    };
  });

  upto(print_fib, 100);

}());




