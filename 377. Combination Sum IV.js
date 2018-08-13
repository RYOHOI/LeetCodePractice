/* Given an integer array with all positive numbers and no duplicates, find the number of possible combinations that add up to a positive integer target.

Example:

nums = [1, 2, 3]
target = 4

The possible combination ways are:
(1, 1, 1, 1)
(1, 1, 2)
(1, 2, 1)
(1, 3)
(2, 1, 1)
(2, 2)
(3, 1)

Note that different sequences are counted as different combinations.

Therefore the output is 7.

Follow up:
What if negative numbers are allowed in the given array?
How does it change the problem?
What limitation we need to add to the question to allow negative numbers?  */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
  const dp = Array(target + 1).fill(-1)
  dp[0] = 1
  return explore(target)

  function explore(target) {
    if (dp[target] != -1) return dp[target]
    let res = 0
    for (let i = 0; i < nums.length; i++) {
      if (target >= nums[i])
        res += explore(target - nums[i])
    }
    dp[target] = res
    return res
  }
};

console.log(combinationSum4([2, 1, 3], 35))
  // console.log(combinationSum4([1, 2, 3], 4))