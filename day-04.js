// http://www.codewars.com/kata/57216d4bcdd71175d6000560
const padIt = (str, n) => {
  let str1 = str, count = 0;
  while (count++ < n) {
    str1 = count % 2 === 0 ? str1 + "*" : "*" + str1;
  } 
  return str1;
};
