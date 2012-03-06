"use strict";
if (typeof print != 'function') var print = console.log;


var positiveNumbers = [1, 2, 3, 4, 5]
var negativeNumbers = []
for (var i = 0; i < positiveNumbers.length; ++i) {
  negativeNumbers.push(-positiveNumbers[i]);
}


var negativeNumbers = positiveNumbers.map(
    function(item) {
      return -item;
    });

function negate(x) {
  return -x;
}

var negativeNumbers = positiveNumbers.map(negate)
var negativeNumbers = Array.prototype.map.call(positiveNumbers, negate);

print(negativeNumbers);
