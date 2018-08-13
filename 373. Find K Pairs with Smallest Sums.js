/* You are given two integer arrays nums1 and nums2 sorted in ascending order and an integer k.

Define a pair (u,v) which consists of one element from the first array and one element from the second array.

Find the k pairs (u1,v1),(u2,v2) ...(uk,vk) with the smallest sums.

Example 1:

Given nums1 = [1,7,11], nums2 = [2,4,6],  k = 3

Return: [1,2],[1,4],[1,6]

The first 3 pairs are returned from the sequence:
[1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]

Example 2:

Given nums1 = [1,1,2], nums2 = [1,2,3],  k = 2

Return: [1,1],[1,1]

The first 2 pairs are returned from the sequence:
[1,1],[1,1],[1,2],[2,1],[1,2],[2,2],[1,3],[1,3],[2,3]

Example 3:

Given nums1 = [1,2], nums2 = [3],  k = 3 

Return: [1,3],[2,3]

All possible pairs are returned from the sequence:
[1,3],[2,3]
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
  let combo = []
  nums1.forEach(it1 => {
    nums2.forEach(it2 => {
      combo.push([it1, it2])
    })
  })
  buildMinHeap(combo)
  let kLimit = nums1.length * nums2.length
  if (k > kLimit) k = kLimit
  for (let i = 0; i < k; i++) {
    swap(combo, 0, combo.length - 1 - i)
    siftDown(combo, 0, combo.length - 2 - i)
  }
  return combo.slice(combo.length - k, combo.length).reverse()
};

console.log(kSmallestPairs([1, 4, 8, 13], [21, 32, 45, 60, 80], 4))


function swap(arr, a, b) {
  let tmp = arr[a]
  arr[a] = arr[b]
  arr[b] = tmp
}

function buildMinHeap(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    siftDown(arr, i)
  }
  // return arr
}

function siftDown(arr, start, end = arr.length - 1) {
  if (start >= end) return
  let leftIdx = start * 2 + 1,
    rightIdx = start * 2 + 2,
    minIdx = start
  if (leftIdx <= end && arr[leftIdx][1] + arr[leftIdx][0] < arr[minIdx][1] + arr[minIdx][0]) {
    minIdx = leftIdx
  }
  if (rightIdx <= end && arr[rightIdx][1] + arr[rightIdx][0] < arr[minIdx][1] + arr[minIdx][0]) {
    minIdx = rightIdx
  }
  if (minIdx != start) {
    swap(arr, start, minIdx)
    siftDown(arr, minIdx, end)
  }
  // return arr
}

// *****************************************************
// Solution 2
// *****************************************************
class PriorityQueue {
  constructor(comparator = (a, b) => a - b) {
    this.arr = []
    this._comparator = comparator
  }

  push(ele) {
    this.arr.push(ele)
    let p = this.arr.length - 1
    while (p > 0 && this._comparator(this.arr[p], this.arr[this._parentIdx(p)]) < 0) {
      this._swap(p, this._parentIdx(p))
      p = this._parentIdx(p)
    }
  }

  pop() {
    let top = this.arr[0]
    if (this.arr.length <= 1) return top
    this.arr[0] = this.arr.pop()
    this.siftDown(0)
    return top
  }

  top() {
    return this.arr[0]
  }

  siftDown(p) {
    while (true) {
      let minIdx = p
      let leftIdx = this._leftIdx(p)
      let rightIdx = this._rightIdx(p)
      if (leftIdx <= this.arr.length - 1 && this._comparator(this.arr[leftIdx], this.arr[minIdx]) < 0) {
        minIdx = leftIdx
      }
      if (rightIdx <= this.arr.length - 1 && this._comparator(this.arr[rightIdx], this.arr[minIdx]) < 0) {
        minIdx = rightIdx
      }
      if (minIdx != p) {
        this._swap(p, minIdx)
        p = minIdx
      } else break
    }
  }

  _parentIdx(p) {
    return Math.floor((p - 1) / 2)
  }

  _leftIdx(p) {
    return p * 2 + 1
  }

  _rightIdx(p) {
    return p * 2 + 2
  }

  _swap(a, b) {
    let tmp = this.arr[a]
    this.arr[a] = this.arr[b]
    this.arr[b] = tmp
  }

  _show() {
    return this.arr
  }
}

var kSmallestPairs = function(nums1, nums2, k) {
  let h = new PriorityQueue((pairA, pairB) => (pairA[0] + pairA[1]) - (pairB[0] + pairB[1]))
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      h.push([nums1[i], nums2[j]])
    }
  }
  if (k > nums1.length * nums2.length) k = nums1.length * nums2.length
  let res = []
  for (let i = 0; i < k; i++) {
    res.push(h.pop())
  }
  return res
};


console.log(kSmallestPairs([1, 4, 8, 13], [21, 32, 45, 60, 80], 4))