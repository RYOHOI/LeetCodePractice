/* Given a non-empty string check if it can be constructed by taking a substring of it and appending multiple copies of the substring together. You may assume the given string consists of lowercase English letters only and its length will not exceed 10000.

Example 1:
Input: "abab"

Output: True

Explanation: It's the substring "ab" twice.
Example 2:
Input: "aba"

Output: False
Example 3:
Input: "abcabcabcabc"

Output: True

Explanation: It's the substring "abc" four times. (And the substring "abcabc" twice.) */

/**
 * @param {string} s
 * @return {boolean}
 */
/* var repeatedSubstringPattern = function(s) {
  // 'sssssss'
  var candidates = [],
    charCodeXOR = 0
  for (var i = 0; i < s.length; i++) {
    charCodeXOR ^= s.charCodeAt(i)
      // console.log('charCodeXOR:', charCodeXOR, '\ni+1:', i + 1)
    if (charCodeXOR == 0 && s.length % ((i + 1) / 2) == 0) {
      candidates.push((i + 1) / 2)
    }
  }
  console.log('candidates:', candidates)
  if (candidates.length == 0) return false
  for (var i = 0; i < candidates.length; i++) {
    var repeats = s.length / candidates[i]
    var substr = s.slice(0, candidates[i])
    console.log('substr', substr)
    validateCandidate:
      for (var j = 0; j < substr.length; j++) {
        var currentChar = substr[j]
        for (var k = 1; k < repeats; k++) {
          console.log(k * substr.length + j, s[k * substr.length + j] == currentChar)
          if (s[k * substr.length + j] != currentChar) break validateCandidate
        }
      }
    if (j == substr.length) return true
  }
  return false
}; */

var repeatedSubstringPattern = function(s) {
  ss = (s + s).slice(1, -1);
  return ss.indexOf(s) != -1;
};

console.log(repeatedSubstringPattern("aaaabaaaaa"))