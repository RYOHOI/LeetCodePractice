/* Given an integer array, you need to find one continuous subarray that
if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order, too.

You need to find the shortest such subarray and output its length.

Example 1:
  Input: [2, 6, 4, 8, 10, 9, 15]
Output: 5
Explanation: You need to sort[6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.
Note:
  Then length of the input array is in range[1, 10, 000].
The input array may contain duplicates, so ascending order here means <= . */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
  var numsCopy = nums.slice()
  var numsSorted = nums.sort(function(a, b) {
      return a - b
    })
    // console.log(numsSorted, numsCopy)
  var leftIndex = 0,
    rightIndex = nums.length
  for (var i = 0; i < nums.length; i++) {
    if (numsCopy[i] == numsSorted[i]) {
      leftIndex++
    } else break
  }
  for (var i = nums.length - 1; i >= 0; i--) {
    if (numsCopy[i] == numsSorted[i]) {
      rightIndex = i
    } else break
  }
  // console.log('rightIndex', rightIndex, 'leftIndex', leftIndex)
  return rightIndex - leftIndex
};

console.log(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]))
console.log(findUnsortedSubarray([2, 6, 4, 8, 1, 16, 10, 9, 15]))