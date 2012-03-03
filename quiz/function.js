"use strict";
var log = console.log;


var x = function () {
  return 1;
};

log(typeof x);


var answers = [
  'number',
  'function',
  'undefined',
  Error
];

// question 2

"use strict";
var log = console.log;


function y() {
  return 1;
};

log(typeof y);


var answers = [
  'number',
  'function',
  'undefined',
  Error
];

// question

var x = (function () { return 1; })();
log(typeof x);

// question

var x = function(){}(); // should be written var x = (function () {})();
log(typeof x);


