/* Follow up for N-Queens problem.

Now, instead outputting board configurations, return the total number of distinct solutions. */

/**
 * @param {number} n
 * @return {string[][]}
 */


var totalNQueens = function(n) {
  let board = new Array(n)
  for (let i = 0; i < n; i++) {
    board[i] = Array(n).fill('o')
  }
  // return board
  let res = 0
  explore(board, 0)
  return res

  function explore(board, rowNo) {
    if (rowNo == n) {
      res++
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

console.log(totalNQueens(8))