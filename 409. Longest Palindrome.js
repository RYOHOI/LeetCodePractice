/* Given a string which consists of lowercase or uppercase letters, 
find the length of the longest palindromes that can be built with those letters.

This is case sensitive, for example "Aa" is not considered a palindrome here.

Note:
Assume the length of given string will not exceed 1,010.

Example:
Input: "abccccdd"
Output: 7

Explanation:
One longest palindrome that can be built is "dccaccd", whose length is 7. */

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  var m = {},
    pair = 0
  for (var i = 0; i < s.length; i++) {
    console.log('char', s[i])
    if (!(s[i] in m) || m[s[i]] == 0) {
      m[s[i]] = 1
    } else {
      m[s[i]]++
        if (m[s[i]] == 2) {
          pair++
          console.log('pair', pair)
          m[s[i]] = 0
        }
    }
  }
  if ((2 * pair + 1) <= s.length) {
    return 2 * pair + 1
  } else {
    return 2 * pair
  }
};

console.log(longestPalindrome('abccccddb'))