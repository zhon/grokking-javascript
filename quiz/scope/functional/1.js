"use strict";

var f = function () {
    var x = 1;
    return function() {
        console.log(x);
    };
};
f()();
// Error, undefined, 1, null
