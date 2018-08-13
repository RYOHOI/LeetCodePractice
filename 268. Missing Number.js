/* Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, 
find the one that is missing from the array.

For example,
Given nums = [0, 1, 3] return 2.

Note:
Your algorithm should run in linear runtime complexity. 
Could you implement it using only constant extra space complexity? */

/**
 * @param {number[]} nums
 * @return {number}
 */
/* var missingNumber = function(nums) {
  // array items are ordered one by one
  if (nums.length == 0) return 0
  if (nums[0] == 1) return 0
  var numsLength = nums.length
  if (nums[numsLength - 1] == numsLength - 1) return numsLength
  var leftIndex = 0,
    rightIndex = numsLength - 1,
    midIndex
  while ((rightIndex - leftIndex) > 1) {
    var midIndex = Math.floor((leftIndex + rightIndex) / 2)
    if (nums[midIndex] == midIndex) {
      leftIndex = midIndex
    } else if (nums[midIndex] > midIndex) {
      if (nums[midIndex - 1] == midIndex - 1) return midIndex
      rightIndex = midIndex
    }
  }
}; */

var missingNumber = function(nums) {
  var loops = nums.length
  var sumBefore = loops * (loops + 1) / 2
  var sumAfter = 0
  for (var i = 0; i < loops; i++) {
    sumAfter += nums[i]
  }
  return sumBefore - sumAfter
};

console.log(missingNumber([0, 1, 2, 4, 5, 6]))