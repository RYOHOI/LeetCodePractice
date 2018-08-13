/* Given an array of integers and an integer k, 
find out whether there are two distinct indices i and j in the array 
such that nums[i] = nums[j] and the !!absolute difference between i and j is !!at most k. 
两个重复项, 它们在数组位置上的距离小于 K, 即 |i - j| < k
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  var uniqueChar = [],
    position = [],
    charIndex = 0
  for (var i = 0; i < nums.length; i++) {
    if (uniqueChar.indexOf(nums[i]) == -1) {
      uniqueChar.push(nums[i])
      position.push([i])
    } else {
      charIndex = uniqueChar.indexOf(nums[i])
      position[charIndex].push(i)
    }
  }
  for (var i = 0; i < position.length; i++) {
    if (position[i].length > 1)
      for (var j = 1; j < position[i].length; j++) {
        console.log(position[i][j] - position[i][j - 1])
        if ((position[i][j] - position[i][j - 1]) <= k) return true
      }
  }
  return false
};

console.log(containsNearbyDuplicate([-1, -1, 1, 2, 3, 2, 2, 1, -1], 1))