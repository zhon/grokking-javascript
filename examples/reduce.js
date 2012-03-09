function reduce(combine, array, initial) {
    var result = initial || array[0];
    array.forEach(function (item) {
            result = combine(result, item);
            });
    return result;
}
