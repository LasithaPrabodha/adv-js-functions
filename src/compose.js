function compose(...funcs) {
  return function composed(...args) {
    return funcs.reduceRight(
      (result, func) => [func.call(this, ...result)],
      args
    )[0];
  };
}

// Define the functions that add to the string
function addPrefix(str) {
  return "prefix-" + str;
}

function addSuffix(str) {
  return str + "-suffix";
}

function toUppercase(str) {
  return str.toUpperCase();
}

// Create a piped function that applies the three functions in the correct order
const decorated1 = compose(addPrefix, addSuffix, toUppercase);
const decorated2 = compose(toUppercase, addPrefix, addSuffix);

// Call the piped function with the input string
const result1 = decorated1("hello"); // prefix-HELLO-suffix
const result2 = decorated2("hello"); // PREFIX-HELLO-SUFFIX

console.log({ result1, result2 });
