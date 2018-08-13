/* Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.

Example:
Given a = 1 and b = 2, return 3. */

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
  var carry = a & b,
    result = a ^ b
  while (carry != 0) {
    var shiftedcarry = carry << 1
    carry = result & shiftedcarry
    result ^= shiftedcarry
  }
  return result
};

console.log(getSum(4, 6))