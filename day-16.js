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
// http://www.codewars.com/kata/57308546bd9f0987c2000d07
