/* Given a 2D matrix matrix, find the sum of the elements inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).

Range Sum Query 2D
The above rectangle (with the red border) is defined by (row1, col1) = (2, 1) and (row2, col2) = (4, 3), which contains sum = 8.

Example:

Given matrix = [
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5]
]

sumRegion(2, 1, 4, 3) -> 8
sumRegion(1, 1, 2, 2) -> 11
sumRegion(1, 2, 2, 4) -> 12

Note:

    You may assume that the matrix does not change.
    There are many calls to sumRegion function.
    You may assume that row1 ≤ row2 and col1 ≤ col2.
 */

/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
  if (matrix.length == 0 || matrix[0].length == 0) return
  this.queryTable = []
  for (var i = 0; i < matrix.length; i++) {
    this.queryTable.push([])
    for (var j = 0; j < matrix[0].length; j++) {
      this.queryTable[i].push(i == 0 ? matrix[i][j] : this.queryTable[i - 1][j] + matrix[i][j])
    }
  }
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 1; j < matrix[0].length; j++) {
      this.queryTable[i][j] = this.queryTable[i][j - 1] + this.queryTable[i][j]
    }
  }
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  if (row1 == 0 && col1 == 0) return this.queryTable[row2][col2]
  else if (row1 == 0) return this.queryTable[row2][col2] - this.queryTable[row2][col1 - 1]
  else if (col1 == 0) return this.queryTable[row2][col2] - this.queryTable[row1 - 1][col2]
  else return this.queryTable[row2][col2] - this.queryTable[row1 - 1][col1 - 1]
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = Object.create(NumMatrix).createNew(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */