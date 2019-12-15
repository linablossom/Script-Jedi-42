// http://www.codewars.com/kata/5731861d05d14d6f50000626
const bigToSmall = arr => {
  const res = arr.reduce((res, item) => [...res, ...item], []);
  res.sort((a, b) => b - a);
  return res.join('>');
}
// http://www.codewars.com/kata/573156709a231dcec9000ee8
const tailAndHead = arr =>
  arr.reduce((res, item, index) => {
    if (index === arr.length - 1) return res;
    
    const nums = (item + '').split('');
    let sum = +nums[nums.length - 1];
    const nextNums = (arr[index + 1] + '').split('');
    sum += +nextNums[0];

    res.push(sum);
    return res;
  }, []).reduce((res, item) => res * item, 1);
  // http://www.codewars.com/kata/5732b0351eb838d03300101d
  function blackAndWhite(arr) {
  if (!Array.isArray(arr)) {
    return "It's a fake array";
  }
  
  if (arr.find(el => el === 5) && arr.find(el => el === 13)) {
    return "It's a black array";
  }
  
  return "It's a white array";
}
// https://www.codewars.com/kata/array-number-reduce/train/javascript
Array.prototype.reduce = function(process, initial) {
  let res = initial || this.shift();
  this.map((item, index) => res = process(res, item, index));
  return res;
}
