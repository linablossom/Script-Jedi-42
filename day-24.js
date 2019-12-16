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
function last (...list) {
  if (list.length > 1) {
    return list[list.length - 1];
  }
  if (typeof list[0] === 'string') {
    const chars = list[0].split('');
    return chars[chars.length - 1];
  }
  if (Array.isArray(list[0])) {
    return list[0][list[0].length - 1];
  }
  return list[0];
}
