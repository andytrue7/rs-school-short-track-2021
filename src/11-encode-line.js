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
  let count = 1;
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (i > 0) {
      if (str[i] === str[i - 1]) {
        count++;
      } else {
        newStr += `${count > 1 ? count : ''}${str[i - 1]}`;
        count = 1;
      }
      if (i === str.length - 1) {
        newStr += `${count > 1 ? count : ''}${str[i]}`;
      }
    }
  }
  return newStr;
}

module.exports = encodeLine;
