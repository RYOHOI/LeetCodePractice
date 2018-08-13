// You are climbing a stair case. It takes n steps to reach to the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Note: Given n will be a positive integer.


// Example 1:

// Input: 2
// Output:  2
// Explanation:  There are two ways to climb to the top.

// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: 3
// Output:  3
// Explanation:  There are three ways to climb to the top.

// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  var loops = Math.floor(n / 2), sum = 0
  for (var count2 = 0; count2 <= loops; count2++) {
    sum += combo(count2, n - count2 * 2 + count2)
  }
  return sum
};

function factorial(n) {
  if (n == 0) return 1
  while (n >= 1) return n * factorial(n - 1)
}

function combo(count2, total) {
  var numarator = factorial(total)
  var denominator = factorial(total - count2) * factorial(count2)
  return numarator / denominator
}

console.log(climbStairs(2))