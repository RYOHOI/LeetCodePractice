/* Given an integer,
return its base 7 string representation.

Example 1:
  Input: 100
Output: "202"
Example 2:
  Input: -7
Output: "-10"
Note: The input will be in range of[-1e7, 1e7]. */

/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
  var result = [],
    numCopy = num,
    num = Math.abs(num)
  while (num > 0) {
    result.unshift(num % 7)
    num = num - num % 7
    num /= 7
  }
  if (numCopy < 0) result.unshift('-')
  return result.join('')
};

console.log(convertToBase7(-7))