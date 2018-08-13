/* Given a collection of candidate numbers (C) and a target number (T), find all unique combinations in C where the candidate numbers sums to T.

Each number in C may only be used once in the combination.

Note:

    All numbers (including target) will be positive integers.
    The solution set must not contain duplicate combinations.

For example, given candidate set [10, 1, 2, 7, 6, 1, 5] and target 8,
A solution set is:

[
  [1, 7],
  [1, 2, 5],
  [2, 6],
  [1, 1, 6]
] */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  let res = []
  candidates.sort((a, b) => a - b)
  explore([], target, 0)
  return res

  function explore(trace, target, divider) {
    if (target == 0) {
      res.push(trace.slice())
      return
    } else if (target < 0) return true
    for (let i = divider; i < candidates.length; i++) {
      if (i != divider && candidates[i] == candidates[i - 1]) continue
      trace.push(candidates[i])
      let breakOrNot = explore(trace, target - candidates[i], i + 1)
      trace.pop()
      if (breakOrNot) break
    }
    // return true
  }
};

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8))