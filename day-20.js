// http://www.codewars.com/kata/5735e39313c205fe39001173
function countAnimals(animals, count) {
  const regex = new RegExp(`(${count.join(')|(')})`, 'g');
  const matches = animals.match(regex);
  if (!matches) return count.map(undefined => 0);
  return count.map(item => matches.reduce((res, match) => match === item ? res + 1 : res, 0));
}
// http://www.codewars.com/kata/573975d3ac3eec695b0013e0
function findSimilarity(str,word){
  const regex = new RegExp(`^${word.replace(/^(.).*(.)$/, (...[,a,b]) => `${a}.{${word.length - 2}}${b}`)}$`, 'g');
  return str.split(' ').filter(item => item.match(regex)).join(' ');
}
// https://www.codewars.com/kata/573bca07dffc1aa693000139
var regex= /^-?9\d*0{4,}$/
