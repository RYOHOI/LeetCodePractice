/* Given two strings s and t, write a function to determine if t is an anagram of s.

For example,
s = "anagram", t = "nagaram", return true.
s = "rat", t = "car", return false.

Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case? 

Hint:
Hash map is better data structure to use here. */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  var uniqCharS = [],
    uniqCharT = [],
    positionS = [],
    positionT = []
  if (s.length != t.length) return false
  var tloops = s.length
  for (var i = 0; i < tloops; i++) {
    if (uniqCharS.indexOf(s[i]) == -1) {
      uniqCharS.push(s[i])
      positionS.push(1)
    } else {
      positionS[uniqCharS.indexOf(s[i])]++
    }
    if (uniqCharT.indexOf(t[i]) == -1) {
      uniqCharT.push(t[i])
      positionT.push(1)
    } else {
      positionT[uniqCharT.indexOf(t[i])]++
    }
  }
  if (uniqCharS.length != uniqCharT.length) return false
  var vloops = uniqCharS.length
  for (var i = 0; i < vloops; i++) {
    if (positionS[i] != positionT[uniqCharT.indexOf(uniqCharS[i])]) return false
  }
  return true
};

console.log(isAnagram('jjuias', 'uijjae'))