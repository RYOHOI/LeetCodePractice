/* Find all possible combinations of k numbers that add up to a number n, given that only numbers from 1 to 9 can be used and each combination should be a unique set of numbers.

Example 1:
Input: k = 3, n = 7
Output:
  [
    [1, 2, 4]
  ]

Example 2:
Input: k = 3, n = 9
Output:

  [
    [1, 2, 6],
    [1, 3, 5],
    [2, 3, 4]
  ] */

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
const candidates = []
for (let i = 0; i < 9; i++) candidates[i] = i + 1

var combinationSum3 = function(k, n, trace = [], res = [], pointer = 0) {
  if (k == 0) {
    if (n == 0) res.push(trace.slice())
    else return
  } else {
    if (n <= 0) return -1
  }
  for (let i = pointer; i < candidates.length; i++) {
    trace.push(candidates[i])
    let breakOrNot = combinationSum3(k - 1, n - candidates[i], trace, res, i + 1)
    trace.pop()
    if (breakOrNot === -1) break
  }
  return res
};

console.log(combinationSum3(3, 9))