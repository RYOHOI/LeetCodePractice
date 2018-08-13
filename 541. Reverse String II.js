/* Given a string and an integer k, you need to reverse the first k characters
for every 2 k characters counting from the start of the string.If there are less than k characters left, reverse all of them.If there are less than 2 k but greater than or equal to k characters, then reverse the first k characters and left the other as original.
Example:
  Input: s = "abcdefg", k = 2
Output: "bacdfeg"
Restrictions:
  The string consists of lower English letters only.
Length of the given string and k will in the range[1, 10000] */

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
  var chars = s.split('')
  for (var i = 0; i < chars.length; i += 2 * k) {
    if ((i + k) > chars.length) {
      doReverse(i, chars.length)
    } else {
      doReverse(i, i + k)
    }
  }
  return chars.join('')

  function doReverse(leftIndex, rightIndex) {
    if (rightIndex > chars.length) rightIndex = chars.length
    var centerIndex = Math.floor((leftIndex + rightIndex) / 2)
    var count = 0
    for (var i = leftIndex; i < centerIndex; i++) {
      var cache = chars[i]
      chars[i] = chars[rightIndex - 1 - count]
      chars[rightIndex - 1 - count] = cache
      count++
    }
  }
};

console.log(reverseStr('abcdefgasd', 3))