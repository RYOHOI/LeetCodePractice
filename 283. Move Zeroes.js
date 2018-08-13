/* Given an array nums, write a function to 
move all 0's to the end of it while maintaining the relative order of the non-zero elements.

For example, given nums = [0, 1, 0, 3, 12], 
after calling your function, nums should be [1, 3, 12, 0, 0].

Note:
You must do this in-place without making a copy of the array.
Minimize the total number of operations. */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  var countZero = 0,
    loops = nums.length
  for (var i = 0; i < loops; i++) {
    if (nums[i] == 0) {
      countZero++
    } else {
      nums[i - countZero] = nums[i]
      nums[i] = 0
    }
  }
  // return nums
};

console.log(moveZeroes([0, 1, 0, 0, 3, 12, 0, 4, 0, 0]))