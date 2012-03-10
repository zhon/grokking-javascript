var x = "Javascript is cool";
var f = (function() {
    var x = 1;
    return function() {
        print(x);
        x += 1;
    };
}());
f();
print(x);
f();
