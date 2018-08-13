/* Given a 2D board containing 'X' and 'O' (the letter O), capture all regions surrounded by 'X'.

A region is captured by flipping all 'O's into 'X's in that surrounded region.

For example,
X X X X
X O O X
X X O X
X O X X
After running your function, the board should be:

X X X X
X X X X
X X X X
X O X X */

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

class UnionSet {
  constructor(size) {
    this.set = new Array(size).fill(-1)
  }

  find(x) {
    if (this.set[x] < 0) {
      return x
    } else {
      return this.find(this.set[x])
    }
  }

  // union by rank
  union(x, y) {
    let rootx = this.find(x)
    let rooty = this.find(y)
    if (rootx === rooty) return
    let depthx = -this.set[rootx]
    let depthy = -this.set[rooty]
    if (depthx === depthy) {
      this.set[rootx] = rooty
      this.set[rooty]--
    } else if (depthx > depthy) {
      this.set[rooty] = rootx
    } else {
      this.set[rootx] = rooty
    }
  }
}

var solve = function (board) {
  if (board.length == 0 || board[0].length == 0) return
  let rowCount = board.length
  let colCount = board[0].length
  let us = new UnionSet(rowCount * colCount + 1)
  for (let i = 0; i < rowCount; i++) {
    for (let j = 0; j < colCount; j++) {
      if (board[i][j] == 'O') {
        if (i == 0 || j == 0 || i == rowCount - 1 || j == colCount - 1) {
          us.union(rowCount * colCount, i * colCount + j)
        } else {
          if (board[i - 1][j] == 'O') {
            us.union(i * colCount + j, (i - 1) * colCount + j)
          }
          if (board[i + 1][j] == 'O') {
            us.union(i * colCount + j, (i + 1) * colCount + j)
          }
          if (board[i][j - 1] == 'O') {
            us.union(i * colCount + j, i * colCount + j - 1)
          }
          if (board[i][j + 1] == 'O') {
            us.union(i * colCount + j, i * colCount + j + 1)
          }
        }
      }
    }
  }
  for (let i = 0; i < rowCount; i++) {
    for (let j = 0; j < colCount; j++) {
      if (us.find(colCount * rowCount) !== us.find(i * colCount + j)) {
        board[i][j] = 'X'
      }
    }
  }
  // return board
};

let board = [
  ["O", "X", "X", "O", "X"],
  ["X", "O", "O", "X", "O"],
  ["X", "O", "X", "O", "X"],
  ["O", "X", "O", "O", "O"],
  ["X", "X", "O", "X", "O"]]
console.log(solve(board))