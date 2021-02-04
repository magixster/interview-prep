// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3


function memoize(fn) {
  let cache = {};
  return function(...args) {
    if (cache[args]) return cache[args];
    const result = fn.apply(this, args);
    cache[args] = result;
    return result;
  }
}

function fib(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fib(n - 1) + fib(n - 2);
}

fib = memoize(fib);

// let memoized = {};
// function fib(n) {
//   if (n === 0) return 0;
//   if (n === 1) return 1;
//   if (memoized[n]) return memoized[n];
//   else memoized[n] = fib(n - 1) + fib(n - 2);
//   return fib(n - 1) + fib(n - 2);
// }

// function fib(n) {
//   let el1 = 0;
//   let el2 = 1;
//   let fibs = [el1, el2];

//   for (let i = 0; i <= n - 2; i++) {
//     let result = el1 + el2;
//     fibs.push(result);
//     el1 = el2;
//     el2 = result;
//   }

//   return fibs[n]
// }

module.exports = fib;
