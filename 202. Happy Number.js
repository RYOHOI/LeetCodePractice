/* Write an algorithm to determine if a number is "happy".

A happy number is a number defined by the following process: 
Starting with any positive integer, 
replace the number by the sum of the squares of its digits, 
and repeat the process until the number equals 1 (where it will stay), 
or it loops endlessly in a cycle which does not include 1. 
Those numbers for which this process ends in 1 are happy numbers.

Example: 19 is a happy number

1 ** 2 + 9 ** 2 = 82
8 ** 2 + 2 ** 2 = 68
6 ** 2 + 8 ** 2 = 100
1 ** 2 + 0 ** 2 + 0 ** 2 = 1 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  function getDigits(num) {
    var digits = [],
      i = 0
    while (num > 0) {
      digits[i] = num % 10
      num = (num - digits[i]) / 10
      i++
    }
    return digits
  }

  function squareSum(nums) {
    var loops = nums.length,
      sum = 0
    for (var i = 0; i < loops; i++)
      sum += Math.pow(nums[i], 2)
    return sum
  }

  var result = squareSum(getDigits(n)),
    results = [],
    i = 0
  results[i] = result
  while (result != 1) {
    // console.log('result ' + result)
    var tmp = squareSum(getDigits(result))
    if (results.indexOf(tmp) != -1) return false
    else {
      result = tmp
      i++
      results[i] = result
    }
  }
  return true
};

var isHappy = function(n) {
  var cache = [4, 16, 37, 58, 89, 145, 42, 20]
  return isHappyNumber(n)

  function isHappyNumber(n) {
    var sum = 0
    while (n > 0) {
      sum += (n % 10) ** 2
        // console.log(n % 10)
      n = (n - n % 10) / 10
    }
    if (cache.indexOf(sum) != -1) {
      return false
    } else {
      if (sum == 1) return true
      else {
        return isHappyNumber(sum)
      }
    }
  }
}

console.log(isHappy(19))