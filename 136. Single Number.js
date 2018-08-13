/* Given an array of integers, 
every element appears twice (only) except for one. Find that single one.

Note:
Your algorithm should have a linear runtime complexity. 
Could you implement it without using extra memory? */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  var loops = nums.length, result = nums[0]
  for (var i = 1; i < loops; i++) {
    result ^= nums[i]
  }
  return result
};

console.log(singleNumber([1]))