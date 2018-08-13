/* Given two arrays, write a function to compute their intersection.

Example:
Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].

Note:
Each element in the result must be unique.
The result can be in any order. */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  var result = []
  for (var i = 0; i < nums1.length; i++) {
    var item = nums1[i]
    if (nums2.includes(item)) {
      result.push(item)
      nums2.pop
    }
  }
  return result
};

console.log(intersection([21, 1, 22, 12, 21, 4, 5], [21, 22, 1, 43, 2, 3]))