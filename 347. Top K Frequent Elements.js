/* Given a non-empty array of integers, return the k most frequent elements.

For example,
Given [1,1,1,2,2,3] and k = 2, return [1,2].

Note:

    You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
    Your algorithm's time complexity must be better than O(n log n), where n is the array's size. */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  let m = {}
  nums.forEach(it => {
    if (m[it] == undefined) m[it] = 1
    else m[it]++
  })
  let pairs = Object.entries(m)
  buildMaxHeap(pairs)
  for (let i = 0; i < k; i++) {
    swap(pairs, 0, pairs.length - 1 - i)
    siftDown(pairs, 0, pairs.length - 2 - i)
  }
  let topPairs = pairs.slice(pairs.length - k, pairs.length)
    // return topPairs
  return topPairs.map(it => +(it[0]))
};

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
  if (leftIdx <= end && arr[leftIdx][1] > arr[maxIdx][1]) {
    maxIdx = leftIdx
  }
  if (rightIdx <= end && arr[rightIdx][1] > arr[maxIdx][1]) {
    maxIdx = rightIdx
  }
  if (maxIdx != start) {
    swap(arr, start, maxIdx)
    siftDown(arr, maxIdx, end)
  }
  return arr
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5], 3))