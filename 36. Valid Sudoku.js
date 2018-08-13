/* Determine if a Sudoku is valid, according to: Sudoku Puzzles - The Rules.

The Sudoku board could be partially filled, where empty cells are filled with the character '.'.


A partially filled sudoku which is valid.

Note:
A valid Sudoku board (partially filled) is not necessarily solvable. Only the filled cells need to be validated. */

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  for (var i = 0; i < 9; i++) {
    if (!checkRow(i) || !checkCol(i)) return false
  }
  for (var i = 0; i < 9; i += 3) {
    for (var j = 0; j < 9; j += 3) {
      if (!checkSquare(i, j)) return false
    }
  }
  return true

  function checkRow(rowNo) {
    const set = new Set()
    for (var i = 0; i < 9; i++) {
      let num = board[rowNo][i]
      if (num === '.') {
        continue
      } else if (!set.has(num)) {
        set.add(num)
      } else {
        return false
      }
    }
    return true
  }
  function checkCol(colNo) {
    const set = new Set()
    for (var i = 0; i < 9; i++) {
      let num = board[i][colNo]
      if (num === '.') {
        continue
      } else if (!set.has(num)) {
        set.add(num)
      } else {
        return false
      }
    }
    return true
  }
  function checkSquare(rowNo, colNo) {
    const set = new Set()

    for (var i = rowNo; i < rowNo + 3; i++) {
      for (var j = colNo; j < colNo + 3; j++) {
        let num = board[i][j]
        if (num === '.') {
        } else if (set.has(num)) {
          return false
        } else {
          set.add(num)
        }
      }
    }
    return true
  }
}
const sudoku = [
  ['.', '.', '.', '.', '5', '.', '.', '1', '.'],
  ['.', '4', '.', '3', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '3', '.', '.', '1'],
  ['8', '.', '.', '.', '.', '.', '.', '2', '.'],
  ['.', '.', '2', '.', '7', '.', '.', '.', '.'],
  ['.', '1', '5', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '2', '.', '.', '.'],
  ['.', '2', '.', '9', '.', '.', '.', '.', '.'],
  ['.', '.', '4', '.', '.', '.', '.', '.', '.'],
]

console.log(isValidSudoku(sudoku))
