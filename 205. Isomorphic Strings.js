/* Given two strings s and t, determine if they are isomorphic.

Two strings are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character 
while preserving the order of characters. 
No two characters may map to the same character but a character may map to itself.

For example,
Given "egg", "add", return true.

Given "foo", "bar", return false.

Given "paper", "title", return true.

Note:
You may assume both s and t have the same length. */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  var uniqueChar = [], position = []
  var loops = s.length, index = -1
  for (var i = 0; i < loops; i++) {
    if (uniqueChar.indexOf(s[i]) == -1) {
      index++
      uniqueChar[index] = s[i]
      position[index] = [i]
      if (t.indexOf(t[i]) != i) return false
    } else {
      var which = uniqueChar.indexOf(s[i])
      position[which].push(i)
      if (t[position[which][0]] !== t[i]) return false
    }
  }
  return true
};

console.log(isIsomorphic('aa', 'ba'))