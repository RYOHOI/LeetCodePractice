/* Given a collection of numbers that might contain duplicates, return all possible unique permutations.

For example,
[1,1,2] have the following unique permutations:

[
  [1,1,2],
  [1,2,1],
  [2,1,1]
] */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  let res = []
  let trace = []
  explore(trace, nums)
  return res

  function explore(trace, nums) {
    if (nums.length == 0) {
      res.push(trace)
      return
    }
    let heads = []
    for (let i = 0; i < nums.length; i++) {
      if (heads.indexOf(nums[i]) == -1) {
        let traceCopy = trace.slice()
        let numsCopy = nums.slice()
        heads.push(nums[i])
        traceCopy.push(numsCopy.splice(i, 1)[0])
        explore(traceCopy, numsCopy)
      }
    }
  }
};

console.log(permuteUnique([1, 1, 2, 3, 5]))