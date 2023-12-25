const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const digArr = n.toString().split("");
  for (let i = 0; i < digArr.length; i++) {
    if (digArr[i] < digArr[i + 1] || !digArr[i + 1]) {
      digArr.splice(i, 1);
      return Number(digArr.join(""));
    }
  }
}

module.exports = {
  deleteDigit,
};
