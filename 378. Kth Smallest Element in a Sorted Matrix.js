/* Given a n x n matrix where each of the rows and columns are sorted in ascending order, find the kth smallest element in the matrix.

Note that it is the kth smallest element in the sorted order, not the kth distinct element.

Example:

matrix = [
   [ 1,  5,  9],
   [10, 11, 13],
   [12, 13, 15]
],
k = 8,

return 13.

Note:
You may assume k is always valid, 1 ≤ k ≤ n2. */

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */

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

var kthSmallest = function(matrix, k) {
  let h = new PriorityQueue()
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      h.push(matrix[i][j])
    }
  }
  for (let i = 0; i < k - 1; i++) {
    h.pop()
  }
  return h.pop()
};