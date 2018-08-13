/* Given a collection of integers that might contain duplicates, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

For example,
If nums = [1,2,2], a solution is:

[
  [2],
  [1],
  [1,2,2],
  [2,2],
  [1,2],
  []
] */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  nums.sort((a, b) => a - b)
  let res = []
  res.push([]), res.push(nums)
  for (var i = 1; i < nums.length; i++) {
    explore(nums, [], i, 0)
  }
  return res

  function explore(candd, trace, quota, pointer) {
    if (quota == 0) res.push(trace.slice())
    for (let i = pointer; i < candd.length; i++) {
      if (i > pointer && candd[i] == candd[i - 1]) continue
      trace.push(candd[i])
      explore(candd, trace, quota - 1, i + 1)
      trace.pop()
    }
  }
};

console.log(subsetsWithDup([1, 2, 2]))