// http://www.codewars.com/kata/57274562c8dcebe77e001012
function cutIt(arr) {
  const minLength = arr.reduce(
    (result, item) =>
      result > item.length ? item.length : result,
    arr[0].length
  );
  
  return arr.map(item => item.slice(0, minLength));
}
