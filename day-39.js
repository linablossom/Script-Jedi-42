//https://www.codewars.com/kata/5c743cec901022438549964a
const createIterator = (array) => {
  const res = { index: 0 };
  res.next = () => res.index === array.length ? ({
    value: undefined,
    done: true
  }) : ({
    value: array[res.index++],
    done: false
  });
  return res;
};
