/* The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Given two integers x and y, calculate the Hamming distance.

Note:
0 ≤ x, y < 231.

Example:

Input: x = 1, y = 4

Output: 2

Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑

The above arrows point to positions where the corresponding bits are different. */

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
/* var hammingDistance = function(x, y) {
  if (x > y) {
    s1 = x.toString(2)
    s2 = y.toString(2)
  } else {
    s2 = x.toString(2)
    s1 = y.toString(2)
  }
  // console.log(s1, s2)
  var count = 0
  for (var i = 0; i < s1.length; i++) {
    if (!(s2[s2.length - 1 - i] ? s1[s1.length - 1 - i] == s2[s2.length - 1 - i] : s1[s1.length - 1 - i] == 0)) count++
  }
  return count
}; */

var hammingDistance = function(x, y) {
  var xor = x ^ y
  var str = xor.toString(2)
  var re = new RegExp(/1+/, 'g')
  var match = str.match(re)
  return match ? match.length : 0
}

console.log(hammingDistance(1, 4))