/* We define a harmonious array is an array where the difference between its maximum value and its minimum value is exactly 1.

Now, given an integer array, you need to find the length of its longest harmonious subsequence among all its possible subsequences.

Example 1:
  Input: [1, 3, 2, 2, 5, 2, 3, 7]
Output: 5
Explanation: The longest harmonious subsequence is[3, 2, 2, 2, 3].
Note: The length of the input array will not exceed 20, 000. */

/**
 * @param {number[]} nums
 * @return {number}
 */
/* var findLHS = function(nums) {
  var m = {}
  for (var i = 0; i < nums.length; i++) {
    if (!m[nums[i]]) m[nums[i]] = 1
    else m[nums[i]]++
  }
  var sortedKey = Object.keys(m).sort(function(a, b) {
    return a - b
  })
  var diff = 0
  for (var i = 0; i < sortedKey.length - 1; i++) {
    if (sortedKey[i + 1] - sortedKey[i] == 1) {
      var sum = m[sortedKey[i + 1]] + m[sortedKey[i]]
      if (sum > diff) diff = sum
    }
  }
  return diff
}; */

var findLHS = function(nums) {
  var map = new Map()
  for (var num of nums) {
    map.set(num, (map.has(num) ? map.get(num) : 0) + 1)
  }
  var max = 0
  for (var key of map.keys()) {
    // console.log(map.get(key))
    if (map.has(key - 1)) {
      max = Math.max(max, map.get(key) + map.get(key - 1))
    }
  }
  return max
}
console.log(findLHS([1, 3, 2, 2, 5, 2, 3, 7]))