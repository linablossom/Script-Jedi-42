// http://www.codewars.com/kata/57274562c8dcebe77e001012
function cutIt(arr) {
  const minLength = arr.reduce(
    (result, item) =>
      result > item.length ? item.length : result,
    arr[0].length
  );
  
  return arr.map(item => item.slice(0, minLength));
}

// http://www.codewars.com/kata/57277a31e5e51450a4000010
const firstToLast = (str, c) => {
  const firstIndex = str.indexOf(c);
  if (firstIndex === -1) return -1;
  const lastIndex = str.lastIndexOf(c);
  if (lastIndex === -1) return 0;
  
  return lastIndex - firstIndex;
}

// https://www.codewars.com/kata/57280481e8118511f7000ffa
const splitAndMerge = (str, sp) => 
  str.split(' ').map(word => word.split('').join(sp)).join(' ');
