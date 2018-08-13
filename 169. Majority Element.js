/* Given an array of size n, find the majority element. 
The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty 
and the majority element always exist in the array.

Boyer–Moore majority vote algorithm
- Initialize an element m and a counter i with i = 0
For each element x of the input sequence:
1. If i = 0, then assign m = x and i = 1
2. else if m = x, then assign i = i + 1
3. else assign i = i − 1
4. Return m
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  var loops = nums.length, currentNum, counter = 0
  for (var i = 0; i < loops; i++) {
    if (counter == 0) {
      currentNum = nums[i]
      counter = 1
    } else if (currentNum == nums[i]) counter++
    else counter--
  }
  return currentNum
};

console.log(majorityElement([3,3,4]))