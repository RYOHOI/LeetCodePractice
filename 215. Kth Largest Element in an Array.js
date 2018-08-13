/* Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

For example,
Given [3,2,1,5,6,4] and k = 2, return 5.

Note:
You may assume k is always valid, 1 ≤ k ≤ array's length. */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  buildMaxHeap(nums)
  for (let i = 0; i < k; i++) {
    swap(nums, 0, nums.length - 1 - i)
    siftDown(nums, 0, nums.length - 2 - i)
  }
  return nums[nums.length - k]

  function swap(arr, a, b) {
    let tmp = arr[a]
    arr[a] = arr[b]
    arr[b] = tmp
  }

  function buildMaxHeap(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
      siftDown(arr, i)
    }
    return arr
  }

  function siftDown(arr, start, end = arr.length - 1) {
    if (start >= end) return
    let leftIdx = start * 2 + 1,
      rightIdx = start * 2 + 2,
      maxIdx = start
    if (leftIdx <= end && arr[leftIdx] > arr[maxIdx]) {
      maxIdx = leftIdx
    }
    if (rightIdx <= end && arr[rightIdx] > arr[maxIdx]) {
      maxIdx = rightIdx
    }
    if (maxIdx != start) {
      swap(arr, start, maxIdx)
      siftDown(arr, maxIdx, end)
    }
    return arr
  }
};

console.log(findKthLargest([5, 1, 6, 3, 2, 7, 4, 8, 9, 0], 2))