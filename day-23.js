// http://www.codewars.com/kata/unpacking-arguments
const spread = (func, args) => func.apply(undefined, args);
// http://www.codewars.com/kata/for-the-sake-of-argument
const numbers = (...args) => args.findIndex(el => typeof el !== 'number') === -1;
