const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      let innerIndex = i + 1;
      while (str[innerIndex] === str[i]) {
        innerIndex++;
      }
      innerIndex--;
      res += `${innerIndex - i + 1}${str[i]}`;
      i = innerIndex;
    } else {
      res += str[i];
    }
  }
  return res;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  encodeLine,
};
