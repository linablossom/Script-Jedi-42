// http://www.codewars.com/kata/5728203b7fc662a4c4000ef3
const alienLanguage = str => str.split(' ').map(
  word => word.toUpperCase().replace(/\w$/, char => char.toLowerCase())
).join(' ');
// http://www.codewars.com/kata/57284d23e81185ae6200162a
const topSecret = str => str.split(' ').map(
  word => word.replace(/\w/g, char => {
    const charCode = char.charCodeAt(0);
    if (charCode < 68 || charCode > 90 && charCode < 100) {
      return String.fromCharCode(23 + charCode);
    } else {
      return String.fromCharCode(charCode - 3);
    }
  })
).join(' ');

answer1="2335";
answer2="xAmAT";
answer3="Train tire";
// http://www.codewars.com/kata/5729b103dd8bac11a900119e
const fiveLine = str =>
  (new Array(5)).fill(str.trim()).map((item, index) => item.repeat(index + 1)).join('\n');
