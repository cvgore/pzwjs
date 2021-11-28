var suma = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(function (a, v) { return a + v; }, 0);
};
console.log(suma(1, 2, 3));
