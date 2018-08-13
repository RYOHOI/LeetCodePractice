/* According to the Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

Given a board with m by n cells, each cell has an initial state live (1) or dead (0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

    Any live cell with fewer than two live neighbors dies, as if caused by under-population.
    Any live cell with two or three live neighbors lives on to the next generation.
    Any live cell with more than three live neighbors dies, as if by over-population..
    Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

Write a function to compute the next state (after one update) of the board given its current state.

Follow up:

    Could you solve it in-place? Remember that the board needs to be updated at the same time: You cannot update some cells first and then use their updated values to update other cells.
    In this question, we represent the board using a 2D array. In principle, the board is infinite, which would cause problems when the active area encroaches the border of the array. How would you address these problems?

Credits:
Special thanks to @jianchao.li.fighter for adding this problem and creating all test cases. */

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
  var live = [],
    death = []
  board.map(function(row, rowNo) {
    row.map(function(_, colNo) {
      var count = countLiveNeighbor(rowNo, colNo)
      if (board[rowNo][colNo] == 0) {
        if (count == 3) live.push([rowNo, colNo])
      } else {
        if (count < 2 || count > 3) death.push([rowNo, colNo])
      }
    })
  })

  // return death

  for (var i = 0; i < live.length; i++) {
    board[live[i][0]][live[i][1]] = 1
  }

  for (var i = 0; i < death.length; i++) {
    board[death[i][0]][death[i][1]] = 0
  }

  return board

  function countLiveNeighbor(i, j) {
    var count = 0,
      fromRow, toRow, fromCol, toCol
    if (i == 0) {
      fromRow = i
      if (i + 1 < board.length) toRow = i + 1
      else toRow = i
    } else if (i == board.length - 1) {
      if (i - 1 >= 0) fromRow = i - 1
      else fromRow = i
      toRow = i
    } else {
      if (i - 1 >= 0) fromRow = i - 1
      else fromRow = i
      if (i + 1 < board.length) toRow = i + 1
      else toRow = i
    }
    if (j == 0) {
      fromCol = j
      if (j + 1 < board[0].length) toCol = j + 1
      else toCol = j
    } else if (j == board[0].length - 1) {
      if (j - 1 >= 0) fromCol = j - 1
      else fromCol = j
      toCol = j
    } else {
      if (j - 1 >= 0) fromCol = j - 1
      else fromCol = j
      if (j + 1 < board[0].length) toCol = j + 1
      else toCol = j
    }
    for (var rowNo = fromRow; rowNo <= toRow; rowNo++) {
      for (var colNo = fromCol; colNo <= toCol; colNo++) {
        if (board[rowNo][colNo] == 1) count++
      }
    }
    if (board[i][j] == 1) return count - 1
    else return count
  }
};

console.log(gameOfLife(
  [
    [1, 0, 1]
  ]
))