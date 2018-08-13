/* Given n points in the plane that are all pairwise distinct, a "boomerang" is a tuple of points (i, j, k) such that the distance between i and j equals the distance between i and k (the order of the tuple matters).

Find the number of boomerangs. You may assume that n will be at most 500 and coordinates of points are all in the range [-10000, 10000] (inclusive).

Example:
Input:
[[0,0],[1,0],[2,0]]

Output:
2

Explanation:
The two boomerangs are [[1,0],[0,0],[2,0]] and [[1,0],[2,0],[0,0]] */

/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
  var distance = {},
    result = 0
  for (var i = 0; i < points.length; i++) {
    for (var j = 0; j < points.length; j++) {
      if (i == j) continue
      var d = getDistance(points[i], points[j])
      distance[d] ? distance[d]++ : distance[d] = 1
    }
    for (var key in distance) {
      result += distance[key] * (distance[key] - 1)
    }
    distance = {}
  }
  return result

  function getDistance(point1, point2) {
    var x = point1[0] - point2[0]
    var y = point1[1] - point2[1]
    return x * x + y * y
  }
};

console.log(numberOfBoomerangs([
  [0, 0],
  [1, 0],
  [2, 0],
  [-1, 0],
  [0, -1]
]))