/* Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in place.

click to show follow up.
Follow up:

Did you use extra space?
A straight forward solution using O(mn) space is probably a bad idea.
A simple improvement uses O(m + n) space, but still not the best solution.
Could you devise a constant space solution?
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  var zeroIndex = []
  matrix.map(function(row, i) {
      row.map(function(it, j) {
        if (it == 0) zeroIndex.push([i, j])
      })
    })
    // return zeroIndex
  for (var i = 0; i < zeroIndex.length; i++) {
    zeroCross(zeroIndex[i][0], zeroIndex[i][1])
  }

  return matrix

  function zeroCross(rowNo, colNo) {
    for (var i = 0; i < matrix.length; i++) {
      matrix[i][colNo] = 0
    }
    for (var j = 0; j < matrix[0].length; j++) {
      matrix[rowNo][j] = 0
    }
  }
};

console.log(setZeroes(
  [
    [0, 1],
    [1, 1],
    [3, 3]
  ]))