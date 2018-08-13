/* Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

11110
11010
11000
00000
Answer: 1

Example 2:

11000
11000
00100
00011
Answer: 3

Credits:
Special thanks to @mithmatt for adding this problem and creating all test cases. */

/**
 * @param {character[][]} grid
 * @return {number}
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

  setCount() {
    return this.set.filter(it => it < 0 && it !== -1).length
  }
}

var numIslands = function (grid) {
  let rowCount = grid.length,
    colCount = grid[0].length,
    extraCount = 0

  let us = new UnionSet(rowCount * colCount)
  for (let i = 0; i < rowCount; i++) {
    for (let j = 0; j < colCount; j++) {
      if (grid[i][j] === '1') {
        let flag = false
        if (i - 1 >= 0 && grid[i - 1][j] === '1') {
          flag = true
          us.union((i - 1) * colCount + j, i * colCount + j)
        }
        if (i + 1 <= rowCount - 1 && grid[i + 1][j] === '1') {
          flag = true
          us.union((i + 1) * colCount + j, i * colCount + j)
        }
        if (j - 1 >= 0 && grid[i][j - 1] === '1') {
          flag = true
          us.union(i * colCount + j - 1, i * colCount + j)
        }
        if (j + 1 >= 0 && grid[i][j + 1] === '1') {
          flag = true
          us.union(i * colCount + j + 1, i * colCount + j)
        }
        if (!flag) {
          extraCount++
        }
      }
    }
  }
  return us.setCount() + extraCount
};