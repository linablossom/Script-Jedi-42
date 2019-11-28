// http://www.codewars.com/kata/57216d4bcdd71175d6000560
const padIt = (str, n) => {
  let res = str, count = 0;
  while (count++ < n) {
    res = count % 2 === 0 ? res + "*" : "*" + res;
  } 
  return res;
};
// http://www.codewars.com/kata/5721a78c283129e416000999
const pickIt = arr => {
  const odd = [], even = [];
  for (let el of arr) {
    (el % 2 === 0 ? even : odd).push(el);
  }
  return [odd, even];
};
// http://www.codewars.com/kata/5721c189cdd71194c1000b9b
const grabDoll = dolls => {
  const bag = [];
  for (let doll of dolls) {
    if (["Hello Kitty", "Barbie doll"].indexOf(doll) === -1) {
      continue;
    }
    bag.push(doll);
    if (bag.length === 3) {
      break;
    }
  }
  return bag;
};
