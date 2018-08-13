/* Let's play the minesweeper game (Wikipedia, online game)!

You are given a 2D char matrix representing the game board. 'M' represents an unrevealed mine, 'E' represents an unrevealed empty square, 'B' represents a revealed blank square that has no adjacent (above, below, left, right, and all 4 diagonals) mines, digit ('1' to '8') represents how many mines are adjacent to this revealed square, and finally 'X' represents a revealed mine.

Now given the next click position (row and column indices) among all the unrevealed squares ('M' or 'E'), return the board after revealing this position according to the following rules:

    If a mine ('M') is revealed, then the game is over - change it to 'X'.
    If an empty square ('E') with no adjacent mines is revealed, then change it to revealed blank ('B') and all of its adjacent unrevealed squares should be revealed recursively.
    If an empty square ('E') with at least one adjacent mine is revealed, then change it to a digit ('1' to '8') representing the number of adjacent mines.
    Return the board when no more squares will be revealed.

Example 1:

Input: 

[['E', 'E', 'E', 'E', 'E'],
 ['E', 'E', 'M', 'E', 'E'],
 ['E', 'E', 'E', 'E', 'E'],
 ['E', 'E', 'E', 'E', 'E']]

Click : [3,0]

Output: 

[['B', '1', 'E', '1', 'B'],
 ['B', '1', 'M', '1', 'B'],
 ['B', '1', '1', '1', 'B'],
 ['B', 'B', 'B', 'B', 'B']]

Explanation:

Example 2:

Input: 

[['B', '1', 'E', '1', 'B'],
 ['B', '1', 'M', '1', 'B'],
 ['B', '1', '1', '1', 'B'],
 ['B', 'B', 'B', 'B', 'B']]

Click : [1,2]

Output: 

[['B', '1', 'E', '1', 'B'],
 ['B', '1', 'X', '1', 'B'],
 ['B', '1', '1', '1', 'B'],
 ['B', 'B', 'B', 'B', 'B']]

Explanation:

Note:

    The range of the input matrix's height and width is [1,50].
    The click position will only be an unrevealed square ('M' or 'E'), which also means the input board contains at least one clickable square.
    The input board won't be a stage when game is over (some mines have been revealed).
    For simplicity, not mentioned rules should be ignored in this problem. For example, you don't need to reveal all the unrevealed mines when the game is over, consider any cases that you will win the game or flag any squares.
 */

/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function(board, click) {
  var currSlot = board[click[0]][click[1]]
  if (currSlot == 'M') {
    board[click[0]][click[1]] = 'X'
    return board
  }
  if (currSlot == 'B' || Number.isInteger(+(currSlot))) return board
  if (currSlot == 'E') update(click[0], click[1])
  return board

  function update(i, j) {
    var count = 0,
      emptyCell = []
    if (i == 0) var i1 = i
    else var i1 = i - 1
    if (i == board.length - 1) var i2 = i
    else var i2 = i + 1
    if (j == 0) var j1 = j
    else var j1 = j - 1
    if (j == board[0].length - 1) var j2 = j
    else var j2 = j + 1
    for (var rowNo = i1; rowNo <= i2; rowNo++) {
      for (var colNo = j1; colNo <= j2; colNo++) {
        if (rowNo == i && colNo == j) continue
        switch (board[rowNo][colNo]) {
          case 'M':
            count++
            break;
          case 'E':
            emptyCell.push([rowNo, colNo])
            break;
          default:
            break;
        }
      }
    }
    if (count) board[i][j] = count + ''
    else {
      board[i][j] = 'B'
      for (var it of emptyCell) {
        update(it[0], it[1])
      }
    }
  }
};

console.log(updateBoard(
  [
    ['E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'M', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E']
  ], [3, 1]
))