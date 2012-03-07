"use strict";
var log = console.log;


var x = (function () { return 1; })();
log(typeof x);
// number function undefined error
