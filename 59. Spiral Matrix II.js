/* Given an integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.

For example,
Given n = 3,
You should return the following matrix:

[
 [ 1, 2, 3 ],
 [ 8, 9, 4 ],
 [ 7, 6, 5 ]
]
 */

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  if (n == 0) return []
  var leftLimit = 0,
    rightLimit = n - 2,
    topLimit = 0,
    bottomLimit = n - 2,
    count = 1,
    matrix = []

  for (var i = 0; i < n; i++) {
    matrix[i] = Array(n).fill(0)
  }

  for (var i = 0; i < Math.floor(n / 2); i++) {
    getTopRow(i, i)
    getRightRow(i, n - 1 - i)
    getBottomRow(n - 1 - i, n - 1 - i)
    getLeftRow(n - 1 - i, i)
    leftLimit++
    topLimit++
    rightLimit--
    bottomLimit--
  }

  if (n % 2 == 1) matrix[Math.floor(n / 2)][Math.floor(n / 2)] = n ** 2

  return matrix

  function getTopRow(i, j) {
    for (var index = j; index <= rightLimit; index++) {
      matrix[i][index] = count++
    }
  }

  function getRightRow(i, j) {
    for (var index = i; index <= bottomLimit; index++) {
      matrix[index][j] = count++
    }
  }

  function getBottomRow(i, j) {
    for (var index = j; index > leftLimit; index--) {
      matrix[i][index] = count++
    }
  }

  function getLeftRow(i, j) {
    for (var index = i; index > topLimit; index--) {
      matrix[index][j] = count++
    }
  }
};

console.log(generateMatrix(5))