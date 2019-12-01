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
