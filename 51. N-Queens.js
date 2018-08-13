/* The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.

Given an integer n, return all distinct solutions to the n-queens puzzle.

Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space respectively.

For example,
There exist two distinct solutions to the 4-queens puzzle:

[
 [".Q..",  // Solution 1
  "...Q",
  "Q...",
  "..Q."],

 ["..Q.",  // Solution 2
  "Q...",
  "...Q",
  ".Q.."]
] */

/**
 * @param {number} n
 * @return {string[][]}
 */


var solveNQueens = function(n) {
  class BoardVector {
    constructor(x, y) {
      this.x = x
      this.y = y
    }

    goUp() {
      if (this.y == 0) return false
      else {
        this.y = this.y - 1
        return true
      }
    }

    goDown() {
      if (this.y == n - 1) return false
      else {
        this.y = this.y + 1
        return true
      }
    }

    goLeft() {
      if (this.x == 0) return false
      else {
        this.x = this.x - 1
        return true
      }
    }

    goRight() {
      if (this.x == n - 1) return false
      else {
        this.x = this.x + 1
        return true
      }
    }

    goUpLeft() {
      return this.goLeft() && this.goUp()
    }

    goDownLeft() {
      return this.goLeft() && this.goDown()
    }

    goUpRight() {
      return this.goUp() && this.goRight()
    }

    goDownRight() {
      return this.goDown() && this.goRight()
    }
  }
  let board = Array(n).fill('o'.repeat(n))
    // return board
  let solution = []
  explore(board, 0)
  return solution.length

  function explore(board, rowNo) {
    if (rowNo == n) {
      solution.push(board.slice())
      return
      // ??
    }
    for (let i = 0; i < n; i++) {
      if (board[rowNo][i] != 'o') continue
      let boardCopy = board.slice()
      updateBoard(boardCopy, rowNo, i)
      explore(boardCopy, rowNo + 1)
    }
  }

  function updateBoard(board, rowNo, i) {
    updateRow(board, rowNo, i, 'Q')
    let v = new BoardVector(i, rowNo)
    let v1 = new BoardVector(i, rowNo)
    let v2 = new BoardVector(i, rowNo)
    let v3 = new BoardVector(i, rowNo)
    let v4 = new BoardVector(i, rowNo)
    let v5 = new BoardVector(i, rowNo)
    let v6 = new BoardVector(i, rowNo)
    let v7 = new BoardVector(i, rowNo)
    while (v.goUp()) {
      if (board[v.y][v.x] == 'o') updateRow(board, v.y, v.x, '.')
    }
    while (v1.goDown()) {
      if (board[v1.y][v1.x] == 'o') updateRow(board, v1.y, v1.x, '.')
    }
    while (v2.goLeft()) {
      if (board[v2.y][v2.x] == 'o') updateRow(board, v2.y, v2.x, '.')
    }
    while (v3.goRight()) {
      if (board[v3.y][v3.x] == 'o') updateRow(board, v3.y, v3.x, '.')
    }
    while (v4.goUpLeft()) {
      if (board[v4.y][v4.x] == 'o') updateRow(board, v4.y, v4.x, '.')
    }
    while (v5.goUpRight()) {
      if (board[v5.y][v5.x] == 'o') updateRow(board, v5.y, v5.x, '.')
    }
    while (v6.goDownLeft()) {
      if (board[v6.y][v6.x] == 'o') updateRow(board, v6.y, v6.x, '.')
    }
    while (v7.goDownRight()) {
      if (board[v7.y][v7.x] == 'o') updateRow(board, v7.y, v7.x, '.')
    }
  }

  function updateRow(board, rowNo, i, newChar) {
    let newRow = board[rowNo].split('')
    newRow[i] = newChar
    board.splice(rowNo, 1, newRow.join(''))
  }
};

console.log(solveNQueens(5))

// ********************************

var solveNQueens = function(n) {
  let board = new Array(n)
  for (let i = 0; i < n; i++) {
    board[i] = Array(n).fill('o')
  }
  // return board
  let res = []
  explore(board, 0)
    // return res
  for (let i = 0; i < res.length; i++) {
    for (let j = 0; j < n; j++) {
      res[i][j] = res[i][j].join('')
    }
  }
  return res

  function explore(board, rowNo) {
    if (rowNo == n) {
      res.push(board.slice())
      return
    }
    for (let i = 0; i < n; i++) {
      if (board[rowNo][i] != 'o') continue
      let boardCopy = []
      for (let i = 0; i < board.length; i++) {
        boardCopy[i] = board[i].slice()
      }
      updateBoard(boardCopy, rowNo, i)
      explore(boardCopy, rowNo + 1)
    }
  }

  function updateBoard(board, x, y) {
    for (let i = 0; i < n; i++) {
      board[i][y] = '.'
      board[x][i] = '.'
    }
    let i = 1
    while (true) {
      let flag = false
        // go topLeft
      if (x - i >= 0 && y - i >= 0) {
        board[x - i][y - i] = '.'
        flag = true
      }
      // go topRight
      if (x - i >= 0 && y + i < n) {
        board[x - i][y - i] = '.'
        flag = true
      }
      // go bottomLeft
      if (x + i < n && y - i >= 0) {
        board[x + i][y - i] = '.'
        flag = true
      }
      // go bottomRight
      if (x + i < n && y + i < n) {
        board[x + i][y + i] = '.'
        flag = true
      }
      i++
      if (!flag) break
    }
    board[x][y] = 'Q'
  }
}