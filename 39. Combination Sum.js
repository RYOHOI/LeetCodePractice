/* Given a set of candidate numbers (C) (without duplicates) and a target number (T), find all unique combinations in C where the candidate numbers sums to T.

The same repeated number may be chosen from C unlimited number of times.

Note:

    All numbers (including target) will be positive integers.
    The solution set must not contain duplicate combinations.

For example, given candidate set [2, 3, 6, 7] and target 7,
A solution set is:

[
  [7],
  [2, 2, 3]
] */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  let res = []
  candidates.sort((a, b) => a - b)
  explore([], target, 0)
  return res

  function explore(trace, target, divider) {
    if (target == 0) {
      /* for (let i = 0; i < res.length; i++) {
        if (res[i].length == trace.length) {
          let j
          let opponent = res[i].slice()
          for (j = 0; j < trace.length; j++) {
            if (opponent.indexOf(trace[j]) != -1) {
              opponent.splice(opponent.indexOf(trace[j]), 1)
            } else break
          }
          if (opponent.length == 0) return
        }
      } */
      res.push(trace)
      return
    } else if (target < 0) return
    for (let i = divider; i < candidates.length; i++) {
      let traceCopy = trace.slice()
      traceCopy.push(candidates[i])
      explore(traceCopy, target - candidates[i], i)
    }
  }
};

console.log(combinationSum([2, 3, 7], 18))