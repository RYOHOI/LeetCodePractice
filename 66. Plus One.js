// Given a non-negative integer represented as a non-empty array of digits, plus one to the integer.

// You may assume the integer do not contain any leading zero, except the number 0 itself.

// The digits are stored such that the most significant digit is at the head of the list.

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  var index = digits.length - 1
  if (digits[index] < 9) {
    digits[index] = digits[index] + 1
    return digits
  }
  while (index >= 0) {
    digits[index] = 0
    index--
    if (digits[index] < 9) {
      digits[index] = digits[index] + 1
      return digits
    }
  }
  digits.unshift(1)
  return digits
};

console.log(plusOne([0]))