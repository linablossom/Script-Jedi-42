//https://www.codewars.com/kata/5636840bd87777688b00006c/train/javascript
function* generator() {
  let i = 1;
  while (true) {
    const value = yield i++;
    if (value) i = value;
  }
}
//https://www.codewars.com/kata/5637ead70013386e30000027/train/javascript
function* generator(a) {
  let b = 1;
  while (true) {
    yield `${a} x ${b} = ${a * b++}`;
  }
}
