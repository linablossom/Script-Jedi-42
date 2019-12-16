// http://www.codewars.com/kata/duplicate-arguments
function solution (...args) {
  for (let i = 0; i < args.length - 1; i++) {
    if (args.findIndex((item, index) => item === args[i] && index > i) !== - 1) {
      return true;
    }
  }
  
  return false;
}
// http://www.codewars.com/kata/last
