/* You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water. Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells). The island doesn't have "lakes" (water inside that isn't connected to the water around the island). One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

Example:

[[0,1,0,0],
 [1,1,1,0],
 [0,1,0,0],
 [1,1,0,0]]

Answer: 16
Explanation: The perimeter is the 16 yellow stripes in the image below: */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
  var count = 0
  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == 1 && cellPerimeter(i, j)) count += cellPerimeter(i, j)
    }
  }

  function cellPerimeter(i, j) {
    var up, down, left, right
    if (i - 1 < 0) up = 1
    else {
      if (grid[i - 1][j] == 0) up = 1
      else up = 0
    }
    if (i + 1 > grid.length - 1) down = 1
    else {
      if (grid[i + 1][j] == 0) down = 1
      else down = 0
    }
    if (j - 1 < 0) left = 1
    else {
      if (grid[i][j - 1] == 0) left = 1
      else left = 0
    }
    if (j + 1 > grid[0].length - 1) right = 1
    else {
      if (grid[i][j + 1] == 0) right = 1
      else right = 0
    }
    return up + down + left + right
  }
  return count
};

console.log(islandPerimeter([
  [0, 1, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 1, 0],
  [1, 1, 1, 0]
]))