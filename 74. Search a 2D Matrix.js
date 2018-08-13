/* Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

    Integers in each row are sorted from left to right.
    The first integer of each row is greater than the last integer of the previous row.

For example,

Consider the following matrix:

[
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]

Given target = 3, return true. */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if (matrix.length == 0 || matrix[0].length == 0) return false
  var headCol = matrix.map(function(row) {
    return row[0]
  })
  var res = binarySearchRow(headCol)
  if (res != -1) {
    var rowNo = res
    return binarySearchCol(matrix[rowNo]) != -1
  } else return false

  function binarySearchRow(arr) {
    if (target < arr[0]) return -1
    if (target >= arr[0] && target < arr[1]) return 0
    if (target >= arr[arr.length - 1]) return arr.length - 1
    var left = 0,
      right = arr.length - 1,
      center
    while (true) {
      center = Math.floor((left + right) / 2)
      if (target >= arr[center] && target < arr[center + 1]) return center
      if (target < arr[center]) right = center
      else if (target >= arr[center + 1]) left = center
    }
  }

  function binarySearchCol(arr) {
    if (target == arr[0]) return 0
    if (target == arr[arr.length - 1]) return arr.length - 1
    var left = 0,
      right = arr.length - 1,
      center
    while (right - left > 1) {
      center = Math.floor((left + right) / 2)
      if (target == arr[center]) return center
      else if (target < arr[center]) right = center
      else left = center
    }
    return -1
  }
};

console.log(searchMatrix([
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
], 22))