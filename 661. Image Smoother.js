/* Given a 2D integer matrix M representing the gray scale of an image, you need to design a smoother to make the gray scale of each cell becomes the average gray scale (rounding down) of all the 8 surrounding cells and itself. If a cell has less than 8 surrounding cells, then use as many as you can.

Example 1:
Input:
[[1,1,1],
 [1,0,1],
 [1,1,1]]
Output:
[[0, 0, 0],
 [0, 0, 0],
 [0, 0, 0]]
Explanation:
For the point (0,0), (0,2), (2,0), (2,2): floor(3/4) = floor(0.75) = 0
For the point (0,1), (1,0), (1,2), (2,1): floor(5/6) = floor(0.83333333) = 0
For the point (1,1): floor(8/9) = floor(0.88888889) = 0
Note:
The value in the given matrix is in the range of [0, 255].
The length and width of the given matrix are in the range of [1, 150]. */

/**
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function(M) {
  var M2 = []
  for (var rowIndex = 0; rowIndex < M.length; rowIndex++) {
    var eachRow = []
    for (var colIndex = 0; colIndex < M[0].length; colIndex++) {
      var i1 = rowIndex - 1,
        i2 = rowIndex + 1
      var j1 = colIndex - 1,
        j2 = colIndex + 1
      if (i1 < 0) i1 = 0
      if (i2 > M.length - 1) i2 = M.length - 1
      if (j1 < 0) j1 = 0
      if (j2 > M[0].length - 1) j2 = M[0].length - 1
      var sumOfAround = 0
      for (var i = i1; i <= i2; i++) {
        for (var j = j1; j <= j2; j++) {
          sumOfAround += M[i][j]
        }
      }
      eachRow.push(Math.floor(sumOfAround / (i2 - i1 + 1) / (j2 - j1 + 1)))
    }
    M2.push(eachRow)
  }
  return M2
}

var imageSmoother = function(M) {
  return M.map(function(row, rowIndex) {
    return row.map(function(item, colIndex) {
      var i1 = rowIndex - 1,
        i2 = rowIndex + 1
      var j1 = colIndex - 1,
        j2 = colIndex + 1
      if (i1 < 0) i1 = 0
      if (i2 > M.length - 1) i2 = M.length - 1
      if (j1 < 0) j1 = 0
      if (j2 > M[0].length - 1) j2 = M[0].length - 1
      var sumOfAround = 0
      for (var i = i1; i <= i2; i++) {
        for (var j = j1; j <= j2; j++) {
          sumOfAround += M[i][j]
        }
      }
      return sumOfAround
    })
  })
}

console.log(imageSmoother([
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1]
]))