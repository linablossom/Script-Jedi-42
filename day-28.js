// http://www.codewars.com/kata/a-function-within-a-function
function always (n) {
  return () => n;
}
// https://www.codewars.com/kata/singleton-pattern/train/javascript
function Singleton() {
  let instance;
  Singleton = function() {
    return instance;
  };
  Singleton.prototype = this;
  instance = new Singleton();
  
  return instance;
}
