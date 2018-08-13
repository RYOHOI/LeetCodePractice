/* Given two sorted integer arrays nums1 and nums2, 
merge nums2 into nums1 as one sorted array.

Note:
You may assume that nums1 has enough space 
(size that is greater or equal to m + n) to hold additional elements from nums2. 
The number of elements initialized in nums1 and nums2 are m and n respectively. */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  var index = 0
  for (var j = 0; j < n; j++) {
    console.log('nums2[j]: ' + nums2[j] + '; nums1[index]: ' + nums1[index])
    console.log('nums1: ' + nums1)
    if (nums2[j] < nums1[index]) {
      nums1.splice(index, 0, nums2[j])
    } else if (nums2[j] >= nums1[index] && nums2[j] < nums1[index + 1]) {
      index++
      nums1.splice(index, 0, nums2[j])
      index++
    } else {
      while (nums2[j] > nums1[index] && nums1[index] != undefined) index++
        console.log('index: ' + index)
      if (nums1[index] == undefined) {
        nums1.splice(index, 0, nums2[j])
      }
    }
  }
  return nums1
};

console.log(merge([4, 6, 7, 8, 9], 5, [1, 2, 3], 3))