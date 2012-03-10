var f = function () {
    var x = 1;
    return function() {
        print(x);
    };
};
f()();
// 1 function undefined error
