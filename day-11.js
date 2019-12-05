// https://www.codewars.com/kata/playing-with-sets-equal-or-not/train/javascript
const areEqual = (s1, s2) => {
  if (s1.length !== s2.length) {
    return false;
  }
  for (const el of s1) {
    if (!s2.has(el)) {
      return false;
    }
  }
  
  return true;
};
const notEqual = (s1, s2) => !areEqual(s1, s2);
