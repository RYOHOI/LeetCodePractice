/* Given a positive integer num, write a function which returns True if num is a perfect square else False.

Note: Do not use any built-in library function such as sqrt.

Example 1:
Input: 16
Returns: True

Example 2:
Input: 14
Returns: False */

/* Newton's Method
f(x) = x ** 2 - num
f'(x) = 2x
x1= x0 - (x0 ** 2 - num) / 2x0 */

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  var tolerrance = 0.1,
    x = 3,
    diff = Math.abs(num - Math.pow(x, 2)),
    count = 0
  while (diff > tolerrance) {
    console.log(count++)
    x = x - (Math.pow(x, 2) - num) / (2 * x)
    diff = Math.abs(num - Math.pow(x, 2))
  }
  if (Math.pow(Math.round(x), 2) == num) return true
  else return false
};

console.log(isPerfectSquare(121))