// http://www.codewars.com/kata/572ab0cfa3af384df7000ff8
function shuffleIt(arr, ...ar) {
  ar.forEach(([a, b]) => {
    [arr[a], arr[b]] = [arr[b], arr[a]]
  });
  
  return arr;
}
// http://www.codewars.com/kata/572af273a3af3836660014a1
function infiniteLoop(arr, d, n) {
  const isReverse = d === 'right';
  const mergedArr = arr.reduce((res, item) => [...res, ...item], []);
  const normalizedN = n > mergedArr.length ? mergedArr.length - n : n;
  const shifted = isReverse ? mergedArr.splice(-normalizedN) : mergedArr.splice(0, normalizedN);
  const newArr = isReverse ? [...shifted, ...mergedArr] : [...mergedArr, ...shifted];
  return arr.reduce((res, item) => {
    res.push(newArr.splice(0, item.length));
    return res;
  }, []);
}
// http://www.codewars.com/kata/572cb264362806af46000793
function threeInOne(arr) {
  const res = [];
  for (let i = 0; i < arr.length; i += 3) {
    const group = arr.slice(i, i + 3);
    const sum = group.reduce((result, item) => result + item, 0);
    res.push(sum);
  }

  return res;
}
