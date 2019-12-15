// http://www.codewars.com/kata/573d11c48b97c0ad970002d4
var regex=/https?:\/\/[a-z0-9\.]+(?:(?:\.com)|(?:\.net))\/?/img
// http://www.codewars.com/kata/573e6831e3201f6a9b000971
var regex=/(?<![a-zA-Z0-9_])(?:(?:([a-zA-Z0-9_])([[a-zA-Z0-9_])([[a-zA-Z0-9_])[[a-zA-Z0-9_]?\3\2\1)|(?:([[a-zA-Z0-9_])([[a-zA-Z0-9_])[[a-zA-Z0-9_]?\5\4)|(?:([[a-zA-Z0-9_])[[a-zA-Z0-9_]?\6))(?![a-zA-Z0-9_])/g;
// http://www.codewars.com/kata/573fb9223f9793e485000453
var regex=/(\d)(?=(\d\d\d)+(?!\d))/g
function addCommas(money,reg){
  return money.replace(reg,x=>x+",");
}
