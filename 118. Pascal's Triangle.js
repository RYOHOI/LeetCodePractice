/* Given numRows, generate the first numRows of Pascal's triangle.

For example, given numRows = 5,
Return

[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
] */

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if (numRows <= 0) return []
  var nums = [[1]]

  for (var i = 1; i < numRows; i++) {
    nums[i] = []
    for (var j = 0; j < i + 1; j++) {
      var upperLeft, upperRight
      if (nums[i - 1][j - 1] == undefined) upperLeft = 0
      else upperLeft = nums[i - 1][j - 1]
      if (nums[i - 1][j] == undefined) upperRight = 0
      else upperRight = nums[i - 1][j]
      nums[i][j] = upperLeft + upperRight
      // console.log('upperLeft' + upperLeft + 'upperRight' + upperRight)
    }
  }

  return nums
};

console.log(generate(1))