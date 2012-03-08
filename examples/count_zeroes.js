"use strict";
if (typeof print != 'function') var print = console.log;

var x = countZeroes([ 0, 1, 2, 3 ,0]);
print(x);


function countZeroes(array) {
  var count = 0;
  for (var i=0; i<array.length; ++i) {
    if (array[i] === 0) count++;
  }
  return count;
}

function countZeroes(array) {
  var count = 0;
  array.forEach(function (x) {
    if (x === 0) count++;
  });
  return count;
}

function countZeroes(array) {
  function counter(total, item) {
    return total + (item === 0 ? 1 : 0);
  }
  return array.reduce(counter, 0);
}

function count(test, array) {
  return array.reduce(function(total, item) {
    return total + (test(item) ? 1 : 0);
  }, 0);
}

function equal(x) {
  return function(item) {
    return x == item;
  }
}

function countZeroes(array) {
  return count(equal(0), array);
}

// lifetime
// no need for naming stuff
// no worries
