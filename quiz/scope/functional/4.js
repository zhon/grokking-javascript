"use strict";

(function() {
    return function() {
        console.log(x);
    };
    var x = 1;
}())();
// Error, undefined, 1, null
