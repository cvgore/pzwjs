var counter = (function () {
    var state = 0;
    return function () { return ++state; };
})();
console.log(counter());
console.log(counter());
console.log(counter());
