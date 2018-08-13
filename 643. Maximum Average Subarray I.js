/* Given an array consisting of n integers, find the contiguous subarray of given length k that has the maximum average value. And you need to output the maximum average value.

Example 1:
Input: [1,12,-5,-6,50,3], k = 4
Output: 12.75
Explanation: Maximum average is (12-5-6+50)/4 = 51/4 = 12.75
Note:
1 <= k <= n <= 30,000.
Elements of the given array will be in the range [-10,000, 10,000]. */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
/* var findMaxAverage = function(nums, k) {
  var maxSum = -Infinity,
    currentSum = 0
  for (var i = 0; i <= nums.length - k; i++) {
    currentSum = sum(nums.slice(i, i + k - 1))
    maxSum = Math.max(maxSum, currentSum)
  }
  return maxSum / k

  function sum(arr) {
    var sum = 0
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i]
    }
    return sum
  }
}; */

var findMaxAverage = function(nums, k) {
  var sum = 0
  for (var i = 0; i < k; i++) {
    sum += nums[i]
  }
  var maxSum = sum
  for (var i = k; i < nums.length; i++) {
    sum = sum - nums[i - k] + nums[i]
    maxSum = Math.max(sum, maxSum)
  }
  return maxSum / k
}

/* var findMaxAverage = function(nums, k) {
  let sum = 0;
  for (let i = 0; i < k; i++) {
      sum += nums[i];    
  }
  
  let result = sum;
  
  for (let i = k; i < nums.length; i++) {
      sum = sum + nums[i] - nums[i - k];
      result = Math.max(sum, result);
  }   
  
  return result / k;
}; */