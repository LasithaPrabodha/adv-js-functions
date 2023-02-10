function partial(func, ...args) {
  return function partiallyApplied(...moreArgs) {
    return func(...args, ...moreArgs);
  };
}
// Define the function that calculates something
function calculate(x, y, z) {
  return (x + y) * z;
}

// Create a partially applied version of the function the last argument
const multiply10By = partial(calculate, 8, 2);

// Call the partially applied function with the number of iterations
const result = multiply10By(5);

console.log({ result });
