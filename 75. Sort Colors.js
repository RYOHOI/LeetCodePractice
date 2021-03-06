/* Given an array with n objects colored red, white or blue, sort them so that objects of the same color are adjacent, with the colors in the order red, white and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

Note:
You are not suppose to use the library's sort function for this problem.

click to show follow up.

Follow up:
A rather straight forward solution is a two-pass algorithm using counting sort.
First, iterate the array counting number of 0's, 1's, and 2's, then overwrite array with total number of 0's, then 1's and followed by 2's.

Could you come up with an one-pass algorithm using only constant space? */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let m = new Map()
  m.set(0, 0)
  m.set(1, 0)
  m.set(2, 0)
  for (let i = 0; i < nums.length; i++) {
    m.set(nums[i], m.get(nums[i]) + 1)
  }
  // return m
  for (let i = 0; i < m.get(0); i++) {
    nums[i] = 0
  }
  for (let i = m.get(0); i < m.get(1) + m.get(0); i++) {
    nums[i] = 1
  }
  for (let i = m.get(0) + m.get(1); i < m.get(1) + m.get(0) + m.get(2); i++) {
    nums[i] = 2
  }
  return nums
}
// two-pointer solution
function sortColors(nums) {
  let p01 = 0,
    p12 = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0 || nums[i] === 1) {
      nums[p12] = 1
      p12++
    }
    if (nums[i] === 0) {
      nums[p01] = 0
      p01++
    }
    nums[i] = 2
  }
}
console.log(sortColors([0, 1, 2, 0, 1, 2, 2, 1, 2, 1, 1, 1, 0, 0]))
