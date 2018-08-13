/* Given a set of distinct integers, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

For example,
If nums = [1,2,3], a solution is:

[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
] */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  let res = []
  res.push([]), res.push(nums)
  for (var i = 1; i < nums.length; i++) {
    explore(nums, [], i, 0)
  }
  return res

  function explore(candd, trace, quota, pointer) {
    if (quota == 0) res.push(trace.slice())
    for (let i = pointer; i < candd.length; i++) {
      trace.push(candd[i])
      explore(candd, trace, quota - 1, i + 1)
      trace.pop()
    }
  }
};

console.log(subsets([1, 2, 3]))