// http://www.codewars.com/kata/571edd157e8954bab500032d
// не розумію чому у цій задачі не проходить const

let v1 = 50, v2 = 100, v3 = 150, v4 = 200, v5 = 2, v6 = 250;
let equal1 = () => v1 + v1;
let equal2 = () => v6 - v3;
let equal3 = () => v5 * v1;
let equal4 = () => v4 / v5;
let equal5 = () => v2 % v3;


// http://www.codewars.com/kata/571edea4b625edcb51000d8e
// і в цій задачі const теж помилка, пропускає тільки через var або let

var a1 = "A", a2 = "a", b1 = "B", b2 = "b", c1 = "C", c2 = "c", d1 = "D", d2 = "d", e1 = "E", e2 = "e", n1 = "N", n2 = "n";
var Dad = () => d1 + a2 + d2;
var Bee = () => b1 + e2 + e2;
var banana = () => b2 + a2 + n2 + a2 + n2 + a2;
var answer1 = () => "no";
var answer2 = () => "no";
var answer3 = () => "yes";

// http://www.codewars.com/kata/571effabb625ed9b0600107a

const getLength = (arr) => arr.length;
const getFirst = (arr) => arr[0];
const getLast = (arr) => arr[arr.length - 1]; 
const pushElement = (arr) => {
  var el = 1;
  arr.push(el);
  
  return arr;
};
const popElement = (arr) => {
  arr.pop();
  
  return arr;
};


// http://www.codewars.com/kata/571f1eb77e8954a812000837

const animal = (obj) => `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
