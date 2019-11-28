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
  cnst odd = [], even = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i] % 2 === 0 ? even.push(arr[i]) : odd.push(arr[i]);
  }
  return [odd, even];
};
const pickIt = arr => {
  const odd = [], even = [];
  for (let res of arr) {
    ((res % 2) ? odd : even).push(res);
  }
  return [odd, even];
};
