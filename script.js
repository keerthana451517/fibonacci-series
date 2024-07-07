function fibonacci(n) {
    let fib = [0, 1];

    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    return fib.slice(0, n);
}

// Example usage:
const n = 10; // Number of Fibonacci numbers to generate
const fibSeries = fibonacci(n);
console.log(`Fibonacci series of length ${n}:`, fibSeries);
