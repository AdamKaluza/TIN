var cached = function (cache, fun) {
    return function f(n) {
        if (cache[n] !== undefined) {
            return cache[n];
        } else {
            cache[n] = fun(f, n);
        }
        return cache[n];
    };
};

// var fibonacci = cached([0, 1], function (recur, n) {
//     return recur(n - 1) + recur(n - 2);
// });
//
// var factorial = cached([1], function (recur, n) {
//     return recur(n - 1) *n;
// });
//
// console.log(factorial(5));
// console.log(fibonacci(5));