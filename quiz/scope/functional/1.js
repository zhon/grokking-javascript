var f = function () {
    var x = 1;
    return function() {
        console.log(x);
    };
};
f()();
// 1 function undefined error
