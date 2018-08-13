/* Given a non-empty array of integers, return the third maximum number in this array. If it does not exist, return the maximum number. The time complexity must be in O(n).

Example 1:
Input: [3, 2, 1]

Output: 1

Explanation: The third maximum is 1.
Example 2:
Input: [1, 2]

Output: 2

Explanation: The third maximum does not exist, so the maximum (2) is returned instead.
Example 3:
Input: [2, 2, 3, 1]

Output: 1

Explanation: Note that the third maximum here means the third maximum distinct number.
Both numbers with value 2 are both considered as second maximum. */

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  var topThree = [-Infinity, -Infinity, -Infinity]
  for (var i = 0; i < nums.length; i++) {
    topThree.push(nums[i])
    var max = topThree.reduce(function(a, b) {
      return Math.max(a, b);
    });
    var newTopThree = []
    newTopThree[0] = max
    while (topThree.indexOf(max) != -1 && max != -Infinity) {
      topThree.splice(topThree.indexOf(max), 1)
    }
    var max = topThree.reduce(function(a, b) {
      return Math.max(a, b);
    });
    newTopThree[1] = max
    while (topThree.indexOf(max) != -1 && max != -Infinity) {
      topThree.splice(topThree.indexOf(max), 1)
    }
    var max = topThree.reduce(function(a, b) {
      return Math.max(a, b);
    });
    newTopThree[2] = max
    topThree = newTopThree
  }
  if (topThree[topThree.length - 1] == -Infinity) {
    return topThree[0]
  } else {
    return topThree[2]
  }
};

console.log(thirdMax([1, 2]))