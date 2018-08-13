/* Given a collection of distinct numbers, return all possible permutations.

For example,
[1,2,3] have the following permutations:

[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
] */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let res = []
  let tmp = []
  combine(tmp, nums)
  return res

  function combine(tmp, nums) {
    if (nums.length == 0) {
      res.push(tmp)
      return
    }
    for (let i = 0; i < nums.length; i++) {
      let tmp1 = tmp.slice()
      let nums1 = nums.slice()
      tmp1 = tmp1.concat(nums1.splice(i, 1))
      combine(tmp1, nums1)
    }
  }
};

console.log(permute([1, 2, 3, 4]))