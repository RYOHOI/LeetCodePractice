/* Description:
Count the number of prime numbers less than a non-negative number, n. 

for example:
prime numbers less than 11:
2, 3, 5, 7
your program should return 4

1112331 -> 86625
*/

/**
 * @param {number} n
 * @return {number}
 */
/* var countPrimes = function(n) {
  // init
  var isPrimes = []
  for (var i = 2; i < n; i++) {
    isPrimes[i] = true
  }

  // markoff composite
  for (var i = 2; i * i < n; i++) {
    if (!isPrimes[i]) continue
      // get a prime, markoff it's squre and squre + k * prime
    for (var j = i * i; j < n; j += i) {
      isPrimes[j] = false
    }
  }

  // analyze the result array
  var count = 0
  for (var i = 2; i < n; i++) {
    if (isPrimes[i]) count++
  }
  return count
}; */

var countPrimes = function(n) {
  var primes = Array(n).fill(true),
    count = 0
  for (var i = 2; i < n; i++) {
    if (primes[i]) {
      count++
      for (var j = 2; j * i < n; j++) {
        primes[j * i] = false
      }
    }
  }
  return count
}
console.log(countPrimes(1000))