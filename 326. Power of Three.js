/* Given an integer, write a function to determine if it is a power of three.

Follow up:
Could you do it without using any loop / recursion? */

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  if (n <= 0) return false
  if (n == 1 || n == 3) return true
    // add this line
  if (n == 2) return false
  var k = 1
  while (n > Math.pow(3, k)) k *= 2
  if (n == Math.pow(3, k)) return true
  var leftK = k / 2,
    rightK = k

  return binarySearch(leftK, rightK)

  function binarySearch(leftK, rightK) {
    if (rightK - leftK == 1) return false
    var midK = (leftK + rightK) / 2,
      midVal = Math.pow(3, midK)
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

console.log(isPowerOfThree(9))