/* Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

For example,
Given the following matrix:

[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]

You should return [1,2,3,6,9,8,7,4,5].
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if (matrix.length == 0) return []
  if (matrix.length == 1 && matrix[0].length == 1) return matrix[0]
  var leftLimit = 0,
    rightLimit = matrix[0].length - 2,
    topLimit = 0,
    bottomLimit = matrix.length - 2
  res = []

  for (var i = 0; i < Math.floor(Math.min(matrix[0].length, matrix.length) / 2); i++) {
    getTopRow(i, i)
    getRightRow(i, matrix[0].length - 1 - i)
    getBottomRow(matrix.length - 1 - i, matrix[0].length - 1 - i)
    getLeftRow(matrix.length - 1 - i, i)
    leftLimit++
    topLimit++
    rightLimit--
    bottomLimit--
  }

  if (matrix.length > matrix[0].length && matrix[0].length % 2 == 1) {
    bottomLimit++
    getRightRow(i, matrix[0].length - 1 - i)
  }

  if (matrix.length < matrix[0].length && matrix.length % 2 == 1) {
    rightLimit++
    getTopRow(i, i)
  }

  if (matrix.length == matrix[0].length && matrix.length % 2 == 1) {
    res.push(matrix[i][i])
  }

  return res

  function getTopRow(i, j) {
    for (var index = j; index <= rightLimit; index++) {
      res.push(matrix[i][index])
    }
  }

  function getRightRow(i, j) {
    for (var index = i; index <= bottomLimit; index++) {
      res.push(matrix[index][j])
    }
  }

  function getBottomRow(i, j) {
    for (var index = j; index > leftLimit; index--) {
      res.push(matrix[i][index])
    }
  }

  function getLeftRow(i, j) {
    for (var index = i; index > topLimit; index--) {
      res.push(matrix[index][j])
    }
  }
};

console.log(spiralOrder(
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]
))