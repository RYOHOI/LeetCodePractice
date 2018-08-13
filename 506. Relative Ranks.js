/* Given scores of N athletes, find their relative ranks and the people with the top three highest scores, who will be awarded medals: "Gold Medal", "Silver Medal"
and "Bronze Medal".

Example 1:
  Input: [5, 4, 3, 2, 1]
Output: ["Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"]
Explanation: The first three athletes got the top three highest scores, so they got "Gold Medal", "Silver Medal"
and "Bronze Medal".
For the left two athletes, you just need to output their relative ranks according to their scores.
Note:
  N is a positive integer and won 't exceed 10,000.
All the scores of athletes are guaranteed to be unique. */

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function(nums) {
  var numsSorted = Object.keys(nums).sort(function(a, b) {
    return nums[b] - nums[a]
  })
  nums[numsSorted[0]] = 'Gold Medal'
  nums[numsSorted[1]] = 'Silver Medal'
  nums[numsSorted[2]] = 'Bronze Medal'
  for (var i = 3; i < numsSorted.length; i++) {
    nums[numsSorted[i]] = i + 1
  }
  return nums
};

console.log(findRelativeRanks([5, 4, 3, 8, 2, 1, 6, 7]))