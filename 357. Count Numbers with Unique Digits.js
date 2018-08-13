/* Given a non-negative integer n, count all numbers with unique digits, x, where 0 ≤ x < 10n.

Example:
Given n = 2, return 91. (The answer should be the total numbers in the range of 0 ≤ x < 100, excluding [11,22,33,44,55,66,77,88,99])  */

/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) {
  const fMap = {},
    uMap = { 0: 1, 1: 10 }
    // return factorial(10) + factorial(10) + factorial(10)
  if (n > 10) n = 10
  return helper(n)

  function helper(n) {
    if (uMap[n] != undefined) return uMap[n]
    else {
      uMap[n] = helper(n - 1) + permutation(9, n - 1) * 9
      return uMap[n]
    }
  }

  // order does matter
  function permutation(n, r) {
    if (n == r) return factorial(n)
    return factorial(n) / factorial(n - r)
  }

  // order doesn't matter
  function combination(n, r) {
    if (n == r) return 1
    return factorial(n) / factorial(n - r) / factorial(r)
  }

  function factorial(n) {
    if (n == 1 || n == 0) return 1
    else if (fMap[n] != undefined) return fMap[n]
    else {
      fMap[n] = n * factorial(n - 1)
      return fMap[n]
    }
  }
};

console.log(countNumbersWithUniqueDigits(7))
console.log(countNumbersWithUniqueDigits(6))
console.log(countNumbersWithUniqueDigits(5))
console.log(countNumbersWithUniqueDigits(4))
console.log(countNumbersWithUniqueDigits(3))
console.log(countNumbersWithUniqueDigits(2))

/* 8877691
8877691
5611771
2345851
712891
168571
32491
5275
739
91 */