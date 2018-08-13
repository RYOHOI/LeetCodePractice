/* Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

    Integers in each row are sorted in ascending from left to right.
    Integers in each column are sorted in ascending from top to bottom.

For example,

Consider the following matrix:

[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]

Given target = 5, return true.

Given target = 20, return false. */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  // if pointer strays outside the array, return false
  // set bottom-left corner as starting point
  var i = matrix.length - 1,
    j = 0
  while (true) {
    if (i < 0 || j > matrix[0].length - 1 || j < 0 || i > matrix.length - 1) break
    var it = matrix[i][j]
    if (target > it) {
      j++
    } else if (target < it) {
      i--
    } else return true
  }
  return false
};

console.log(searchMatrix([
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
], 27))