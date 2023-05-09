
const fib = (function () {
    const cache = {};
    const fun = (n) => {
        if (cache[n]) {
            return cache[n];
        }
        else {
            if (n == 1 || n == 0) {
                cache[n] = n;
                return n;
            }
            let temp = fun(n - 1) + fun(n - 2);
            cache[n] = temp;
            return temp;
        }
    }
    return {
        calculateFib: fun
    }
}
)();

console.log(fib.calculateFib(6));
