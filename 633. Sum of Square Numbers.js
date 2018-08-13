/* Given a non - negative integer c, your task is to decide whether there 're two integers a and b such that a2 + b2 = c.

Example 1:
  Input: 5
Output: True
Explanation: 1 * 1 + 2 * 2 = 5
Example 2:
  Input: 3
Output: False */

/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
  var root = Math.ceil(Math.sqrt(c))
  var leftIndex = 0,
    rightIndex = root
  while (leftIndex < rightIndex) {
    var product = leftIndex ** 2 + rightIndex ** 2
    if (product > c) rightIndex--
      else if (product < c) leftIndex++
        else return true
  }
  return false
};