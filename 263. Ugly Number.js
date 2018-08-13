/* Write a program to check whether a given number is an ugly number.

Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. 
For example, 6, 8 are ugly while 14 is not ugly since it includes another prime factor 7.

Note that 1 is typically treated as an ugly number. */

/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
  while (num % 2 == 0) num = num / 2
  while (num % 3 == 0) num = num / 3
  while (num % 5 == 0) num = num / 5
    // return num
  var primes = Array(num).fill(true)
  var count = 0
  for (var i = 2; i < num; i++) {
    if (primes[i]) {
      if (num % primes[i] == 0) return false
      count++
      for (var j = 2; i * j < num; j++) {
        primes[i * j] = false
      }
    }
  }
  return true
};


console.log(isUgly(214797179))