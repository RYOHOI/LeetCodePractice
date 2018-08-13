/* Related to question Excel Sheet Column Title

Given a column title as appear in an Excel sheet, return its corresponding column number.

For example:

    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28  */

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  // String.fromCharCode(65) = 'A'
  function charToNum(c) {
    return c.charCodeAt(0) - 64
  }
  var sum = 0
  for (var i = 0; i < s.length; i++) {
    sum += Math.pow(26, i) * charToNum(s[s.length - i - 1])
  }
  return sum
};

console.log(titleToNumber('Z'))