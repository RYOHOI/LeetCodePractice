/* Given an integer, write a function to determine if it is a power of two. */

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  if (n <= 0) return false
  if (n == 1 || n == 2) return true
  var k = 1
  while (n > Math.pow(2, k)) k *= 2
  if (n == Math.pow(2, k)) return true
  var leftK = k / 2,
    rightK = k

  return binarySearch(leftK, rightK)

  function binarySearch(leftK, rightK) {
    if (rightK - leftK == 1) return false
    var midK = (leftK + rightK) / 2,
      midVal = Math.pow(2, midK)
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
}

console.log(isPowerOfTwo(0))