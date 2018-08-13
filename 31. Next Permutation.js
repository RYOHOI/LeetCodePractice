/* Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).

The replacement must be in-place, do not allocate extra memory.

Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.
1,2,3 → 1,3,2
3,2,1 → 1,2,3
1,1,5 → 1,5,1 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  // 找到降序的开端
  let pivotIndex
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i - 1] >= nums[i]) continue
    else {
      pivotIndex = i
      break
    }
  }
  if (pivotIndex == 0) reverse(nums, 0, nums.length - 1)
  else if (pivotIndex == undefined) swap(nums, nums.length - 2, nums.length - 1)
  else {
    let larger = nums[pivotIndex]
    let largerIndex = pivotIndex
    let diff = larger - nums[pivotIndex - 1]
    for (let i = pivotIndex + 1; i < nums.length; i++) {
      if (nums[i] <= nums[pivotIndex - 1]) break
      if (nums[i] - nums[pivotIndex - 1] < diff) {
        larger = nums[i]
        largerIndex = i
      }
    }
    swap(nums, largerIndex, pivotIndex - 1)
    bubbleSort(nums, pivotIndex, nums.length - 1)
  }
  return nums

  function bubbleSort(nums, start, end) {
    let count = 0
    for (let i = start; i <= end - 1; i++) {
      for (let j = start; j < end - count; j++) {
        if (nums[j] > nums[j + 1]) swap(nums, j, j + 1)
      }
      count++
    }
  }

  function reverse(nums, start, end) {
    // [4,5,6,7] -> [7,6,5,4], loops == 2
    if (start == end) return
    else {
      let loops = Math.round((end - start) / 2)
      for (let i = 0; i < loops; i++)
        swap(nums, start + i, end - i)
    }
  }

  function swap(nums, i, j) {
    let tmp = nums[i]
    nums[i] = nums[j]
    nums[j] = tmp
  }
};

/* var nextPermutation = function(nums) {
  // var orig = nums.slice();
  var len = nums.length - 1;
  var i = len;
  while (i > 0 && nums[i] <= nums[i - 1]) {
    i--; // stops i at peak
  }

  var j = len;
  if (i === 0) {
    while (i < j) {
      temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      i++;
      j--;
    }
    return;
  }

  while (nums[j] <= nums[i - 1]) {
    j--;
  }

  var temp = nums[i - 1];
  nums[i - 1] = nums[j];
  nums[j] = temp;
  j = len;
  while (i < j) {
    temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
    i++;
    j--;
  }
}; */


console.log(nextPermutation([2, 3, 1, 3, 3, 0, 0]))
console.log(nextPermutation([4, 2, 6, 5, 4, 3, 1, 0]))