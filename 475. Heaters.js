/* Winter is coming! Your first job during the contest is to design a standard heater with fixed warm radius to warm all the houses.

Now, you are given positions of houses and heaters on a horizontal line, find out minimum radius of heaters so that all houses could be covered by those heaters.

So, your input will be the positions of houses and heaters seperately, and your expected output will be the minimum radius standard of heaters.

Note:
Numbers of houses and heaters you are given are non-negative and will not exceed 25000.
Positions of houses and heaters you are given are non-negative and will not exceed 10^9.
As long as a house is in the heaters' warm radius range, it can be warmed.
All the heaters follow your radius standard and the warm radius will the same.
Example 1:
Input: [1,2,3],[2]
Output: 1
Explanation: The only heater was placed in the position 2, and if we use the radius 1 standard, then all the houses can be warmed.
Example 2:
Input: [1,2,3,4],[1,4]
Output: 1
Explanation: The two heater was placed in the position 1 and 4. We need to use radius 1 standard, then all the houses can be warmed. */

/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function(houses, heaters) {
  houses.sort(function(a, b) {
    return a - b
  }), heaters.sort(function(a, b) {
    return a - b
  })
  var distance = [],
    j = 0
  for (var i = 0; i < houses.length; i++) {
    var leftHeater, rightHeater
    if (houses[i] < heaters[0]) {
      rightHeater = heaters[0] - houses[i]
      distance.push(rightHeater)
      continue
    }
    if (houses[i] > heaters[heaters.length - 1]) {
      leftHeater = houses[i] - heaters[heaters.length - 1]
      distance.push(leftHeater)
      continue
    }
    while (heaters[j] < houses[i]) {
      j++
    }
    if (heaters[j] > houses[i]) {
      leftHeater = houses[i] - heaters[j - 1]
      rightHeater = heaters[j] - houses[i]
      distance.push(Math.min(leftHeater, rightHeater))
    } else {
      distance.push(0)
    }
  }
  return Math.max(...distance)
};

console.log(findRadius([1], [1, 2, 3, 4]))