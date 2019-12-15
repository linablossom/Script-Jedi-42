// http://www.codewars.com/kata/572df796914b5ba27c000c90
const sortIt = arr => {
  const counts = arr.reduce((res, item) => {
    if (res[item]) {
      res[item]++;
    } else {
      res[item] = 1;
    }
    
    return res;
  }, {});
  
  return [...arr].sort((a, b) => (counts[a] - counts[b]) || b - a);
};
// http://www.codewars.com/kata/572fdeb4380bb703fc00002c
const isolateIt = arr => arr.map(x => 
  x.slice(0, Math.floor(x.length / 2)) + "|" + x.slice(-Math.floor( x.length / 2)));
// http://www.codewars.com/kata/573023c81add650b84000429
const grades = [
  ['S', 100, 100],
  ['A', 90, 99],
  ['B', 80, 89],
  ['C', 60, 79],
  ['D', 0, 59],
  ['X', -1, -1]
];

const countGrade = scores =>
  grades.reduce((res, [letter, minValue, maxValue]) => {
    res[letter] = scores.filter(score => score >= minValue && score <= maxValue).length;
    
    return res;
  }, {});
// http://www.codewars.com/kata/57308546bd9f0987c2000d07
function mirrorImage(arr){
  let match = [-1, -1];
  arr.forEach((num, numIndex) => {
    const oppositeNum = +(num + '').split('').reverse().join('');
    if (arr.find((item, itemIndex) => itemIndex > numIndex && item === oppositeNum)) {
      match = [num, oppositeNum];
    }
  });
  
  return match;
}
