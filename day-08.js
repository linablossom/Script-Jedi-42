// http://www.codewars.com/kata/5722fd3ab7162a3a4500031f
// як краще робити цю задачу? через if чи switch?
// запитання по задачі можна задавати відразу в коментарях чи краще на ретроспективі?
function whatNumberIsIt(n) {
  if (n === Number.MAX_VALUE) {
    return "Input number is Number.MAX_VALUE";
  }
  if (n === Number.MIN_VALUE) {
    return "Input number is Number.MIN_VALUE";
  }
  if (Number.isNaN(n)) {
    return "Input number is Number.NaN";
  }
  if (n === Number.NEGATIVE_INFINITY) {
    return "Input number is Number.NEGATIVE_INFINITY";
  }
  if (n === Number.POSITIVE_INFINITY) {
    return "Input number is Number.POSITIVE_INFINITY";
  }
    
    return `Input number is ${n}`;
}
// https://www.codewars.com/kata/57238ceaef9008adc7000603
const toHex = n => ("0" + n.toString(16)).slice(-2);
const colorOf = (r, g, b) => `#${toHex(r)}${toHex(g)}${toHex(b)}`;
// http://www.codewars.com/kata/57256064856584bc47000611
const howManySmaller = (arr, n) => arr.reduce((res, el) => el.toFixed(2) < n ? res + 1 : res, 0);
