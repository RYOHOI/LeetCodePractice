/* Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

Note:

The length of both num1 and num2 is < 5100.
Both num1 and num2 contains only digits 0-9.
Both num1 and num2 does not contain any leading zero.
You must not use any built-in BigInteger library or convert the inputs to integer directly. */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  var sum = []
  if (num1.length >= num2.length) {
    var s1 = num1
    var s2 = num2
  } else {
    var s1 = num2
    var s2 = num1
  }
  var carryFlag = false
  for (var i = 1; i <= s1.length; i++) {
    var digit1 = +(s1[s1.length - i])
    if (s2[s2.length - i] == undefined) {
      var digit2 = 0
    } else {
      var digit2 = +(s2[s2.length - i])
    }
    var digitSum = digit1 + digit2 + carryFlag
    carryFlag = !(digitSum % 10 == digitSum)
    if (carryFlag) {
      sum.unshift(digitSum - 10)
    } else {
      sum.unshift(digitSum)
    }
  }
  if (carryFlag) {
    sum.unshift(1)
  }
  return sum.join('')
};

console.log(addStrings('9998999999', '112'))