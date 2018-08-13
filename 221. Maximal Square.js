/* Given a 2D binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

For example, given the following matrix:

1 0 1 0 0
1 0 1 1 1
1 1 1 1 1
1 0 0 1 0

Return 4.

Credits:
Special thanks to @Freezen for adding this problem and creating all test cases. */

/**
 * @param {character[][]} matrix
 * @return {number}
 */

// dynamic programming solution:
// dp(i, j)=min(dp(i−1, j), dp(i−1, j−1), dp(i, j−1))+1
var maximalSquare = function(matrix) {
  if (matrix.length == 0) return 0
  var dp = []
  var max = 0
  for (var i = 0; i < matrix.length; i++) dp.push(Array(matrix[0].length).fill(0))
  for (var i = 1; i < matrix.length; i++) {
    for (var j = 1; j < matrix[0].length; j++) {
      if (matrix[i - 1][j - 1] == 1) {
        /* var topLeft, top, left
        if (i == 0) {
          top = 0
          topLeft = 0
        } else {
          top = dp[i - 1][j]
        }
        if (j == 0) {
          left = 0
          topLeft = 0
        } else {
          left = dp[i][j - 1]
        }
        if (i != 0 && j != 0) topLeft = dp[i - 1][j - 1] */
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1
        if (dp[i][j] > max) max = dp[i][j]
      }
    }
  }
  // return dp
  return max ** 2
};

console.log(maximalSquare(
  [
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"]
  ]
))