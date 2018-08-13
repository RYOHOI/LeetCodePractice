/* Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.

Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.

Example 1:
Input: [1, 2, 2, 3, 1]
Output: 2
Explanation: 
The input array has a degree of 2 because both elements 1 and 2 appear twice.
Of the subarrays that have the same degree:
[1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
The shortest length is 2. So return 2.
Example 2:
Input: [1,2,2,3,1,4,2]
Output: 6
Note:

nums.length will be between 1 and 50,000.
nums[i] will be an integer between 0 and 49,999. */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
  var m = new Map(),
    degree = 1,
    whichDegree = nums[0]
  for (var i = 0; i < nums.length; i++) {
    if (m.has(nums[i])) {
      var pos = m.get(nums[i])
      pos.push(i)
      if (pos.length > degree) {
        degree = pos.length
        whichDegree = nums[i]
      } else if (pos.length == degree && pos[pos.length - 1] - pos[0] < m.get(whichDegree)[m.get(whichDegree).length - 1] - m.get(whichDegree)[0]) {
        degree = pos.length
        whichDegree = nums[i]
      }
    } else m.set(nums[i], [i])
  }
  return m.get(whichDegree)[m.get(whichDegree).length - 1] - m.get(whichDegree)[0] + 1
};

console.log(findShortestSubArray([1, 2, 2, 3, 1]))