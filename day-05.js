// https://www.codewars.com/kata/is-this-my-tail/train/javascript
const correctTail = (body, tail) => body[body.length -1] === tail;
// https://www.codewars.com/kata/56f6ad906b88de513f000d96
const bonusTime = (salary, bonus) => `£${bonus ? salary * 10 : salary}`;
// https://www.codewars.com/kata/5a58d889880385c2f40000aa
const automorphic = n =>
  n ** 2 % 10 ** (n + "").length === n ? "Automorphic" : "Not!!";
