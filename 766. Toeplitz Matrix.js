/* A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same element.

Now given an M x N matrix, return True if and only if the matrix is Toeplitz.
 

Example 1:

Input: matrix = [[1,2,3,4],[5,1,2,3],[9,5,1,2]]
Output: True
Explanation:
1234
5123
9512

In the above grid, the diagonals are "[9]", "[5, 5]", "[1, 1, 1]", "[2, 2, 2]", "[3, 3]", "[4]", and in each diagonal all elements are the same, so the answer is True.
Example 2:

Input: matrix = [[1,2],[2,2]]
Output: False
Explanation:
The diagonal "[1, 2]" has different elements.
Note:

matrix will be a 2D array of integers.
matrix will have a number of rows and columns in range [1, 20].
matrix[i][j] will be integers in range [0, 99]. */

/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
  const rowCount = matrix.length
  const colCount = matrix[0].length

  for (var i = 0; i < colCount; i++) {
    if (!checkBranch(0, i)) return false
  }
  for (var i = 0; i < rowCount; i++) {
    if (!checkBranch(i, 0)) return false
  }
  return true

  function checkBranch(row, col) {
    for (var i = 0; ; i++) {
      if (row + i >= rowCount - 1 || col + i >= colCount - 1) {
        return true
      }
      if (matrix[row + i][col + i] !== matrix[row + i + 1][col + i + 1]) {
        return false
      }
    }
  }
}

console.log(isToeplitzMatrix([[2, 2], [2, 2]]))
