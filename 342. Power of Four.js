/* Given an integer (signed 32 bits), write a function to check whether it is a power of 4.

Example:
Given num = 16, return true. Given num = 5, return false.

Follow up: Could you solve it without loops/recursion? */

/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
  if (n <= 0) return false
  if (n == 1 || n == 4) return true
  if (n < 4) return false
  var k = 1
  while (n > Math.pow(4, k)) k *= 2
  if (n == Math.pow(4, k)) return true
  var leftK = k / 2,
    rightK = k

  return binarySearch(leftK, rightK)

  function binarySearch(leftK, rightK) {
    if (rightK - leftK == 1) return false
    var midK = (leftK + rightK) / 2,
      midVal = Math.pow(4, midK)
    if (n > midVal) {
      leftK = midK
      return binarySearch(leftK, rightK)
    } else if (n == midVal) {
      return true
    } else {
      rightK = midK
      return binarySearch(leftK, rightK)
    }
  }
};