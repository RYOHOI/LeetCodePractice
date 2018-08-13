/* Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.

Example 1:
Input: "aba"
Output: True
Example 2:
Input: "abca"
Output: True
Explanation: You could delete the character 'c'.
Note:
The string will only contain lowercase characters a-z. The maximum length of the string is 50000. */

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  var j = s.length - 1
  for (var i = 0; i < s.length; i++) {
    if (s[i] != s[j]) {
      // console.log(s.substring(i + 1, j + 1), s.substring(i, j))
      return isPalindrome(s.substring(i + 1, j + 1)) || isPalindrome(s.substring(i, j))
    }
    j--
  }
  return true

  function isPalindrome(s) {
    if (s == null) return true
    var loops = Math.floor(s.length / 2),
      j = s.length - 1
    for (var i = 0; i < loops; i++) {
      if (s[i] != s[j]) return false
      j--
    }
    return true
  };
};

console.log(validPalindrome('abcbab'))