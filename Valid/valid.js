/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  let obj = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    let current = s[i];
    if (obj[current]) {
      stack.push(obj[current]);
    } else if (stack.pop() !== current) {
      return false;
    }
  }
  return stack.length === 0;
};

console.log(isValid("()[]{}"));
console.log(isValid("()[]}"));
