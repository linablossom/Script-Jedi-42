// http://www.codewars.com/kata/571f832f07363d295d001ba8
const trueOrFalse = val => !val ? 'false' : 'true';
// http://www.codewars.com/kata/57202aefe8d6c514300001fd
const saleHotdogs = n => n * (n < 5 ? 100 : n < 10 ? 95 : 90);
// http://www.codewars.com/kata/572059afc2f4612825000d8a
// хотіла коротше записати, але без switch цю задачу не пропускає
const howManydays = month => {
  switch (month) {
    default: 
    return new Date(new Date().getFullYear(), month, 0).getDate();
  }
};
