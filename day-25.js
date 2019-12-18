// https://www.codewars.com/kata/write-javascripts-call-function-using-apply/train/javascript
Function.prototype.call = function(thisArg, ...args) {
  return this.apply(thisArg, args);
};
// https://www.codewars.com/kata/anonymous-returns/train/javascript
name = 'The Window';

var alpha = {
    name : 'My Alpha',
    getNameFunc : function() {
        return (function() {
            return this.name;
        }).bind(this);
    }
};
