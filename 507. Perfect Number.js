/* We define the Perfect Number is a positive integer that is equal to the sum of all its positive divisors except itself.

Now, given an integer n, write a
function that returns true when it is a perfect number and false when it is not.
Example:
  Input: 28
Output: True
Explanation: 28 = 1 + 2 + 4 + 7 + 14
Note: The input number n will not exceed 100,000,000.(1e8) 

Euclid proved that: 2p−1(2p − 1) is perfect number, and probably there is no odd perfect number.*/

/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
  if (num % 10 % 2 == 1) return false
  var seed = 2
  while (perfectNumber(seed) < num) {
    // console.log(perfectNumber(seed))
    seed++
  }
  if (perfectNumber(seed) == num) return true
  else return false

  function perfectNumber(seed) {
    var p0 = seed - 1,
      p1 = seed
    return 2 ** p0 * (2 ** p1 - 1)
  }
};

console.log(checkPerfectNumber(496))